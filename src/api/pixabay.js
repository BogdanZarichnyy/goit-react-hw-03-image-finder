const { REACT_APP_MY_API_KEY, REACT_APP_URL } = process.env;

export class Pixabay {

    constructor() {
        this.page = null;
        this.per_page = null;
        this.searchQuery = '';
    }

    async getContentByInputData() {
        const searchParameters = {
            key: REACT_APP_MY_API_KEY,
            q: this.searchQuery,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
                
            page: this.page,
            per_page: this.per_page,
        };
        
        return await fetch(`${REACT_APP_URL}?` + new URLSearchParams(searchParameters).toString())
            .then(responce => responce.json())
            .then(data => data)
            .catch(error => console.log(error));
    }
}