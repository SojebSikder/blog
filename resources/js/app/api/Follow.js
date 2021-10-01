import axios from "axios";
import Config from "../config/app_config";

const FollowApi = {
    // For redux

    /**
     * Toggle Follow/UnFollow
     * @param {*} data 
     * @returns 
     */
    toggleFollow: (data) => {
        return axios.post(Config.getApiUrl() + "/togglefollow", data, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } });
    },
}

export default FollowApi;