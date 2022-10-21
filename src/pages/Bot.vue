<template>
  <div class="container">
    <div class="page__bot bot-page">
      <div class="bot-page__column section-list">
        <!-- checkbox component -->
<!--        <label  class="section-list__check check-all custom-checkbox">-->
<!--          <input class="check-all__checkbox" @change="test"  type="checkbox">-->
<!--          <span class="check-all__text">Все сотрудники</span>-->
<!--        </label>-->
        <!-- rename component -->
        <UIAccordion>
          <template v-slot:head>
<!--            <UICheckbox :name="" :value="" :checked="asd" v-model="selected" />-->
            <label class="accordion__title accordion-item custom-checkbox">
              <input class="accordion-item__checkbox" type="checkbox" >
              <span class="accordion-item__text accordion-item__text--min">head</span>
            </label>
          </template>
          <template v-slot:body>
            <label class="accordion__title accordion-item custom-checkbox">
              <input class="accordion-item__checkbox" type="checkbox" >
              <span class="accordion-item__text accordion-item__text--min">asdasd</span>
            </label>
          </template>
        </UIAccordion>
        <Accordion
          :employees="employees"
        />
      </div>
      <div class="bot-page__column message-section">
        <div class="message-section__title">Сообщение</div>
        <div class="message-section__text-section text-section">
          <textarea placeholder="Введите текст" class="text-section__textarea custom-textarea"></textarea>
          <label>
            <input type="file">
          </label>
        </div>
        <button class="message-section__button-send"></button>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 1. Научиться определять юай-компоненты и функциональные
 * 2. Сделать компоненты (Аккордеон, чекбокс, текстареа, ипут тайп файл)
 * 3. Понять поток данных (Бот - аккордеон - чекбокс)
 * 4. Пользовательские события (emit) либо через двустороннее связывание (v-model)
 * 
 */

import Accordion from "@/components/Accordion";
import UIAccordion from "@/components/UIAccordion";

export default {
  name: 'bot',
  components: {
    Accordion,
    UIAccordion
  },
  data() {
    return {
      checkAll: false,
      selected: [],
      employees: [
        {
          industry: 'Дизайн',
          employee: [{id: 1, name: 'Алина Деньщикова'}, {id: 2, name: 'Алина Иванова'}],
          checked: false
        },
        {
          industry: 'Менеджмент',
          employee: [{id: 3, name: 'Дмитрий Петров'}, {id: 4, name: 'Алексей Иванов'}],
          checked: false
        },
        {
          industry: 'Разработка',
          employee: [{id: 5, name: 'Дмитрий Королев'}, {id: 6, name: 'Алексей Царев'}],
          checked: false
        },
        {
          industry: 'SMM',
          employee: [{id: 7, name: 'Ольга Кузнецова'}, {id: 7, name: 'Алексей Щербаков'}],
          checked: false
        }
      ]
    }
  },
  computed: {
    checkAllEmployees() {
      return this.employees.every(item => {
        return item.checked
      })
    }
  },
  methods: {
    test() {
      this.employees.forEach(item => {
        item.checked = true
      })
    }
  },
}
</script>

<style lang="scss">
@import "src/scss/variables.scss";

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
    margin-left: 7px;
    width: 100%;
    padding: 37px 30px 14px 30px;
  }
}

.message-section {
  padding: 30px;
  height: max-content;

  &__title {
    font-family: $ff-m;
    font-size: 26px;
    color: $primaryBlack;
    margin-bottom: 30px;
  }
}

.section-list {
  &__item {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }

}

.text-section {
  display: flex;
  flex-direction: column;

  &__textarea {
    margin-bottom: 20px;
    resize: none;
    height: 140px;
  }
}
</style>
