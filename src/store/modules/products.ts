import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from 'vuex-module-decorators';
import store from '../index';
import { cartData } from '../../utils/mockData';

export interface ProductImpl {
  uid: string;
  name: string;
  price: number;
  count: number;
}

export interface ProductCartImpl {
  uid: string;
  products: ProductImpl[];
  priceTotal: number;
}

@Module({ dynamic: true, store, name: 'cart' })
class Cart extends VuexModule implements ProductCartImpl {
  public uid = '1';
  public products: ProductImpl[] = [];
  public priceTotal = 0;

  @Mutation
  PUT_PRODUCT_TO_CART(product: ProductImpl) {
    const addedProduct = this.products.find(
      (cartProduct: ProductImpl) => cartProduct.uid === product.uid
    );

    if (addedProduct) {
      (addedProduct as ProductImpl).count++;
    } else {
      this.products = [...this.products, product];
    }

    this.priceTotal = this.priceTotal + product.price;
  }

  @Mutation
  INI_CART_DATA(payload: ProductCartImpl) {
    const { uid, products, priceTotal } = payload;
    this.uid = uid;
    this.products = products;
    this.priceTotal = priceTotal;
  }

  @Action
  putProductToCart(product: ProductImpl) {
    // Send Request to server, and if ok then set to store
    this.PUT_PRODUCT_TO_CART(product);
  }

  @Action
  async getProducts() {
    const { data } = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: cartData
        });
      }, 1000);
    });

    this.INI_CART_DATA(data);
  }
}

export const CartModule = getModule(Cart);
