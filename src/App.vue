<template>
  <div class="page">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'app',
  components: {
    Header
  }
}

</script>


<style lang="scss">
@import "src/scss/variables.scss";

.container {
  max-width: 1880px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

.page {
  &__header {
    margin-bottom: 63px;
  }
}

</style>