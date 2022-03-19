import Axios from "axios";

const Api = Axios.create({
    baseURL: "http://localhost:3003"
})

export default Api