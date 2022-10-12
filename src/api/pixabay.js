import axios from 'axios';

const { REACT_APP_MY_API_KEY, REACT_APP_URL } = process.env;

// console.log(REACT_APP_MY_API_KEY, REACT_APP_URL);

// const MY_API_KEY = '29947989-7672aa4ff3bb20ad1176bb4f3';
// const API_URL = 'https://pixabay.com/api';

// axios.defaults.baseURL = REACT_APP_URL;

// export const getContentByInputData = async searchParameters => {
//     const searchParameters = {
//         // key: MY_API_KEY,
//         q: this.searchQuery,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: true,      
//         page: this.page,
//         per_page: this.per_page,
//     };

//     const response = await axios.get(`${API_URL}`, { params: {...searchParameters, key: MY_API_KEY} });
//     return response.data;
// }

export class Pixabay {
    // https://pixabay.com/api/
    // #URL = 'https://pixabay.com/api';
    // Your API key: 29947989-7672aa4ff3bb20ad1176bb4f3
    // #MY_API_KEY = '29947989-7672aa4ff3bb20ad1176bb4f3';

    constructor() {
        this.page = null;
        this.per_page = null;
        this.searchQuery = '';
    }

    getContentByInputData() {
        const searchParameters = {
            key: REACT_APP_MY_API_KEY,
            // key: this.#MY_API_KEY,
            q: this.searchQuery,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
                
            page: this.page,
            per_page: this.per_page,
        };

        // return axios.get(`${this.#URL}`, { params: searchParameters });
        
        return axios.get(`${REACT_APP_URL}`, { params: searchParameters });
    }
}