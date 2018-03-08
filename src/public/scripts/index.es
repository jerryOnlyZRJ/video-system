import '../styles/index.css'
import Tab from './tab.es'

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
    const tab = new Tab('wrapper')
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