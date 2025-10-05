# 🏠 Basement Inventory System

A simple, web-based inventory management system for tracking storage boxes in your basement. Access it from any device on your local network!

## Features

- 📦 **Organize by Shelves**: Create multiple shelves to organize your storage
- 🖼️ **Photo Support**: Add photos to boxes (stored as base64 in JSON)
- 🔍 **Powerful Search**: Search across shelves, boxes, and items
- 📊 **Dashboard Statistics**: See total shelves, boxes, and storage usage at a glance
- 💾 **Auto-Save**: All changes saved automatically
- 📤 **Export/Import**: Backup and restore your inventory data
- 🌐 **Network Access**: Share with multiple users on your local network
- 🌙 **Dark Mode**: Easy on the eyes with a modern dark interface

## Technology Stack

- **Frontend**: HTML + Tailwind CSS + daisyUI
- **Backend**: Node.js + Express
- **Database**: Local JSON file (no database installation needed)
- **No build tools required**: Just run and go!

## Prerequisites

You need to have Node.js installed on your computer.

### Installing Node.js

1. **Windows/Mac**: Download and install from [nodejs.org](https://nodejs.org/)
   - Choose the LTS (Long Term Support) version
   - Run the installer and follow the prompts

2. **Verify installation**: Open a terminal/command prompt and run:
   ```bash
   node --version
   npm --version
   ```
   You should see version numbers for both.

## Installation

1. **Download or clone this project** to a folder on your computer

2. **Open a terminal** in the project folder

3. **Install dependencies**:
   ```bash
   npm install
   ```

## Running the Server

1. **Start the server**:
   ```bash
   npm start
   ```

2. **You'll see output like this**:
   ```
   🏠 Basement Inventory Server Started

   📍 Local access:
      http://localhost:8080
      http://127.0.0.1:8080

   🌐 Network access:
      http://192.168.1.100:8080

   💡 Share the network URL with other devices on your network!
   ```

3. **Open your browser** and go to `http://localhost:8080`

## Accessing from Other Devices

To access the inventory from other computers, phones, or tablets on your network:

1. **Find your computer's IP address** (shown when you start the server)

2. **On the other device**, open a web browser and go to:
   ```
   http://YOUR-IP-ADDRESS:8080
   ```
   For example: `http://192.168.1.100:8080`

3. **Make sure**:
   - Both devices are on the same Wi-Fi network
   - Your firewall allows port 8080 (Windows may ask for permission)

### Finding Your IP Address

**Windows**:
```bash
ipconfig
```
Look for "IPv4 Address" under your active network adapter.

**Mac/Linux**:
```bash
ifconfig
```
or
```bash
ip addr show
```
Look for an address like `192.168.x.x` or `10.0.x.x`

## Using the System

### Adding Shelves
1. Click "➕ Add Shelf" button in the header
2. Edit the shelf name by clicking on it
3. Shelves are assigned IDs like SHELF-001, SHELF-002, etc.

### Adding Boxes
1. Click "➕ Box" button on any shelf
2. Click the box to open the details panel
3. Add a photo if desired
4. Edit the box description
5. Boxes are assigned IDs like BOX-001, BOX-002, etc.

### Adding Items
1. Click on a box to open the details panel
2. Click "➕ Add Item" button
3. Fill in item details:
   - Name
   - Notes (description)
   - Quantity
   - Tags (comma-separated keywords)
4. Items are assigned IDs like ITEM-001-001, ITEM-001-002, etc.

### Searching
- **Global Search**: Use the search bar in the header to search across all shelves, boxes, and items
- **Box Search**: In the details panel, use the item search to filter items within a box
- Matching items are highlighted in yellow

### Exporting Data
1. Click "📤 Export" button
2. A JSON file will be downloaded with a timestamp
3. Store this file as a backup

### Importing Data
1. Click "📥 Import" button
2. Select a previously exported JSON file
3. Confirm the import (this will replace all current data)

## Data Storage

All data is stored in `inventory.json` in the same folder as the server.

### Backup Recommendations

1. **Regular Exports**: Export your data regularly using the Export button
2. **File Backup**: Copy the `inventory.json` file to a safe location
3. **Cloud Backup**: Store exports in cloud storage (Google Drive, Dropbox, etc.)

### Manual Backup

You can simply copy the `inventory.json` file:
```bash
# Windows
copy inventory.json inventory-backup-2024-01-15.json

# Mac/Linux
cp inventory.json inventory-backup-2024-01-15.json
```

## Troubleshooting

### Server won't start
- Make sure port 8080 is not already in use
- Check that you ran `npm install` first
- Verify Node.js is installed: `node --version`

### Can't access from other devices
- Verify both devices are on the same network
- Check firewall settings on the server computer
- Make sure you're using the correct IP address
- Try disabling firewall temporarily to test

### Data not saving
- Check that the server has write permissions in the folder
- Look for error messages in the server console
- Try restarting the server

### Photos not uploading
- Make sure the image file is not too large (recommended < 2MB per photo)
- Try a different image format (JPG, PNG, GIF all work)
- Check browser console for errors (F12)

## Limits

- **Maximum boxes**: 1000 boxes
- **Photo size**: Keep photos under 2MB for best performance
- **Concurrent users**: Multiple users can view, but be aware that simultaneous edits may cause conflicts

## Stopping the Server

Press `Ctrl+C` in the terminal where the server is running.

## Technical Details

### File Structure
```
basement-inventory/
├── package.json          # Node.js dependencies
├── server.js             # Express server
├── index.html            # Frontend UI
├── inventory.json        # Your data (auto-created)
└── README.md             # This file
```

### API Endpoints
- `GET /api/data` - Retrieve inventory data
- `POST /api/data` - Save inventory data

### Data Structure
```json
{
  "shelves": [
    { "id": "SHELF-001", "name": "Shelf Name" }
  ],
  "boxes": [
    {
      "id": "BOX-001",
      "shelfId": "SHELF-001",
      "description": "Box description",
      "photo": "data:image/jpeg;base64,..."
    }
  ],
  "items": [
    {
      "id": "ITEM-001-001",
      "boxId": "BOX-001",
      "name": "Item name",
      "notes": "Item notes",
      "quantity": 1,
      "tags": "tag1, tag2"
    }
  ]
}
```

## License

MIT - Feel free to use and modify as needed!

## Support

For issues or questions, check the troubleshooting section above or review the console output for error messages.
