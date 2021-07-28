var express = require('express')
var exphbs = require('express-handlebars')
var app = express()
var port = 8020
// Configuring template engine and main file
app.engine('hbs',exphbs({
    defaultLayout:'main',
    extname:'.hbs'
}));
// Setting template Engine
app.set('view engine','hbs')
// routes
app.get('/', (req, res) => {
    res.render('home')
  })
// port where app is served
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
