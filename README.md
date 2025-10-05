# 🏠 Basement Inventory System

A modern, web-based inventory management system for tracking storage boxes in your basement. Beautiful UI with dark/light themes, photo support, and powerful search capabilities. Access it from any device on your local network!

## ✨ Features

### Core Features
- 📦 **Smart Organization**: Create shelves, boxes, and items in a hierarchical structure
- 🖼️ **Photo Support**: Add photos to boxes for quick visual identification
- 🔍 **Powerful Search**:
  - Global search across all shelves, boxes, and items
  - Item-level search within boxes
  - Real-time search with highlighting
- 💾 **Auto-Save**: All changes saved automatically to local JSON storage
- 📤 **Backup & Restore**: Export/Import your inventory as JSON

### User Experience
- 🌙 **Theme Toggle**: Switch between dark and light themes
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile
- 🎯 **Item Tooltips**: Hover over boxes to see all contents
- 🗑️ **Smart Deletion**: Confirmation dialogs prevent accidental data loss
- 📊 **Live Statistics**: Dashboard shows total shelves and boxes
- 🌐 **Network Access**: Multi-device access on local network

### Technical Features
- ⚡ **No Build Required**: Pure HTML/CSS/JS frontend
- 🚀 **Fast & Lightweight**: Minimal dependencies
- 🔒 **Local Storage**: All data stays on your machine
- 🎨 **Modern UI**: Built with Tailwind CSS & DaisyUI

## 🖼️ Screenshots

The app features a clean, modern interface with:
- Shelf-based organization with visual box cards
- Side panel for detailed box management
- Photo uploads for boxes
- Item management with quantity and tags
- Smooth animations and transitions

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/basement-inventory.git
   cd basement-inventory
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```

4. **Open your browser** to `http://localhost:8080`

You'll see:
```
🏠 Basement Inventory Server Started

📍 Local access:
   http://localhost:8080
   http://127.0.0.1:8080

🌐 Network access:
   http://192.168.x.x:8080

💡 Share the network URL with other devices on your network!
```

## 📱 Multi-Device Access

### Accessing from Other Devices

1. **On your server computer**, note the network IP shown when starting the server
2. **On any other device** (phone, tablet, computer) on the same network:
   - Open a browser
   - Navigate to `http://YOUR-SERVER-IP:8080`
   - Example: `http://192.168.1.100:8080`

### Requirements
- Both devices must be on the same Wi-Fi/network
- Firewall must allow port 8080
- Server computer must be running

## 📖 Usage Guide

### Creating Shelves
1. Click **"➕ Shelf"** button in the header
2. A new shelf is created with ID `SHELF-001`, `SHELF-002`, etc.
3. Click the shelf name to edit it
4. Click **"🗑️"** to delete a shelf (with confirmation)

### Managing Boxes
1. Click **"➕ Box"** on any shelf
2. Click the box card to open the details panel
3. In the details panel:
   - View/Edit box description
   - Upload or remove photos (🗑️ to remove)
   - Add and manage items

### Working with Items
1. Open a box to view the details panel
2. Click **"➕ Add Item"** to create a new item
3. Fill in item details:
   - **Name**: Item description
   - **Notes**: Additional details
   - **Quantity**: Number of items
   - **Tags**: Comma-separated keywords for searching
4. Click **"🗑️"** to delete an item (with confirmation)

### Searching
- **Global Search**: Header search bar searches across all data
  - Matches shelves, boxes, and items
  - Highlights matching results
- **Item Search**: Details panel search filters items in current box
- Clear search with the **✖** button

### Theme Toggle
- Click the **🌙/☀️** button in the header
- Toggle between dark and light themes
- Preference saved automatically

### Data Management

#### Exporting Data
1. Click **"📤 Export"** button
2. Downloads `inventory-backup-YYYY-MM-DD-HHMMSS.json`
3. Store safely as backup

#### Importing Data
1. Click **"📥 Import"** button
2. Select a previously exported JSON file
3. Confirm the import
   - ⚠️ **Warning**: Replaces all current data

## 🗂️ Data Storage

### Storage Location
All data is stored in `inventory.json` in the project root directory.

