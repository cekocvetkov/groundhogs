const express = require('express')
const cors = require('cors');

const app = express()
const port = 3001

var groundhogsObjects = [{ id: 1, name: "Peter" }, { id: 2, name: "Bernhard" }, { id: 3, name: "Artur" }, { id: 4, name: "Stefan" }, { id: 5, name: "Tsvetan" }, { id: 6, name: "M-Th" }, { id: 7, name: "Johannes" }, { id: 8, name: "Amela" }];
//var groundhogs = ["Peter", "Bernhard", "Artur", "Stefan", "Tsvetan", "M-Th", "Johannes", "Amela"];

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/groundhogs', (req, res) => {
    res.send(groundhogsObjects);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
