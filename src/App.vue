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
    <div class="page-login__column login-section"></div>
  </div>
</template>

<script>
export default {


}
</script>


<style lang="scss">
  @mixin icons-adaptive($minPx, $maxPx, $minWindowSize, $maxWindowSize) {
    width: calc(#{$minPx}px + (#{$maxPx} - #{$minPx}) * ( (100vw - #{$minWindowSize}px) / (#{$maxWindowSize} - #{$minWindowSize}) ));
    height: calc(#{$minPx}px + (#{$maxPx} - #{$minPx}) * ( (100vw - #{$minWindowSize}px) / (#{$maxWindowSize} - #{$minWindowSize}) ));
  }

  * {
    margin: 0;
    padding: 0;
  }

  .page-login {
    display: flex;
  }

  //.logo {
  //  width: calc(205px + (369 - 205) * ( (100vw - 1024px) / ( 1980 - 1024) ));
  //}

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





</style>