import axios from "axios";
import Config from "../config/app_config";

// get posts
const LanguageApi = {
    add: (data, successCb, failCb) => {
        axios.post(Config.getApiUrl() + '/language', data, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } })
            .then(response => {
                successCb(response);
            }).catch(err => {
                failCb(err);
            });
    },
    getAll: (successCb, failCb) => {
        axios.get(Config.getApiUrl() + '/language', { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } })
            .then(response => {
                successCb(response);
            }).catch(err => {
                failCb(err);
            });
    },

    getById: (id, successCb, failCb) => {
        axios.get(Config.getApiUrl() + '/language/' + id, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } })
            .then(response => {
                successCb(response);
            }).catch(err => {
                failCb(err);
            });
    },
    update: (id, data, successCb, failCb) => {

        axios.post(Config.getApiUrl() + '/language/' + id, data, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } })
            .then(response => {
                successCb(response);
            }).catch(err => {
                failCb(err);
            });
    },

    deleteById: (id, successCb, failCb) => {
        axios.delete(Config.getApiUrl() + '/language/' + id, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } })
            .then(response => {
                successCb(response);
            }).catch(err => {
                failCb(err);
            });
    },

};
export default LanguageApi;