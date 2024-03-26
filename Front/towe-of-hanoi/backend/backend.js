
import axios from 'axios';
console.log('apii')

const api =axios.create({
    
    baseURL: 'http://127.0.0.1:8001'
});



export default api
