var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('views', './src/views/v-fall');
app.set('view engine', 'pug');
app.set('view cache', false);

app.use(bodyParser.json({ limit: '5mb'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", express.static(__dirname + '/src'));

app.use(function (req, res, next) {
  if (req.path.startsWith('/v-fall')) app.set('views', './src/views/v-fall');
  else if (req.path.startsWith('/ladines')) app.set('views', './src/views/ladines');
  else if (req.path.startsWith('/showlaxy')) app.set('views', './src/views/showlaxy');
  else res.send('lolz')
  next()
})

app.get('/v-fall', function (req, res, next) {
    res.render('index');
    next()
});

app.get('/v-fall/error', function (req, res, next) {
  res.render('error');
  next()
});

app.get('/v-fall/news', function (req, res) {
  res.render('news');
});

app.get('/v-fall/list', function (req, res) {
  res.render('list');
});

app.get('/v-fall/inner', function (req, res) {
  res.render('inner');
});

app.get('/v-fall/contacts', function (req, res) {
  res.render('contacts');
});

app.get('/v-fall/article', function (req, res) {
  res.render('article');
});

app.get('/ladines', function (req, res) {
  res.render('index');
});

app.get('/ladines/error', function (req, res, next) {
  res.render('error');
  next()
});

app.get('/ladines/news', function (req, res) {
  res.render('news');
});

app.get('/ladines/list', function (req, res) {
  res.render('list');
});

app.get('/ladines/contacts', function (req, res) {
  res.render('contacts');
});

app.get('/ladines/article', function (req, res) {
  res.render('article');
});

app.get('/showlaxy', function (req, res) {
  res.render('index');
});

app.get('/showlaxy/error', function (req, res, next) {
  res.render('error');
  next()
});

app.get('/showlaxy/news', function (req, res) {
  res.render('news');
});

app.get('/showlaxy/list', function (req, res) {
  res.render('list');
});

app.get('/showlaxy/inner', function (req, res) {
  res.render('inner');
});

app.get('/showlaxy/contacts', function (req, res) {
  res.render('contacts');
});

app.get('/showlaxy/article', function (req, res) {
  res.render('article');
});

app.listen(3000, function () {
    console.log('Rendering pug app listening on port 3000');
});

