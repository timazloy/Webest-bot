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

    </div>
    <div class="page-login__column login-section"></div>
  </div>
</template>

<script>
export default {


}
</script>


<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  .page-login {
    display: flex;
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
      width: 60px;
      height: 60px;
      top: 4.7%;
      left: 5%;
    }

    &__login-2 {
      width: 70px;
      height: 70px;
      position: absolute;
      top: 4.7%;
      right: 40%;
    }

    &__login-3 {
      width: 80px;
      height: 80px;
      position: absolute;
      top: 4.7%;
      right: 5%;
    }

    &__login-4 {
      width: 33px;
      height: 33px;
      position: absolute;
      top: 14.5%;
      left: 34%;
    }

    &__login-5 {
      position: absolute;
      top: 20%;
      right: 30%;
    }

    &__login-6 {
      position: absolute;
      top: 29.5%;
      right: 11%;
    }

    &__login-7 {
      position: absolute;
      top: 29.8%;
      left: 5.1%;
    }
  }



</style>