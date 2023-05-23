const express = require('express');
const db = require('./utils/db');
const response = require('./utils/response');
const server = express();
const port = 3000;

server.get('/', (req, res) => {
    res.send('REST API READYYY 👏👏');
});

server.get('/siswa', (req, res) => {
    let page = req.query.page;
    if (!page || page == 1) page = 0;
    db.query(`SELECT * FROM siswa LIMIT ${page * 10}, 20 ORDER BY name`, (err, data) => {
        if (err) throw err;
        const result = response('data berhasil..', data, true);
        res.status(200).json(result);
    })
});

server.get('/siswa/search', (req, res) => {
    let query = [req.query];
    // db.query(`SELECT * FROM siswa WHERE ${query} LIKE '%${query}%' ORDER BY nama`, (err, data) => {
    //     if (err) throw err;
    //     if (data.length === 0) {
    //         const result = response('data kosong', data, false);
    //         res.json(result);
    //     } else {
    //         const result = response('data berhasil..', data, true);
    //         res.status(200).json(result);
    //     }
    // })
});

server.use((req, res) => {
    res.sendStatus(404).send(404);
});

server.listen(port, () => {
    console.log(`server run... on http://localhost:${port}`);
});