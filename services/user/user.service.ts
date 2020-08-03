import axios from 'axios';

import ICreateUser from '../../dtos/user/create-user.interface';

class UserService {
  create(user: ICreateUser) {
    return axios.post(`/api/user`, user);
  }
}

export default new UserService();
