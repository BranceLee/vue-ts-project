import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from 'vuex-module-decorators';
import store from '../index';

export interface UserStateImpl {
  token: string;
  userId: string;
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements UserStateImpl {
  public token = '';
  public userId = '';

  @Mutation
  private SET_USER(data: UserStateImpl) {
    this.token = data.token;
    this.userId = data.userId;
  }

  @Action
  public async Login() {
    const data: UserStateImpl = await new Promise(resolve => {
      return setTimeout(() => {
        resolve({ token: 'admin', userId: '1' });
      }, 1000);
    });
    this.SET_USER(data);
  }
}

export const UserModule = getModule(User);
