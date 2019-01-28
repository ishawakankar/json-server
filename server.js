const express = require('express');
const app = express();
const axios = require('axios');

app.listen(8000, () => {
    console.log('App listening on port 8000')
})

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.get('/api/v1/queryResponse', (req, res) => {
    axios('http://localhost:3000/queryResponse').then(res => {
        console.log(res.data)
        // res.send(res.data)
    })
})

app.get('/api/v1/graphData', (req, res) => {
    axios('http://localhost:3000/graphData').then(res => console.log(res.data))
})
