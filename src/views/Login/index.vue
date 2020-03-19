<template>
  <div>
    <component :is="currentComponent" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginForm from './components/Form.vue';

@Component({
  name: 'Login',
  components: {
    LoginForm
  }
})
export default class extends Vue {
  private currentComponent = 'LoginForm';
}
</script>

<style lang="scss" scoped></style>
