define(function (require, exports, module) {
    var $ = require('jquery');
    var api=require('api');

    var event={
         //搜索框数据处理
        'searchdata': function (word) {
            var url="/searchword";
            var data={word:word};
            api.send(url,"post",data).then(function (result){
                if(result=="404 NOT FOUND!!"){
                    alert("没有该景点");
                }else if(result.id){
                    location.href="../research/scenic/"+result.scene_name;
                }else{
                    location.href="../research/search/"+result.scene_name;
                }
            });
        }
    };

    module.exports={
        //实现
        'main':function(){
            //事件效果
            this.init();
        },
        'init': function () {
            $(".span-search").click(function () {
                var searchWord=$(".index-search-text").val();
                $(".index-search-text").val(null);
                event.searchdata(searchWord);
            });
        }
    };

});
