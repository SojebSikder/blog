import axios from "axios";
import Config from "../config/app_config";

const Blog = {
    list: (page = 1) => {
        return axios.get(Config.getApiUrl() + "/blog?limit=" + page, { headers: { Authorization: 'Bearer ' + localStorage.getItem("api_token") } });
    },
    showOne: (id) => {
        return axios.get(Config.getApiUrl() + "/blog/" + id, { headers: { Authorization: 'Bearer ' + localStorage.getItem("api_token") } });
    },

    /**
     * Show using Username and Blog Name
     * @param {*} username 
     * @param {*} blog_name 
     * @returns 
     */
    showByUserAndName: (username, blog_name) => {
        return axios.get(Config.getApiUrl() + "/blog?username=" + username + "&name=" + blog_name, { headers: { Authorization: 'Bearer ' + localStorage.getItem("api_token") } });
    },
}

export default Blog;