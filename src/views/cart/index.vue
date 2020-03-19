<template>
  <div>
    <div>Cart</div>
    <div v-for="product in getCartProducts" :key="product.uid">
      <Product :product="product" @putProductToCart="putProductToCart" />
    </div>
    <h2>Total Price is : {{ getCartPriceTotal }}</h2>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Product from './components/product.vue';
import { ProductImpl, CartModule } from '@/store/modules/products';

@Component({
  name: 'Cart',
  components: {
    Product
  }
})
export default class extends Vue {
  private putProductToCart(product: ProductImpl) {
    CartModule.putProductToCart(product);
  }

  get getCartProducts() {
    return CartModule.products;
  }

  get getCartPriceTotal() {
    return CartModule.priceTotal;
  }

  created() {
    CartModule.getProducts();
  }
}
</script>

<style scoped></style>
