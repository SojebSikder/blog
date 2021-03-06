import axios from "axios";
import Config from "../config/app_config";

const Blog = {
    // For redux
    list: (page = 1) => {
        return axios.get(Config.getApiUrl() + "/blog?limit=" + page, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } });
    },
    // Daft
    listDraft: (page = 1) => {
        return axios.get(Config.getApiUrl() + "/blog?draft=1&limit=" + page, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } });
    },
    // published
    listPublished: (page = 1) => {
        return axios.get(Config.getApiUrl() + "/blog?published=1&limit=" + page, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } });
    },
    showOne: (id) => {
        return axios.get(Config.getApiUrl() + "/blog/" + id, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } });
    },

    /**
     * Show using Username and Blog Name
     * @param {*} username 
     * @param {*} blog_name 
     * @returns 
     */
    showByUserAndName: (username, blog_name) => {
        return axios.get(Config.getApiUrl() + "/blog?username=" + username + "&name=" + blog_name, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } });
    },

    //Raw
    add: (data, successCb, failCb) => {
        axios.post(Config.getApiUrl() + '/blog', data, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } })
            .then(response => {
                successCb(response);
            }).catch(err => {
                failCb(err);
            });
    },
    getAll: (successCb, failCb) => {
        axios.get(Config.getApiUrl() + '/blog', { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } })
            .then(response => {
                successCb(response);
            }).catch(err => {
                failCb(err);
            });
    },

    getById: (id, successCb, failCb) => {
        axios.get(Config.getApiUrl() + '/blog/' + id, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } })
            .then(response => {
                successCb(response);
            }).catch(err => {
                failCb(err);
            });
    },
    update: (id, data, successCb, failCb) => {

        axios.post(Config.getApiUrl() + '/blog/' + id, data, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } })
            .then(response => {
                successCb(response);
            }).catch(err => {
                failCb(err);
            });
    },

    deleteById: (id) => {
        return axios.delete(Config.getApiUrl() + '/blog/' + id, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } });
    },
}

export default Blog;