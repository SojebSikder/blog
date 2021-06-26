const Config = {
    /**
     * Get app Name
     * @returns 
     */
    getAppName: () => {
        return 'Blog';
    },
    /**
     * Get base url
     * @returns 
     */
    getBaseUrl: () => {
        return 'http://127.0.0.1:8000';
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