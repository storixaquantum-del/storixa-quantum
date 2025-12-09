import qrcode
import json

USERNAME = "storixaquantum-del"
REPO = "storixa-quantum"

with open("products.json") as f:
    products = json.load(f)

for serial in products:
    url = f"https://{USERNAME}.github.io/{REPO}/?serial={serial}"
    img = qrcode.make(url)
    img.save(f"qr_{serial}.png")

print("All QR codes generated!")
