<template>

  <label  class="section-list__check check-all custom-checkbox">
    <input class="check-all__checkbox" @click="ttt"  type="checkbox">
    <span class="check-all__text">Все сотрудники</span>
  </label>

  <div v-for="item in employees" class="section-list__item accordion">
    <div :class="open ? 'accordion__item-wrapper accordion__item-wrapper--active' : 'accordion__item-wrapper'">
      <div :class="open ? 'accordion__category accordion__category--active' : 'accordion__category'">
        <label class="accordion-item accordion-item--title custom-checkbox">
          <input class="accordion-item__checkbox" type="checkbox"  @click="toggleCheckEmployees">
          <span class="accordion-item__text accordion-item__text--title">{{item.industry}}</span>
        </label>
        <button @click="toggleAccordion" type="button" class="accordion-button">
          <img :class="open ? 'accordion-item__img accordion-item__img--active' : 'accordion-item__img'" src="/img/arrow-top.svg" alt="img">
        </button>
      </div>
    </div>

    <div class="accordion__items">
      <div v-for="elem in item.employee">
        <label class="accordion__title accordion-item custom-checkbox">
          <input class="accordion-item__checkbox" type="checkbox" >
          <span class="accordion-item__text accordion-item__text--min">{{elem.name}}</span>
        </label>
      </div>
    </div>
  </div>

</template>

<script>
// this.$emit()

export default {
  // inheritAttrs: false,
  name: 'accordion',
  props: ['employees'],
  data() {
    return {
      open: false,
      selectedEmployees: [],
    }
  },
  computed: {
    isAllSelected() {
      if (this.accordion.employee.length === this.selectedEmployees.length)  {
        return true
      } else {
        return false
      }
    }
  },

  methods: {
    ttt () {
      console.log(this.employees)
    },
    toggleAccordion() {
      this.open = !this.open
    },
    toggleCheckEmployees() {
      if (this.isAllSelected) {
        this.selectedEmployees = []
        this.accordion.checked = false
      } else {
        this.selectedEmployees = this.accordion.employee
        this.accordion.checked = true
      }
    }
  }
}

</script>

<style lang="scss">
@import "src/scss/variables.scss";

.accordion:last-child .accordion__item-wrapper:last-child {
  border-bottom: none;
}

.accordion-button {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  padding: 38px 0;

  &--active {
    background: red;
  }
}

.accordion-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 17px;
  width: 100%;

  &--title {
    width: fit-content;
    margin: unset !important;
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
    transition: all 0.3s ease-out;

    &--active {
      transform: rotate(180deg);
    }
  }
}

.accordion:last-child .accordion__category:last-child {
  border-bottom: none;
}
.accordion:last-child .accordion__item-wrapper:last-child .accordion__title:last-child {
  border-bottom: none;
}

.accordion {
  margin-bottom: 15px;

  &__category {
    display: flex;
    justify-content: space-between;
    margin: 0 30px;
    width: 100%;
    border-bottom: 1px solid #DFDFDF;

    &--active {
      border-bottom: 1px solid #DFDFDF !important;
    }
  }

  &__title {
    margin: 0 30px;
    border-bottom: 1px solid #DFDFDF;
  }

  &__items {
    opacity: 0;
    max-height: 0;
    overflow-y: hidden;
    //transform: translateY(0);
    transition: all 0.4s linear;
    //transition: all 0.4s ease-out;
    //transform: translateY(-50%);
    //transition: transform 0.3s linear;

    &--active {
      opacity: 1;
      //transform: translateY(0px);
      //transform: translateY(0);
      //max-height: max-content;
    }
  }

  &__item-wrapper {
    //margin: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    //transition: all 0.4s linear;

    &--background {
      background: rgba(0, 154, 241, 0.1);

    }
  }

}

.accordion:last-child .accordion__item-wrapper:last-child {
  border-radius: 0 0 10px 10px;
}

//.accordion__item-wrapper {
//  transition: all 0.4s linear;
//}

//.accordion__item-wrapper--active {
  //margin-bottom: 55px;
  //transform: translateY(-50%);
//}

.accordion__item-wrapper--active + .accordion__items {
  opacity: 1;
  max-height: max-content;
}

</style>
