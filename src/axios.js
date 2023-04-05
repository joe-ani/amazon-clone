import axios from 'axios';


const instance = axios.create({
    baseURL: '...' //api url ->> create  api using node express and mongoose 
})

export default instance;