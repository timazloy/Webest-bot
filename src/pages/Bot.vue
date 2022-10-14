<template>
  <div class="container">
    <div class="page__bot bot-page">
      <div class="bot-page__column section-list">
        <div class="section-list__check">
          <label class="check-all">
            <input class="check-all__checkbox custom-checkbox" type="checkbox">
            <div class="check-all__text">Все сотрудники</div>
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
  align-items: center;
  user-select: none;

  &:before {
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



  &__checkbox {
    width: 22px;
  }

  &__text {
    font-family: $ff-m;
    font-size: 26px;
    color: #11203E;
  }
}

.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;

}

.custom-checkbox:checked .check-all:before {
  border-color: #0b76ef;
  background-color: #0b76ef;
}


//.custom-checkbox+label {
//  display: inline-flex;
//  align-items: center;
//  user-select: none;
//}
//.custom-checkbox+label::before {
//  content: '';
//  display: inline-block;
//  width: 1em;
//  height: 1em;
//  flex-shrink: 0;
//  flex-grow: 0;
//  border: 1px solid #adb5bd;
//  border-radius: 0.25em;
//  margin-right: 0.5em;
//  background-repeat: no-repeat;
//  background-position: center center;
//  background-size: 50% 50%;
//}

.custom-checkbox:checked+label::before {
  border-color: #0b76ef;
  background-color: #0b76ef;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}
.section-list {
  padding: 40px;
}
</style>