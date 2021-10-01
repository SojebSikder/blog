const Config = {
    /**
     * Get app Name
     * @returns 
     */
    getAppName: () => {
        return 'Blog';
    },
    /**
     * Get app slogan
     * @returns 
     */
    getAppSlogan: () => {
        return 'Discover ideas';
    },
    /**
     * Get base url
     * @returns 
     */
    getBaseUrl: () => {
        // return 'http://127.0.0.1:8000';
        return 'https://sojebsikder-blog.herokuapp.com';
    },
    /**
     * Get Api url
     * @returns 
     */
    getApiUrl: () => {
        return Config.getBaseUrl() + "/api";
    },

}

export default Config;