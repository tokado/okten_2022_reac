import axios from "axios";

let axiosInstence = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/users"
})
const usersAxios = ()=>{
   return axiosInstence.get()
}
const userAxios = (id) => {
    return axiosInstence.get( '/' + id )
}
export {userAxios,usersAxios}