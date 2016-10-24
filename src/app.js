const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 2000;

app.set('port', PORT);

app.use('/', express.static(path.join(__dirname, '../docs')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../docs/index.html'));
});

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});