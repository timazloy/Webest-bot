<template>
  <div class="section-list__item accordion">
    <div class="accordion__item-wrapper">
      <label class="accordion__title accordion-item accordion-item--title custom-checkbox">
        <input class="accordion-item__checkbox" type="checkbox">
        <span class="accordion-item__text accordion-item__text--title">{{accordion.industry}}</span>
      </label>
      <button class="accordion-button">
        <img class="accordion-item__img" src="/img/arrow-top.svg" alt="img">
      </button>

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

.accordion:last-child .accordion__item-wrapper:last-child .accordion__title:last-child {
  border-bottom: none;
}

.accordion-button {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  padding: 38px 0;
}

.accordion-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 17px;
  width: 100%;
  //border-bottom: 1px solid #DFDFDF;
  //margin: 0 30px;



  &--title {
    width: fit-content;
    margin: unset;
  }

  &__text {
    font-family: $ff-m;
    font-size: 20px;
    line-height: 100%;
    color: $primaryBlack;
    margin-left: 7px;
    width: 100%;
    padding: 30px 0;

    &--title {
      width: auto;
    }

    &--min {
      font-size: 16px;
    }
  }

  &__img {
    width: 16px;
    height: 8px;
  }
}

.accordion {
  &__item-wrapper {
    margin: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #DFDFDF;
  }
}

</style>