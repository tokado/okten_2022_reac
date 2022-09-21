import {baseURL, axiosInstance} from "./axios.service";

const CarsService = {
    getAll:()=>axiosInstance.get(baseURL),
    create:(car)=>axiosInstance.post(baseURL, car),
    getById:(id)=>axiosInstance.get(`${baseURL}/${id}`),
    update:(id)=>axiosInstance.put(`${baseURL}/${id}`),
    delete:(id)=>axiosInstance.delete(`${baseURL}/${id}`),
}
export { CarsService }