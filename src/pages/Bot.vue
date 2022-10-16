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
  },
  methods: {
    toggleOpen: function (index) {
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

.open {

}

.section-list {
  &__item {
    margin-bottom: 10px;
  }

}
</style>