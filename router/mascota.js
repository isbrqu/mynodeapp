const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('mascota', {
        mascota: [
            {id: '1', name: 'makina'},
            {id: '2', name: 'chico'},
        ]
    });
});

module.exports = router;
