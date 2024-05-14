import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '54b4ca7781c048759ce3c7802e560214'
    }
})