import axios from 'axios';

export default {

    Get: ()=>{
        // console.log('Get Message');
        return axios.get('/api/message');
    },
    Post: ( message )=>{
        console.log('Post Message');
        console.log(message);
        return axios.post('/api/message', message);
    }
}