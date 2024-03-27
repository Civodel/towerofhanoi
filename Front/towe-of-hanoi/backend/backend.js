
import axios from 'axios';
console.log('apii')

const LOCAL_BASE_URL='http://127.0.0.1:8000'
const HEROKU_BASE_URL='https://towerofhanoi-5f1dd4584ace.herokuapp.com'

const api =axios.create({
    
    baseURL: LOCAL_BASE_URL
});



export default api
