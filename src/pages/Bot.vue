<template>
  <div class="container">
    <div class="page__bot bot-page">
      <div class="bot-page__column section-list">
        <label class="section-list__check check-all custom-checkbox">
          <input class="check-all__checkbox" type="checkbox">
          <span class="check-all__text">Все сотрудники</span>
        </label>
        <Accordion
            v-for="(item, i) in employees"
            :accordion="item"
            :index="i"
            :key="i"
        />
      </div>
      <div class="bot-page__column">2222222222</div>
    </div>
  </div>

</template>

<script>
import Accordion from "@/components/Accordion";
export default {
  name: 'bot',
  components: {
    Accordion
  },
  data() {
    return {
      employees: [
        {
          industry: 'Дизайн',
          employee: 'Алина Деньщикова',
          employee2: 'Алина Иванова',
          open: false
        },
        {
          industry: 'Менеджмент',
          employee: 'Дмитрий Петров',
          employee2: 'Алексей Иванов',
          open: false
        },
        {
          industry: 'Разработка',
          employee: 'Дмитрий Королев',
          employee2: 'Алексей Царев',
          open: false
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "src/scss/app";

.bot-page {
  display: flex;
  gap: 30px;

  &__column {
    border: 1px solid #DFDFDF;
    border-radius: 10px;
    max-width: 925px;
    width: 100%;
   }
}

.check-all {
  display: flex;
  gap: 17px;
  cursor: pointer;

  &__checkbox {
    width: 22px;
  }

  &__text {
    font-family: $ff-m;
    font-size: 26px;
    color: #11203E;
  }
}

.custom-checkbox>input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

/* для элемента label, связанного с .custom-checkbox */
.custom-checkbox>span {
  display: inline-flex;
  align-items: center;
  user-select: none;
}

/* создание в label псевдоэлемента before со следующими стилями */
.custom-checkbox>span::before {
  content: '';
  display: inline-block;
  flex-shrink: 0;
  flex-grow: 0;
  border: 2px solid #DFDFDF;
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  width: 22px;
  height: 22px;
}

/* стили для активного чекбокса (при нажатии на него) */
.custom-checkbox>input:not(:disabled):active+span::before {
  background-color: #b3d7ff;
  border-color: #b3d7ff;
}

/* стили для чекбокса, находящегося в состоянии checked */
.custom-checkbox>input:checked+span::before {
  border-color: #009AF1;
  background-color: #009AF1;
  background-image: url('/public/img/checkbox2.svg');
  background-size: auto;
  background-position-x: 3px;
}

.section-list {
  padding: 40px;

  &__check {
    margin: 0 0 30px 7px;
  }
}
</style>