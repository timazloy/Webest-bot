<template>
  <div class="container">
    <div class="page__bot bot-page">
      <div class="bot-page__column section-list">
        <UIAccordion
            :employees="this.employees"
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
import Department from "@/components/Department";
import UIAccordion from "@/components/UIAccordion";
export default {
  name: 'bot',
  components: {
    Department,
    UIAccordion
  },
  data() {
    return {
      employees: [
        {
          industry: 'Дизайн',
          employee: [{id: 1, name: 'Алина Деньщикова'}, {id: 2, name: 'Алина Иванова'}],
        },
        {
          industry: 'Менеджмент',
          employee: [{id: 3, name: 'Дмитрий Петров'}, {id: 4, name: 'Алексей Иванов'}],
        },
        {
          industry: 'Разработка',
          employee: [{id: 5, name: 'Дмитрий Королев'}, {id: 6, name: 'Алексей Царев'}],
        },
        {
          industry: 'SMM',
          employee: [{id: 7, name: 'Ольга Кузнецова'}, {id: 7, name: 'Алексей Щербаков'}],
        }
      ]
    }
  },
  computed: {

  },
  methods: {

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
