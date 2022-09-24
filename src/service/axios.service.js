import axios from "axios";

let baseURL = "https://jsonplaceholder.typicode.com";
let axiosInstance = axios.create({baseURL})

const service = {
    getAllTodos: () => axiosInstance.get(baseURL + "/todos"),
    getAllAlbums: () => axiosInstance.get(baseURL + "/albums"),
    getAllСomments: () => axiosInstance.get(baseURL + "/comments")
}
export {axiosInstance, baseURL, service}