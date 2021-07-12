/**
 * Data Uril
 */
const DataUtil = {
    /**
     * Check if it exists
     * @param {any} data 
     * @returns {any}
     */
    isExist: (data) => {
        if (data == null) {
            return "";
        } else {
            return data;
        }
    },

    /**
     * Extract parts of a string
     * @param {string} text 
     */
    textShorten: (text, length = 100) => {
        var result = text.substr(0, length) + "...";
        return result;
    },

    replace: (str, search, replacement) => {
        return str.split(search).join(replacement)
    },
    readingTime: (text, wpm = 225) => {
        const words = text.trim().split(/\s+/).length;
        const time = Math.ceil(words / wpm);
        return time;
    },



};
export default DataUtil;