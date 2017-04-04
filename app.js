var express=require('express');
var path = require('path');
var lessMiddleware = require('less-middleware');
var routes = require('./routes/index');
var research = require('./routes/research');
var article = require('./routes/article');

var port=process.env.PORT||3000;
var app=express();

app.listen(port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','jade');
app.use(lessMiddleware(path.join(__dirname,'/public'),{
	debug: false,
	preprocess: {
		path: function(pathname, req) {
			return pathname.replace('style', 'less');
		}
	}
}));
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', routes);
app.use('/research', research);
app.use('/article', article);