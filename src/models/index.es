import request from 'request-promise'
import CONFIG from '../config/config'

let indexModel = {
    getInfo: () => {
    	return request(CONFIG.get('infoUrl')).then(async data => {
    		return data
    	})
    }
}

export default indexModel;