import axios from "axios";
import Config from "../config/app_config";

const User = {
    list: (page = 1) => {
        return axios.get(Config.getApiUrl() + '/user?page=' + page, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } });
    },
    add: (payload) => {
        return axios.post(Config.getApiUrl() + '/user', payload, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } });
    },
    showOne: (id) => {
        return axios.get(Config.getApiUrl() + '/user/' + id, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } });
    },
    edit: (payload, id) => {
        return axios.put(Config.getApiUrl() + '/user/' + id, payload, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } });
    },
    remove: (id) => {
        return axios.delete(Config.getApiUrl() + '/user/' + id, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } });
    },
    profile: () => {
        return axios.get(Config.getApiUrl() + '/profile', { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } });
    },
    updateProfile: (payload) => {
        return axios.post(Config.getApiUrl() + '/profile/update', payload, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } });
    },
};

export default User;