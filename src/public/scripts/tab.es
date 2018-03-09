/**
 * 自定义Tab组件
 */
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
        //兼容异步事件绑定时this的指向改变
        let self = this;
        this.container.addEventListener('click', function(e) {
            // 通过事件委托给侧边栏的menu-item绑定click事件
            let target
            //兼容子元素不被绑定事件的问题
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
export default Tab;