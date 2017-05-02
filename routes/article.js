var express = require('express');
var nav = require('./navbar');
var url=require('url');
var router = express.Router();
var api=require('./utils/api');

router.get('/:page',function(req,res){
    var params = url.parse(req.url, true).query;
    var page=req.params.page;
    var path='/discover/get_travel_note_list/?';
    var search_word={'page': page};
    api.get(search_word,path).then(function (data) {
        var article = {
            nav: nav.create(req),
            key: 'article',
            point:'article',
            title: "推荐游记",
            articledata:data,
            page: page
        };
        res.render('article/article', article);
    });
});

router.get('/content/:id',function(req,res){
    var params = url.parse(req.url, true).query;
    var id=req.params.id;
    var path='/discover/get_travel_note/?';
    var search_word={'id': id};
    api.get(search_word,path).then(function (data) {
        var content = {
            nav: nav.create(req),
            key: 'content',
            point:'article',
            title: "游记内容",
            condata:data
        };
        console.log(data);
        res.render('article/content', content);
    });
});

module.exports = router;

