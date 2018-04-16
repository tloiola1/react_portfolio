import axios from 'axios';

export default {

    Get: function(){
        // console.log('Get Admin');
        return axios.get('/api/admin');
    },

    Post: function( admin ){
        // console.log('Post Admin');
        return axios.post('/api/admin', admin);
    },
    Put: ( data )=>{
        return axios.put('/api/admin', data);
    },
    Delete: ( data )=>{
        return axios.delete('/api/admin', data);
    }
}
// C:\Ruby24-x64\bin;C:\Program Files\Heroku\bin;C:\Users\tarciso\AppData\Local\GitHubDesktop\bin;C:\Program Files\MongoDB\Server\3.6\bin;C:\Program Files\Microsoft VS Code\bin;C:\Users\tarciso\AppData\Roaming\npm; C:\Program Files (x86)\Heroku;C:\Program Files\Java\jdk1.8.0_101\bin;C:\Exercism;C:\Users\tarciso\everything_else\Downloads\bin