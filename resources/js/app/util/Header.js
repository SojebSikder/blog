const Header = {
    /**
     * Set document title
     * @param {*} value 
     */
    title: (value) => {
        document.title = value;
    },

    // getMeta('description')
    setMeta: (metaName, value) => {
        const metas = document.getElementsByTagName('meta');

        for (let i = 0; i < metas.length; i++) {
            if (metas[i].getAttribute('name') === metaName) {
                // return metas[i].getAttribute('content');
                metas[i].setAttribute('content', value);
            }
        }
    },

    getMeta: (metaName) => {
        const metas = document.getElementsByTagName('meta');

        for (let i = 0; i < metas.length; i++) {
            if (metas[i].getAttribute('name') === metaName) {
                return metas[i].getAttribute('content');
            }
        }

        return '';
    },
}

export default Header;