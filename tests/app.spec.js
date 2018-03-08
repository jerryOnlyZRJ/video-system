// app.js单元测试
import 'babel-polyfill'
import app from '../build/app.js'
import request from 'supertest'

describe('test app.js', () => {
    test('test get /', async() => {
        const res = await request(app.listen()).get('/')
        expect(res.status).toBe(200)
    })

    test('test get /api/info', async() => {
        const res = await request(app.listen()).get('/api/info')
        expect(JSON.parse(res.text).length).toBe(4)
    })
})