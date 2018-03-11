/**
 * 页面入口文件
 */

import '../styles/index.css'
import Tab from './tab.es'
import 'babel-polyfill'

/**
 * 绑定menu-btn点击事件
 */
function menuEvn() {
    const menuBtn = document.querySelector('.main-header .icon-menu')
    const menu = document.querySelector('.main-sidebar')
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('displayed')
    })
}

/**
 * 实例化tab
 */
function tabEvns() {
    const tab = new Tab('wrapper')
    tab.active(0)
    tab.listenEves()
}

/**
 * 出入人员列表渲染
 * @param  Array data 后端查询数据库后传来的待渲染数据
 */
function renderInfo(data) {
    const form = document.querySelector('.info-form')
    //将数据库后插入的数据置顶
    data.sort(() => {
        return 1
    })
    let list = document.createElement('ul')
    list.className = 'info-body'
    for (let item of data) {
        list.innerHTML += `<li class="info-item ${item.abnormal - 0 ? 'abnormal' : ''}">
                                <div class="info-avatar ">
                                    <img src="${item.pic_url}" alt="">
                                </div>
                                <span>${item.last_time}</span>
                                <span>${item.sex - 0 ? '男' : '女'}</span>
                                <span>${item.age}</span>
                                <a href="#">详细信息</a>
                            </li>`
    }
    form.appendChild(list)
}

/**
 * AJAX拿后端数据
 */
function getInfo() {
    fetch('/api/info').then(async data => {
        return await data.json()
    }).then(data => {
        renderInfo(data)
    })
}

/**
 * 页面初始化
 */
function init() {
    menuEvn()
    tabEvns()
    getInfo()
}

init()