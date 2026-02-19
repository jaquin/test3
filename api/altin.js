const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();

app.use(cors()); // Her yerden erişim

// Proxy endpoint
app.get('/api/altin', async (req, res) => {
  try {
    const response = await fetch('https://finans.truncgil.com/v4/today.json');
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy çalışıyor: http://localhost:${PORT}`));
