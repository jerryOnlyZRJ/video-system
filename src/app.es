import koa from 'koa'
import path from 'path'
import serve from 'koa-static'
import router from './routers/index'
import CONFIG from './config/config'
const app = new koa()

//配置静态资源
app.use(serve(CONFIG.get('staticDir')))

app.use(router.routes(), router.allowedMethods());

app.listen(CONFIG.get('port'), () => {
    console.log(`website is starting at port ${CONFIG.get('port')}`)
});

// 导出app用于单测
export default app