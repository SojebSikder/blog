import axios from "axios";
import Config from "../config/app_config";

const Data = {
    list: (page = 1) => {
        return axios.get(Config.getApiUrl() + "/data?limit=" + page, { headers: { Authorization: 'Bearer ' + localStorage.getItem("api_token") } });
    },
    // list: (page = 1) => {
    //     return axios.get(Config.getApiUrl() + "/data?limit=" + page, { headers: { Authorization: 'Bearer ' + localStorage.getItem("api_token") } });
    // },
}

export default Data;