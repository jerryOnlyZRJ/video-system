// 自动化测试
// ***运行自动化测试前请先下载并安装firefox浏览器！！！***
// ***运行自动化测试前请先下载并安装firefox浏览器！！！***
// ***运行自动化测试前请先下载并安装firefox浏览器！！！***
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example () {
  let driver = await new Builder().forBrowser('firefox').build()
  try {
    await driver.get('http://localhost:3000/')
    await driver.findElement(By.className('icon-menu')).click()
    await driver.wait(driver.findElement(By.className('main-sidebar')).isDisplayed(), 1000)
    await driver.findElement(By.css('.menu-item:nth-child(2)')).click()
    await driver.wait(driver.findElement(By.className('io-info')).isDisplayed(), 1000)
  } finally {
    await driver.quit()
  }
})()
