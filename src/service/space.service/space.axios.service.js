import axios from "axios";

let axiosInstace = axios.create({
    baseURL:'https://api.spacexdata.com/v3/launches'
})
const spacesAxios = () => {
  return axiosInstace.get()
}
const spaceAxios = (id) => {
    return axiosInstace.get('/'+ id)
}
export {spaceAxios,spacesAxios}