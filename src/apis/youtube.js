import axios from 'axios';
const KEY ='AIzaSyBhUnORSjT029q5_27pwigciqx76jG9QjM';

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        type: 'playlist',
        maxResults: 15,
        key : KEY
    }
});

export default instance;