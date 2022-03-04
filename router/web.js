const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('index', {title: 'Mi titulo dinamico'});
});

router.get('/servicios', (request, response) => {
    response.render('servicios', {title: 'Servicios'});
});

module.exports = router;
