var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.set('view cache', false);

app.use(bodyParser.json({ limit: '5mb'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/', function (req, res) {
    res.render(req.body.view, req.body.data);
});

app.listen(3000, function () {
    console.log('Rendering pug app listening on port 3000');
});
