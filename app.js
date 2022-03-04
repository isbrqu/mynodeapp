const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.static(__dirname + '/public'));
app.use('/', require('./router/web'))
app.use('/mascota', require('./router/mascota'))

app.use((request, response, next) => {
    // response.status(404).sendFile(__dirname + '/public/404.html');
    response.status(404).render('404', {
        title: 'ERROR: 404',
        description: 'Hola k ase'
    });
});

app.listen(port, () => {
    console.log('Estoy escuchando: ', port);
});

