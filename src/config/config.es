import path from 'path'
const CONFIG = new Map()
CONFIG.set('port', 3000)
CONFIG.set('staticDir', path.join(__dirname, '../public'))
CONFIG.set('indexPath', path.join(__dirname, '../views/index.html'))
CONFIG.set('infoUrl', 'http://localhost/info.php')
export default CONFIG