"""Refresh the public DONKI snapshots without exposing the API key."""

import json
import os
from datetime import datetime, timedelta, timezone
from pathlib import Path
from urllib.parse import urlencode
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
ENV_FILE = ROOT / ".env.local"
SEP_OUTPUT = ROOT / "solar-event.js"
WEATHER_OUTPUT = ROOT / "space-weather.js"
LOOKBACK_DAYS = 30


def api_key():
    if os.environ.get("NASA_API_KEY"):
        return os.environ["NASA_API_KEY"]
    if ENV_FILE.exists():
        for line in ENV_FILE.read_text(encoding="utf-8").splitlines():
            if line.startswith("NASA_API_KEY="):
                value = line.split("=", 1)[1].strip().strip('"\'')
                if value:
                    return value
    raise RuntimeError("Falta NASA_API_KEY en el entorno o en .env.local")


def fetch_records(kind, start, end, key):
    url = "https://api.nasa.gov/DONKI/" + kind + "?" + urlencode(
        {"startDate": start.isoformat(), "endDate": end.isoformat(), "api_key": key}
    )
    with urlopen(Request(url, headers={"User-Agent": "MissionLuna/1.0"}), timeout=20) as response:
        return json.load(response)


def write_snapshot(path, variable, data, description):
    path.write_text(
        "// " + description + " Actualizar con: python3 scripts/update_donki.py\n"
        "const " + variable + " = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )


def main():
    today = datetime.now(timezone.utc).date()
    key = api_key()
    successes = 0

    try:
        records = fetch_records("SEP", today - timedelta(days=LOOKBACK_DAYS - 1), today, key)
        valid = [item for item in records if item.get("sepID") and item.get("eventTime") and item.get("link")]
        if valid:
            event = max(valid, key=lambda item: item["eventTime"])
            data = {
                "id": event["sepID"], "type": "SEP", "eventTime": event["eventTime"],
                "instrument": next((item.get("displayName", "") for item in event.get("instruments", []) if item.get("displayName")), ""),
                "link": event["link"],
            }
            write_snapshot(SEP_OUTPUT, "NASA_EVENT", data, "Evento público de partículas solares de NASA DONKI/SEP.")
            print("Evento SEP actualizado:", data["id"])
        else:
            print("Sin eventos SEP recientes; se conserva el registro histórico.")
        successes += 1
    except Exception:
        print("No se pudo consultar SEP; se conserva el registro anterior.")

    try:
        records = fetch_records("notifications", today - timedelta(days=6), today, key)
        valid = [item for item in records if item.get("messageType") and item.get("messageIssueTime") and item.get("messageURL")]
        if valid:
            latest = max(valid, key=lambda item: item["messageIssueTime"])
            data = {"type": latest["messageType"], "issued": latest["messageIssueTime"], "link": latest["messageURL"]}
            write_snapshot(WEATHER_OUTPUT, "SPACE_WEATHER", data, "Último boletín público guardado de NASA DONKI.")
            print("Boletín actualizado:", data["type"], data["issued"])
        else:
            print("Sin boletines recientes; se conserva el anterior.")
        successes += 1
    except Exception:
        print("No se pudo consultar boletines; se conserva el anterior.")

    if not successes:
        raise RuntimeError("No se pudo consultar DONKI. Revisa la conexión y la clave.")


if __name__ == "__main__":
    main()
