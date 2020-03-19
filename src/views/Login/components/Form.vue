<template>
  <div id="login-form">
    <form>
      <label for="userName">Username</label>
      <input name="userName" v-model="userName" />
      <div>{{ errors.userName }}</div>
      <label for="password">Password</label>
      <input name="password" v-model="password" type="password" />
      <div>{{ errors.password }}</div>
      <button @click="handleLogin">Submit</button>
    </form>
    <div>Store userID is {{ userID }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { UserModule } from '@/store/modules/user';

interface UserInfo {
  userName: string;
  password: string;
}

interface FormError {
  userName?: string;
  password?: string;
}

@Component({
  name: 'LoginForm'
})
export default class extends Vue {
  private userName = '';
  private password = '';
  private errors: FormError = {};

  get userID() {
    return UserModule.userId;
  }

  private isValidateData(): FormError {
    const errors: FormError = {};
    if (this.userName === '') {
      errors.userName = 'User name can not be null';
    }
    if (this.password === '') {
      errors.password = 'Password can not be null';
    }

    return errors;
  }

  private async handleLogin(e: Event) {
    e.preventDefault();

    const errors = this.isValidateData();
    this.errors = errors;

    if (Object.entries(errors).length === 0) {
      await UserModule.Login({ userName: this.userName });
    }
  }
}
</script>

<style scoped></style>
