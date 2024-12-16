const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 5000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/api/debt', async (req, res) => {
  try {
    const response = await fetch('https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/dts/public_debt_transactions');
    const data = await response.json();
    res.json({
      dates: data.map(item => item.date),
      debtValues: data.map(item => item.debtAmount)
    });
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});