const express = require('express');

const PORT = process.env.PORT || 8000;
const app = express();

app.use('/js', express.static('dist/app'));
app.use('/css', express.static('dist/app/css'));
app.use('/', express.static('public'));

app.listen(PORT, () => console.log('Forstebud.no is running'));
