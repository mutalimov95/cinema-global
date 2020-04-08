var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('views', './views/v-fall');
app.set('view engine', 'pug');
app.set('view cache', false);

app.use(bodyParser.json({ limit: '5mb'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", express.static(__dirname));

app.get('/', function (req, res) {
    res.render('index', {
      posts: [
        {image: 'img/v-fall/slide1.jpg', year: 1999, category: 'films', title: '1 title'},
        {image: 'img/v-fall/slide2.jpg', year: 2001, category: 'films1', title: '2 title'}
      ]
    });
});

app.listen(3000, function () {
    console.log('Rendering pug app listening on port 3000');
});

