"""Refresh the public, offline DONKI event snapshot without exposing the API key."""

import json
from pathlib import Path
from urllib.parse import urlencode
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
ENV_FILE = ROOT / ".env.local"
OUTPUT = ROOT / "solar-event.js"
DATE = "2017-09-10"


def api_key():
    for line in ENV_FILE.read_text(encoding="utf-8").splitlines():
        if line.startswith("NASA_API_KEY="):
            value = line.split("=", 1)[1].strip().strip('"\'')
            if value:
                return value
    raise RuntimeError("Falta NASA_API_KEY en .env.local")


def main():
    url = "https://api.nasa.gov/DONKI/SEP?" + urlencode(
        {"startDate": DATE, "endDate": DATE, "api_key": api_key()}
    )
    try:
        with urlopen(Request(url, headers={"User-Agent": "MissionLuna/1.0"}), timeout=20) as response:
            records = json.load(response)
    except Exception:
        raise RuntimeError("No se pudo consultar DONKI. Revisa la clave y la conexión.") from None
    event = next((item for item in records if item.get("sepID") == "2017-09-10T16:25:00-SEP-001"), None)
    if event is None:
        raise RuntimeError("El evento esperado no apareció en la respuesta de DONKI")
    public_data = {
        "id": event["sepID"],
        "type": "SEP",
        "eventTime": event["eventTime"],
        "instrument": event["instruments"][0]["displayName"],
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
