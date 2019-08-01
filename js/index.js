$(function() {
    //    核心业务
    var newsRender = {
        render: function (news) {
            var _this = this
            var newsStr = ''
            if (news) {
                news.forEach(function(item, index) {
                    newsStr += _this.createItem(item, index)
                })
                $('.core-news__list').html(newsStr)
            }
        },
        createItem: function (item, index) {
            return '<li class="core_news__list-item fl">\n' +
                '                                <div class="core_news__list-item__img">\n' +
                '                                    <img src=' + item.image + ' alt="">\n' +
                '                                </div>\n' +
                '                                <div class="core-news__list-item__info">\n' +
                '                                    <p>0' + (index + 1) + '/</p>\n' +
                '                                    <p>' + item.title + '</p>\n' +
                '                                </div>\n' +
                '                            </li>'
        }
    }

    // 新闻资讯
    var newsCenter = {
        render: function (news) {
            var _this = this
            var newsStr = ''
            if (news) {
                news.forEach(function(item, index) {
                    newsStr += _this.createItem(item)
                })
                $('.news-center__list').html(newsStr)
            }
        },
        createItem: function (item, index) {
            return '<li class="news-center__list-item fl col-md-4 col-sm-6 col-xs-12">\n' +
                '                                <div class="news-center__list-item__title">\n' +
                '                                    <a href="javascript:;">' + item.title + '</a>\n' +
                '                                </div>\n' +
                '                                <div class="news-center__list-item__content">\n' +
                item.content +
                '                                </div>\n' +
                '                                <div class="detail-btn fr">\n' +
                '                                    <a href="javascript:;">查看详情</a>\n' +
                '                                </div>\n' +
                '                            </li>'
        }
    }

    // 作品欣赏
    var productRender = {
        render: function (products) {
            var _this = this
            var newsStr = ''
            if (products) {
                products.forEach(function(item, index) {
                    newsStr += _this.createItem(item)
                })
                $('.product__list').html(newsStr)
            }
        },
        createItem: function (item, index) {
            return '<li class="product__list-item col-md-4 col-sm-6 col-xs-12">\n' +
                '                                <a href="./product-detail.html" class="product__list-item-link">\n' +
                '                                    <div class="product__list-item__img-wrap">\n' +
                '                                        <img src=' + item.image + ' alt="描述信息">\n' +
                '                                    </div>\n' +
                '                                    <div class="product__list-item__txt">\n' +
                '                                        <div class="txt cleaarfix">\n' +
                '                                            <span>' + item.type + '</span>\n' +
                '                                            <i class="icon icon-link fr"></i>\n' +
                '                                        </div>\n' +
                '                                    </div>\n' +
                '                                </a>\n' +
                '                            </li>'
        }
    }



    $.get('mock/index.json', null, function(data) {
        newsRender.render(data.news)
        newsCenter.render(data['news-center'])
        productRender.render(data.products)
    })
})