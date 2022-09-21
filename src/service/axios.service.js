import axios from "axios";

let baseURL = 'http://owu.linkpc.net/api/v2/cars'

let axiosInstance = axios.create({baseURL})

export { axiosInstance,baseURL }