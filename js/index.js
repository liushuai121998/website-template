$(function () {
    //    核心业务
    var newsRender = {
        render(news) {
            var _this = this
            var newsStr = ''
            if(news) {
                news.forEach(function(item, index) {
                    newsStr += _this.createItem(item, index)
                })
                $('.core-news__list').html(newsStr)
            }
        },
        createItem(item, index) {
            return '<li class="core_news__list-item fl">\n' +
                '                                <div class="core_news__list-item__img">\n' +
                '                                    <img src='+item.image+' alt="">\n' +
                '                                </div>\n' +
                '                                <div class="core-news__list-item__info">\n' +
                '                                    <p>0'+(index+1)+'/</p>\n' +
                '                                    <p>'+item.title+'</p>\n' +
                '                                </div>\n' +
                '                            </li>'
        }
    }



    $.get('mock/index.json', null, function (data) {
        var news = data.news
        newsRender.render(news)
    })
})