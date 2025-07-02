const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let tradeHistory = [];

app.post('/api/trades', (req, res) => {
  const trade = req.body;
  tradeHistory.push(trade);
  console.log('Trade received:', trade);
  res.status(201).json({ message: 'Trade saved successfully' });
});

app.get('/api/trades', (req, res) => {
  res.json(tradeHistory);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
