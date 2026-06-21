# Basement Inventory

A self-hosted web application for tracking the contents of storage boxes in a basement or similar space. Items are organised in a three-level hierarchy — shelves contain boxes, and boxes contain items — making it easy to locate anything at a glance. All data is persisted on the server as a plain JSON file, so there is no database to configure and the entire inventory travels with the project directory.

## Features

- **Shelf > Box > Item hierarchy** — create named shelves, add labelled boxes to each shelf, and track individual items inside every box
- **Photo uploads** — attach a photo to any box for quick visual identification; stored as base64 in the JSON file
- **Tagging** — assign comma-separated tags to items and filter by them during search
- **Quantity tracking** — record the number of units for every item
- **Real-time search with highlight** — a global header search matches shelves, boxes, items, and tags simultaneously and highlights every match; a secondary search inside the box detail panel filters items within the open box
- **Dark / light theme** — toggle between themes with a single click; preference is persisted automatically
- **Export / Import backup** — download the full inventory as a timestamped JSON file and restore it at any time

## Quick Start

**Prerequisites:** Node.js 14 or higher

```bash
git clone https://github.com/Dmitrii-Volokitin-Job/basement-inventory.git
cd basement-inventory
npm install
node server.js
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

The server also binds to `0.0.0.0`, so any device on the same local network can reach it at `http://<server-ip>:8080`.

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| HTTP server | Express |
| Frontend | Vanilla HTML / CSS / JavaScript (no build step) |
| Styling | Tailwind CSS + DaisyUI (loaded via CDN) |
| Storage | Local JSON file (`inventory.json`) |

## License

MIT
