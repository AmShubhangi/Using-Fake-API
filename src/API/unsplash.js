import axios from 'axios';

axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 090206c0fc7c37cc4808a49cc101c5512a4d4da3777c0baf5bf2c10aba2b2ebd'
    }
});