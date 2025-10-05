const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const os = require('os');

const app = express();
const PORT = 8080;
const DATA_FILE = path.join(__dirname, 'inventory.json');

app.use(express.json({ limit: '50mb' }));
app.use(express.static(__dirname));

const getLocalIP = () => {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
};

const createDefaultData = () => ({
  shelves: [],
  boxes: [],
  items: []
});

app.get('/api/data', async (req, res) => {
  try {
    let data;
    try {
      const fileContent = await fs.readFile(DATA_FILE, 'utf8');
      data = JSON.parse(fileContent);
    } catch (error) {
      console.log('📦 Creating new inventory.json file...');
      data = createDefaultData();
      await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
    }
    res.json(data);
  } catch (error) {
    console.error('❌ Error reading data:', error);
    res.status(500).json({ error: 'Failed to read data' });
  }
});

app.post('/api/data', async (req, res) => {
  try {
    const data = req.body;

    if (!data.shelves || !data.boxes || !data.items) {
      return res.status(400).json({ error: 'Invalid data structure' });
    }

    if (data.boxes.length > 1000) {
      return res.status(400).json({ error: 'Maximum 1000 boxes allowed' });
    }

    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
    console.log('💾 Data saved successfully');
    res.json({ success: true });
  } catch (error) {
    console.error('❌ Error saving data:', error);
    res.status(500).json({ error: 'Failed to save data' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  const localIP = getLocalIP();
  console.log('\n🏠 Basement Inventory Server Started\n');
  console.log('📍 Local access:');
  console.log(`   http://localhost:${PORT}`);
  console.log(`   http://127.0.0.1:${PORT}`);
  console.log('\n🌐 Network access:');
  console.log(`   http://${localIP}:${PORT}`);
  console.log('\n💡 Share the network URL with other devices on your network!\n');
});
