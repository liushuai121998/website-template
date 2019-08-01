$(function () {

    var nav = {
        renderStr: function (navs) {
            var navStr = ''
            var mNavStr = ''
            var _this = this
            navs.forEach(function (item, index) {
                navStr += _this.createNav(item, index)
                mNavStr += _this.createMNav(item, index)
            })
            return {
                navStr: navStr,
                mNavStr: mNavStr
            }
        },
        createNav: function (item, index) {
            return '<li class="header__nav-item">\n' +
                '                            <a class="nav-link" href="'+item.path+'">'+item.title+'</a>\n' +
                '                        </li>'
        },
        createMNav: function(item, index) {
            return '<li class="m-nav__item">\n' +
                '                            <a class="nav-link" href="'+item.path+'">'+item.title+'</a>\n' +
                '                        </li>'
        }
    }


    $.get('mock/nav.json', null, function(data) {
       var navObj = nav.renderStr(data.navs)
        $('.header__nav-content').html(navObj.navStr)
        $('.m-nav__content').html(navObj.mNavStr)
    })
})