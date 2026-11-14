"""Refresh the public, offline DONKI event snapshot without exposing the API key."""

import json
import os
from datetime import datetime, timedelta, timezone
from pathlib import Path
from urllib.parse import urlencode
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
ENV_FILE = ROOT / ".env.local"
OUTPUT = ROOT / "solar-event.js"
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


def main():
    today = datetime.now(timezone.utc).date()
    start = today - timedelta(days=LOOKBACK_DAYS - 1)
    url = "https://api.nasa.gov/DONKI/SEP?" + urlencode(
        {"startDate": start.isoformat(), "endDate": today.isoformat(), "api_key": api_key()}
    )
    try:
        with urlopen(Request(url, headers={"User-Agent": "MissionLuna/1.0"}), timeout=20) as response:
            records = json.load(response)
    except Exception:
        raise RuntimeError("No se pudo consultar DONKI. Revisa la clave y la conexión.") from None
    valid = [item for item in records if item.get("sepID") and item.get("eventTime") and item.get("link")]
    if not valid:
        print("Sin nuevos eventos SEP; se conserva el registro anterior.")
        return
    event = max(valid, key=lambda item: item["eventTime"])
    public_data = {
        "id": event["sepID"],
        "type": "SEP",
        "eventTime": event["eventTime"],
        "instrument": next((item.get("displayName", "") for item in event.get("instruments", []) if item.get("displayName")), ""),
        "link": event["link"],
    }
    OUTPUT.write_text(
        "// Copia pública y pequeña de un evento real de la API NASA DONKI/SEP.\n"
        "// Actualizar con: python3 scripts/update_donki.py\n"
        "const NASA_EVENT = " + json.dumps(public_data, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )
    print("Evento DONKI actualizado:", public_data["id"])


if __name__ == "__main__":
    main()
