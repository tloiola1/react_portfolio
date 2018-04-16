import axios from 'axios';

export default {

    Get: ()=>{
        // console.log('Get Portfolio');
        return axios.get('/api/portfolio');
    },
    Post: ( data )=>{
        // console.log('Post Portfolio');
        return axios.post('/api/portfolio', data);
    },
    Update: ( data )=>{
        return axios.put('/api/portfolio', data);
    },
    Delete: ( data )=>{
        return axios.delete('/api/portfolio', data);
    }

}