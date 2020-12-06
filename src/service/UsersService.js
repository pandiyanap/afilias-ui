import axios from "axios";

const BASE_URL = 'http://localhost:8084';

class UsersService {

    findUsersList() {

        return axios.get(`${BASE_URL}/api/v1/users`);
    }

    findGeoFriends(pathUrl,params) {

        return axios.get(`${BASE_URL}/api/v1${pathUrl}${params}`);
    }

    findFriends(pathUrl) {

        return axios.get(`${BASE_URL}${pathUrl}`);
    }

    findFriendOfFriends(pathUrl) {

        return axios.get(`${BASE_URL}${pathUrl}`);
    }


}

export default new UsersService()