import axios from 'axios';

export default class Api{
    static async getUserInfo(username){
        const response = await axios.get(`https://api.github.com/users/${username}`);

        console.log(response.data);

        return response.data;
    }
}