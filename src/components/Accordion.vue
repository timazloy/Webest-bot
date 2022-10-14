<template>
  <div class="accordion">
    <label class="accordion__title accordion-item custom-checkbox">
      <input class="accordion-item__checkbox" type="checkbox">
      <span class="accordion-item__text">{{accordion.industry}}</span>
    </label>

    <label class="accordion__title accordion-item custom-checkbox">
      <input class="accordion-item__checkbox" type="checkbox">
      <span class="accordion-item__text">{{accordion.employee}}</span>
    </label>

    <label class="accordion__title accordion-item custom-checkbox">
      <input class="accordion-item__checkbox" type="checkbox">
      <span class="accordion-item__text">{{accordion.employee2}}</span>
    </label>

  </div>
</template>

<script>
export default {
  name: 'accordion',
  props: ['accordion', 'index']
}

</script>

<style lang="scss">
@import "src/scss/variables.scss";

.accordion-item {
  display: flex;

  &__text {
    font-family: $ff-m;
    font-size: 20px;
    line-height: 100%;
    color: $primaryBlack;
  }
}

</style>