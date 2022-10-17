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
            :open="item.open"
            @toggleOpen="toggleOpen"
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
          employee: [{id: 1, name: 'Алина Деньщикова'}, {id: 2, name: 'Алина Иванова'}],
          open: false
        },
        {
          industry: 'Менеджмент',
          employee: ['Дмитрий Петров', 'Алексей Иванов'],
          open: false
        },
        {
          industry: 'Разработка',
          employee: ['Дмитрий Королев', 'Алексей Царев'],
          open: false
        }
      ]
    }
  },
  methods: {
    toggleOpen(index) {
      this.employees = this.employees.map((item, i) => {
        if (index === i) {
          item.open = !item.open;
         }

        return item;
      });
    }
  }
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
