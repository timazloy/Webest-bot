<template>
  <div class="accordion">
    <div class="accordion__item-wrapper">
      <label class="accordion__title accordion-item custom-checkbox">
        <input class="accordion-item__checkbox" type="checkbox">
        <span class="accordion-item__text">{{accordion.industry}}</span>
        <img class="accordion-item__img" src="/img/arrow-top.svg" alt="img">
      </label>
    </div>

    <div class="accordion__item-wrapper">
      <label class="accordion__title accordion-item custom-checkbox">
        <input class="accordion-item__checkbox" type="checkbox">
        <span class="accordion-item__text accordion-item__text--min">{{accordion.employee}}</span>
      </label>
    </div>

    <div class="accordion__item-wrapper">
      <label class="accordion__title accordion-item custom-checkbox">
        <input class="accordion-item__checkbox" type="checkbox">
        <span class="accordion-item__text accordion-item__text--min">{{accordion.employee2}}</span>
      </label>
    </div>


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

.accordion {

}

.accordion-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 17px;
  border-bottom: 1px solid #DFDFDF;
  padding: 30px 0;
  margin: 0 30px;

  &__text {
    font-family: $ff-m;
    font-size: 20px;
    line-height: 100%;
    color: $primaryBlack;
    margin-left: 7px;

    &--min {
      font-size: 16px;
    }
  }

  &__img {
    width: 16px;
    height: 8px;
  }
}

</style>