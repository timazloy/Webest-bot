<template>
  <div class="page-login">
    <div class="page-login__column image-section">
      <div class="image-section__wrapper">
        <img class="logo" src="/img/logo.png" alt="logo">
      </div>
      <img class="image-section__login-1" src="/img/login/2.svg" alt="img">
      <img class="image-section__login-2" src="/img/login/13.svg" alt="img">
      <img class="image-section__login-3" src="/img/login/6.png" alt="img">
      <img class="image-section__login-4" src="/img/login/1.svg" alt="img">
      <img class="image-section__login-5" src="/img/login/9.svg" alt="img">
      <img class="image-section__login-6" src="/img/login/7.svg" alt="img">
      <img class="image-section__login-7" src="/img/login/11.svg" alt="img">
      <img class="image-section__login-8" src="/img/login/4.svg" alt="img">
      <img class="image-section__login-9" src="/img/login/10.svg" alt="img">
      <img class="image-section__login-10" src="/img/login/8.svg" alt="img">
      <img class="image-section__login-11" src="/img/login/3.svg" alt="img">
      <img class="image-section__login-12" src="/img/login/5.svg" alt="img">
      <img class="image-section__login-13" src="/img/login/12.svg" alt="img">
    </div>
    <div class="page-login__column login-section">
      <div class="login">
        <div class="login__title">Добро пожаловать</div>
        <div class="login__text">Авторизуйтесь для продолжения работы</div>
        <form action="#" @submit.prevent="submitHandler">
          <div class="login__description">Введите e-mail</div>
          <div class="login__section-input section-login">
            <input  id="email" type="text" v-model.trim="email" class="section-login__input login__input input-main validate">
            <span v-if="v$.email.$error" class="section-login__error error-validation">Введите корректный e-mail</span>
          </div>

          <div class="login__description">Введите пароль</div>
          <div class="login__section-input section-login">
            <input :type="passwordFieldType" v-model="password" type="text" class="section-login__input input-main input-main--icon">
            <button class="login__button-password button-password" type="button" @click="switchVisibility">
              <img v-show="showPassword" src="/img/eye.svg" alt="show">
              <img v-show="!showPassword" src="/img/eye-close.svg" alt="show">
            </button>
            <span class="section-login__error error-validation" v-if="v$.password.$error">Введите пароль</span>
          </div>

          <button type="submit" class="login__button button-main">Войти</button>
        </form>


      </div>
    </div>
  </div>
</template>

<script>
import useValidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

export default {
  name: 'login',
  data() {
    return {
      password: "",
      passwordFieldType: "password",
      showPassword: true,
      v$: useValidate(),
      email: '',
    };
  },
  validations: () => ({
    email: { required, email },
    password: { required }
  }),
  methods: {
    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
      this.showPassword = !this.showPassword
    },

    submitHandler() {
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log(123)
      }
    }
  }


}
</script>


