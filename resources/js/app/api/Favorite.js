import axios from "axios";
import Config from "../config/app_config";

// get posts
const FavoriteApi = {
    add: (data, successCb, failCb) => {
        return axios.post(Config.getApiUrl() + '/favorite', data, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } });
    },
    list: (successCb, failCb) => {
        return axios.get(Config.getApiUrl() + '/favorite', { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } });
    },

    getById: (id, successCb, failCb) => {
        return axios.get(Config.getApiUrl() + '/favorite/' + id, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } });
    },
    update: (id, data, successCb, failCb) => {

        return axios.post(Config.getApiUrl() + '/favorite/' + id, data, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } });
    },
    deleteById: (id, successCb, failCb) => {
        return axios.delete(Config.getApiUrl() + '/favorite/' + id, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } });
    },

};
export default FavoriteApi;