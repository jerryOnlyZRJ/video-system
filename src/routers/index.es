import fs from 'fs'
import 'babel-polyfill'
import Router from 'koa-router'
import indexModel from '../models/index'
import CONFIG from '../config/config'
const router = new Router()

//配置根路由
router.get('/',async (ctx, next) => {
  ctx.type = 'html';
  ctx.body = await fs.createReadStream(CONFIG.get('indexPath'));
});

//api
router.get('/api/info',async (ctx, next) => {
  ctx.body = await indexModel.getInfo();
});

module.exports = router