<style lang="scss">
  @mixin icons-adaptive($minPx, $maxPx, $minWindowSize, $maxWindowSize) {
    width: calc(#{$minPx}px + (#{$maxPx} - #{$minPx}) * ( (100vw - #{$minWindowSize}px) / (#{$maxWindowSize} - #{$minWindowSize}) ));
    height: calc(#{$minPx}px + (#{$maxPx} - #{$minPx}) * ( (100vw - #{$minWindowSize}px) / (#{$maxWindowSize} - #{$minWindowSize}) ));
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
  }

  button {
    border: none;
  }

  .error-validation {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #DE0000;
  }

  .button-main {
    background: linear-gradient(89.85deg, #0078FF 0.11%, #02AAF6 99.87%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 24px;
    color: #FFFFFF;
    padding: 10px 0;
    cursor: pointer;

    &:hover {
      background: linear-gradient(89.85deg, #0179FF 0.11%, #0179FF 99.87%);
    }
  }

  .button-password {
    background: none;
    cursor: pointer;
  }

  .login {
    max-width: 365px;
    width: 100%;
    padding: 0 15px;

    &__button-password {
      position: absolute;
      top: 8px;
      right: 15px;
    }

    &__section-input {
      position: relative;
      margin-bottom: 30px;
    }

    &__title {
      font-weight: 700;
      font-size: 40px;
      line-height: 50px;
      color: #11203E;
      margin-bottom: 10px;
    }

    &__text {
      font-weight: 400;
      font-size: 19px;
      line-height: 23px;
      color: #11203E;
      margin-bottom: 40px;
    }

    &__description {
      font-weight: 500;
      font-size: 14px;
      line-height: 120%;
      color: #A9A9A9;
      margin-bottom: 10px;
    }

    &__button {
      width: 100%;
    }
  }

  .section-login {
    &__input {
      width: 100%;
      height: 36px;
      padding: 0px 15px;
    }

    &__error {
      margin-left: 15px;
      margin-top: 5px;
    }
  }

  .input-main {
    border: 1px solid #DFDFDF;
    border-radius: 43px;

    &--icon {
      padding: 0 45px 0 15px;
    }

    &:hover {
      border: 1px solid rgba(1, 121, 255, 0.1);
    }

    &:focus {
      border: 1px solid rgba(1, 121, 255, 0.1);
    }
  }

  .page-login {
    display: flex;
  }

  .login-section {
    width: 50%;
    height: 100vh;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .image-section {
    width: 50%;
    height: 100vh;
    background: #0078FF;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &__login-1 {
      position: absolute;
      @include icons-adaptive(33, 60, 1024, 1980);
      top: 4.7%;
      left: 5%;
    }

    &__login-2 {
      @include icons-adaptive(39, 70, 1024, 1980);
      position: absolute;
      top: 4.7%;
      right: 40%;
    }

    &__login-3 {
      @include icons-adaptive(44, 80, 1024, 1980);
      position: absolute;
      top: 4.7%;
      right: 5%;
    }

    &__login-4 {
      @include icons-adaptive(18, 33, 1024, 1980);
      position: absolute;
      top: 14.5%;
      left: 34%;
    }

    &__login-5 {
      position: absolute;
      @include icons-adaptive(39, 70, 1024, 1980);
      top: 20%;
      right: 30%;
    }

    &__login-6 {
      position: absolute;
      @include icons-adaptive(60, 110, 1024, 1980);
      top: 29.5%;
      right: 11%;
    }

    &__login-7 {
      position: absolute;
      @include icons-adaptive(42, 76, 1024, 1980);
      top: 29.8%;
      left: 5.1%;
    }

    &__login-8 {
      position: absolute;
      @include icons-adaptive(36, 66, 1024, 1980);
      bottom: 33%;
      left: 5%;
    }

    &__login-9 {
      position: absolute;
      @include icons-adaptive(39, 70, 1024, 1980);
      bottom: 4.5%;
      left: 5%;
    }

    &__login-10 {
      position: absolute;
      @include icons-adaptive(33, 60, 1024, 1980);
      bottom: 19%;
      left: 30.5%;
    }

    &__login-11 {
      position: absolute;
      @include icons-adaptive(44, 80, 1024, 1980);
      bottom: 7%;
      right: 36.5%;
    }

    &__login-12 {
      position: absolute;
      @include icons-adaptive(42, 76, 1024, 1980);
      bottom: 23.7%;
      right: 18.7%;
    }

    &__login-13 {
      position: absolute;
      @include icons-adaptive(33, 60, 1024, 1980);
      bottom: 4.5%;
      right: 5%;
    }
  }

  @media (max-width: 1279px) {
    .logo {
      width: 205px;
    }
  }

  @media (max-width: 1023px) {
    .image-section {
      display: none;
    }

    .login-section {
      width: 100%;
    }
  }
  @media (max-width: 450px) {
    .login {
      &__title {
        font-size: 30px;
      }

      &__text {
        font-size: 18px
      }
    }
  }


</style>