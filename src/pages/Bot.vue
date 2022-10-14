<template>
  <div class="container">
    <div class="page__bot bot-page">
      <div class="bot-page__column section-list">
        <div class="section-list__check">
          <label class="check-all custom-checkbox">
            <input class="check-all__checkbox" type="checkbox">
            <span class="check-all__text">Все сотрудники</span>
          </label>
        </div>
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
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

/* стили при наведении курсора на checkbox */
.custom-checkbox>input:not(:disabled):not(:checked)+span:hover::before {
  border-color: #b3d7ff;
}

/* стили для активного чекбокса (при нажатии на него) */
.custom-checkbox>input:not(:disabled):active+span::before {
  background-color: #b3d7ff;
  border-color: #b3d7ff;
}

/* стили для чекбокса, находящегося в фокусе */
.custom-checkbox>input:focus+span::before {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

/* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
.custom-checkbox>input:focus:not(:checked)+span::before {
  border-color: #80bdff;
}

/* стили для чекбокса, находящегося в состоянии checked */
.custom-checkbox>input:checked+span::before {
  border-color: #0b76ef;
  background-color: #0b76ef;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

/* стили для чекбокса, находящегося в состоянии disabled */
.custom-checkbox>input:disabled+span::before {
  background-color: #e9ecef;
}

.section-list {
  padding: 40px;
}
</style>