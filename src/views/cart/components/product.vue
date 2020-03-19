<template>
  <div>
    <section>
      <h3>{{ product.name }}</h3>
      <div>{{ product.price }}</div>
      <button @click="putToCart">add to cart</button>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { ProductImpl } from '@/store/modules/products';

@Component({
  name: 'Product'
})
export default class extends Vue {
  @Prop({ required: true }) private product!: ProductImpl;

  private putToCart() {
    this.$emit('putProductToCart', this.product);
  }
}
</script>

<style scoped></style>
