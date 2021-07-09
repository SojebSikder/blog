import axios from "axios";
import Config from "../config/app_config";

// get posts
const CategoryApi = {
    add: (data, successCb, failCb) => {
        axios.post(Config.getApiUrl() + '/category', data, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } })
            .then(response => {
                successCb(response);
            }).catch(err => {
                failCb(err);
            });
    },
    getAll: (successCb, failCb) => {
        axios.get(Config.getApiUrl() + '/category', { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } })
            .then(response => {
                successCb(response);
            }).catch(err => {
                failCb(err);
            });
    },

    getById: (id, successCb, failCb) => {
        axios.get(Config.getApiUrl() + '/category/' + id, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } })
            .then(response => {
                successCb(response);
            }).catch(err => {
                failCb(err);
            });
    },
    update: (id, data, successCb, failCb) => {

        axios.post(Config.getApiUrl() + '/category/' + id, data, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } })
            .then(response => {
                successCb(response);
            }).catch(err => {
                failCb(err);
            });
    },

    deleteById: (id, successCb, failCb) => {
        axios.delete(Config.getApiUrl() + '/category/' + id, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } })
            .then(response => {
                successCb(response);
            }).catch(err => {
                failCb(err);
            });
    },

};
export default CategoryApi;