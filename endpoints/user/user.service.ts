import axios from 'axios';

import CreateUser from './create/create-user.dto';
import { IUser } from './user.entity';

class UserService {
  create(user: CreateUser) {
    return axios.post<IUser>(`/api/user`, user);
  }
}

export default new UserService();
