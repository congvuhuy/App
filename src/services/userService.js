//import axios from "axios"
import axios from "./customize-axios"
const fetchAllUsers = ()=>{
    return axios.get('users')
}

export { fetchAllUsers}
