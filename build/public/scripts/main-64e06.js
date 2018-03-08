webpackJsonp([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_index_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab_es__ = __webpack_require__(2);



//绑定menu点击事件
function menuEvn() {
    const menuBtn = document.querySelector('.main-header .icon-menu')
    const menu = document.querySelector('.main-sidebar')
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('displayed')
    })
}

//实例化tab
function tabEvns() {
    const tab = new __WEBPACK_IMPORTED_MODULE_1__tab_es__["a" /* default */]('wrapper')
    tab.active(0)
    tab.listenEves()
}

//出入人员列表渲染
function renderInfo(data) {
    const form = document.querySelector('.info-form')
    let list = document.createElement('ul')
    list.className = 'info-body'
    for (let item of data) {
        list.innerHTML += `<li class="info-item">
                                <div class="info-avatar">
                                    <img src="${item.pic_url}" alt="">
                                </div>
                                <span>${item.last_time}</span>
                                <a href="#">详细信息</a>
                            </li>`
    }
    form.appendChild(list)
}

//获取输入列表数据
function getInfo() {
    fetch('/api/info').then(async data => {
        return await data.json()
    }).then(data => {
        renderInfo(data)
    })
}

//界面初始化
function init() {
    menuEvn()
    tabEvns()
    getInfo()
}

init()

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Tab {
    constructor(containerId) {
        const container = document.getElementById(containerId)
        this.container = container;
        this.tabItems = container.querySelectorAll('.menu-item')
        this.contentItems = container.querySelectorAll('.content-item')
    }
    active(index) {
        if (index === this.activeIndex) {
            return;
        }
        //更新menu
        this.tabItems.forEach(function(tabItem, i) {
            // 如果序号等于目标序号，则加类名和显示内容框
            if (index === i) {
                tabItem.classList.add('selected');
                this.activeIndex = i;
                // 如果不等于目标序号，则要去掉类名和隐藏内容框
            } else {
                tabItem.classList.remove('selected');
            }
        }, this);
        // 更新content
        this.contentItems.forEach((contentItem, i) => {
            if (index === i) {
                contentItem.classList.add('displayed');
            } else {
                contentItem.classList.remove('displayed');
            }
        });
    }
    listenEves() {
        let self = this;
        this.container.addEventListener('click', function(e) {
            let target
            if (e.target.parentNode.className === 'menu-item') {
                target = e.target.parentNode
            } else {
                target = e.target;
            }
            if (target.className && target.className === 'menu-item') {
                var children = target.parentNode.children;
                var index = -1;
                for (var i = 0; i < children.length; i++) {
                    if (children[i] === target) {
                        index = i;
                    }
                }
                if (index >= 0) {
                    self.active(index);
                }
            }
        });
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Tab);

/***/ })
],[0]);