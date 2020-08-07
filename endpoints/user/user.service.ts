import axios from 'axios';

import CreateUser from './create/create-user.dto';

class UserService {
  create(user: CreateUser) {
    return axios.post(`/api/user`, user);
  }
}

export default new UserService();