### Data Structure
```json
{
  "shelves": [
    {
      "id": "SHELF-001",
      "name": "Holiday Decorations"
    }
  ],
  "boxes": [
    {
      "id": "BOX-001",
      "shelfId": "SHELF-001",
      "description": "Christmas Lights",
      "photo": "data:image/jpeg;base64,..."
    }
  ],
  "items": [
    {
      "id": "ITEM-001-001",
      "boxId": "BOX-001",
      "name": "LED String Lights",
      "notes": "Multicolor 100-bulb strands",
      "quantity": 8,
      "tags": "christmas, lights, led, outdoor"
    }
  ]
}
```

### Backup Strategies

**Recommended: Regular Exports**
- Use the Export button weekly/monthly
- Store exports in cloud storage (Google Drive, Dropbox, etc.)

**Alternative: File Copy**
```bash
# Manual backup
cp inventory.json backups/inventory-$(date +%Y%m%d).json
```

**Version Control**
- The `inventory.json` can be committed to git if desired
- Add to `.gitignore` if you want to keep data private

## 🛠️ Technology Stack

### Frontend
- **HTML5**: Semantic markup
- **CSS**: Tailwind CSS + DaisyUI components
- **JavaScript**: Vanilla ES6+
- **Icons**: Emoji-based icons

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Storage**: JSON file system

### No Build Tools Required
- No webpack, vite, or bundlers needed
- Direct browser loading via CDN
- Simple deployment

## ⚙️ Configuration

### Changing Port
Edit `server.js`:
```javascript
const PORT = process.env.PORT || 8080; // Change 8080 to your preferred port
```

### Data File Location
Edit `server.js`:
```javascript
const DATA_FILE = './inventory.json'; // Change path if needed
```

## 🐛 Troubleshooting

### Server Issues

**Port already in use**
```bash
# Find process using port 8080
lsof -i :8080        # Mac/Linux
netstat -ano | findstr :8080   # Windows

# Kill the process or use a different port
```

**Server won't start**
- Ensure Node.js is installed: `node --version`
- Ensure dependencies are installed: `npm install`
- Check for error messages in console

### Network Access Issues

**Can't connect from other devices**
- Verify same network (Wi-Fi/LAN)
- Check firewall settings
- Ensure correct IP address
- Try `http://` not `https://`

**Firewall Configuration**
```bash
# Windows: Allow port 8080
netsh advfirewall firewall add rule name="Basement Inventory" dir=in action=allow protocol=TCP localport=8080

# Mac: Firewall should prompt automatically
```

### Data Issues

**Changes not saving**
- Check console for errors
- Verify file write permissions
- Check disk space
- Restart server

**Photos not uploading**
- Ensure file size < 2MB
- Supported formats: JPG, PNG, GIF
- Check browser console (F12) for errors

### Performance

**Slow loading with many items**
- Export data and archive old items
- Keep photos under 500KB when possible
- Consider splitting into multiple inventories

## 📊 Limits & Best Practices

### Current Limits
- **Maximum Boxes**: 1000 per inventory
- **Photo Size**: < 2MB recommended per photo
- **Concurrent Users**: Read/write conflicts possible with simultaneous edits

### Best Practices
- Regular backups via Export
- Compress photos before upload
- Use descriptive tags for better search
- Archive old/unused items periodically

## 🔒 Security Notes

- **Local Network Only**: Server binds to 0.0.0.0, accessible on LAN
- **No Authentication**: Anyone on network can access
- **No Encryption**: Data stored in plain JSON
- **Consider**: Add authentication if exposing beyond local network

## 📁 Project Structure

```
basement-inventory/
├── index.html              # Frontend UI
├── server.js               # Express server
├── package.json            # Dependencies
├── package-lock.json       # Dependency lock
├── inventory.json          # Data storage (auto-created)
├── .gitignore             # Git ignore rules
├── README.md              # This file
└── logs/                  # Session logs (gitignored)
```

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📜 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

- Built with [Express.js](https://expressjs.com/)
- UI powered by [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
- Icons from emoji set

## 📞 Support

- **Issues**: Open a GitHub issue
- **Questions**: Check troubleshooting section
- **Feature Requests**: Submit via GitHub issues

---

**Made with ❤️ for organized basements everywhere!**

🤖 Generated with [Claude Code](https://claude.com/claude-code)
