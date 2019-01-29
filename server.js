const express = require('express');
const app = express();
const axios = require('axios');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
 
app.listen(8000, () => {
    console.log('App listening on port 8000')
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.get('/api/v1/queryResponse', (req, res) => {
    axios('http://localhost:3000/queryResponse').then(res => {
        console.log(res.data)
        // res.send(res.data.status)
    })
})

app.get('/api/v1/graphData', (req, res) => {
    axios('http://localhost:3000/graphData').then(res => console.log(res.data))
})
