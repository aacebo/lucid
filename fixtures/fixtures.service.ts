import User from '../endpoints/user/user.entity';

import userSeeds from './user.seeds';

export default class FixtureService {
  private constructor() { }

  static async initialize() {
    await this._users();
  }

  private static async _users() {
    await User.deleteMany({ });

    for (const seed of userSeeds()) {
      const user = new User(seed);
      await user.save();
    }
  }
}