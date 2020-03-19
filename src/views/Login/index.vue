<template>
  <div>
    <component :is="currentComponent" />
  </div>
  <!-- <button @click="getProduct">Select</button> -->
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginForm from './components/Form.vue';
// import ManageUserForm from './components/ManageUserForm.vue';

@Component({
  name: 'Login',
  components: {
    LoginForm
    // ManageUserForm
  }
})
export default class extends Vue {
  private currentComponent = 'LoginForm';

  // private getProduct(){

  // }
}
</script>

<style lang="scss" scoped></style>
