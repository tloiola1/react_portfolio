import axios from 'axios';

export default {

    getMessage: ()=>{
        // console.log('Get Message');
        return axios.get('/api/message');
    },
    postMessage: ( message )=>{
        // console.log('Post Message');
        return axios.post('/api/message', message);
    }
}