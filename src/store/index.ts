import Vue from 'vue';
import Vuex from 'vuex';
import { UserStateImpl } from './modules/user';
import { ProductCartImpl } from './modules/products';

Vue.use(Vuex);

export interface RootState {
  user: UserStateImpl;
  cart: ProductCartImpl;
}

export default new Vuex.Store<RootState>({});
