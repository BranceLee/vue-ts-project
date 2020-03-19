import { ProductCartImpl } from '@/store/modules/products';

const cartData: ProductCartImpl = {
  uid: '20149x28',
  products: [
    {
      uid: 'CD-24094309',
      name: 'T-shirt',
      price: 20,
      count: 2
    },
    {
      uid: 'CD-22140WQ',
      name: 'Chair',
      price: 10,
      count: 1
    }
  ],
  priceTotal: 50
};

export { cartData };
