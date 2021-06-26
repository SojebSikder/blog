import axios from "axios";
import Config from "../config/app_config";

const Blog = {
    list: (page = 1) => {
        return axios.get(Config.getApiUrl() + "/blog?limit=" + page, { headers: { Authorization: 'Bearer ' + localStorage.getItem("api_token") } });
    },
}

export default Blog;