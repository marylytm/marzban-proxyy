const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/', async (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) return res.status(400).send('Missing URL');
  try {
    const response = await fetch(targetUrl);
    const body = await response.text();
    res.set('Content-Type', 'text/plain');
    res.send(body);
  } catch (err) {
    res.status(500).send('Error: ' + err.message);
  }
});

app.listen(3000, () => console.log('Proxy server is running'));
