var express = require('express')
var app = express()

app.use(express.static(__dirname + '/images'));
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/fruit', function(req, res){
   res.render('fruit', {fruits: [{title:'Windows', image:"a.jpg"}, {title:'OSX', image:"b.jpg"}, {title:'Andriod', image: "c.jpg"}, {title:'IOS', image:"d.jpg"} ] , foo: 'Computer'})
})
app.listen(8000)