import axios from "axios";
import Config from "../config/app_config";
const Auth = {
    
    getUserByToken: (successCb, failCb) => {
        axios.get(Config.getApiUrl() + '/user?client=1', { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } })
            .then(response => {
                successCb(response);
            }).catch(err => {
                failCb(err);
            });
    },
    login: (data, successCb, failCb) => {
        axios.post(Config.getApiUrl() + '/login', data).then(response => {
            successCb(response);
        }).catch(err => {
            failCb(err);
        });
    },
    logout: (successCb, failCb) => {
        axios.get(Config.getApiUrl() + '/logout?token=' + localStorage.getItem("token"), { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } })
            .then(response => {
                localStorage.clear();
                successCb(response);
            }).catch(err => {
                failCb(err);
                if (err.data) {
                    alert(err.response.data.message);
                }

            });
        localStorage.clear();
    },

    updateUser: (data, successCb, failCb) => {

        axios.post(Config.getUrl() + '/update_user', data, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } })
            .then(response => {
                successCb(response);
            }).catch(err => {
                failCb(err);
            });
    },

    register: (data, successCb, failCb) => {
        axios.post(Config.getApiUrl() + '/register', data).then(response => {
            successCb(response);
        }).catch(err => {
            failCb(err);
        });
    },

    checkAuth: (successCb, failCb) => {

        if (localStorage.getItem("token") != null) {
            axios.get(Config.getUrl() + '/check-auth', { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } })
                .then(res => {
                    successCb(res);
                })
                .catch(err => {
                    failCb(err);
                });
        } else {
            return false;
        }
    }


    // checkAuth: (successCb, failCb) => {
    //     axios.get('/check-auth', { headers: { Authorization: 'Bearer ' + localStorage.getItem("user.api_token") } })
    //         .then(response => {
    //             successCb(response);
    //         }).catch(err => {
    //             failCb(err);
    //         });
    // }
};
export default Auth;