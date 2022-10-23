<template>
  <label class="section-list__check check-all custom-checkbox">
    <input class="check-all__checkbox" :checked="checkAllEmployees" @click="checkAll" type="checkbox">
    <span class="check-all__text">Все сотрудники</span>
  </label>
  <Department
      v-for="(item, i) in employees"
      :accordion="item"
      :index="i"
      :key="i"
      :open="item.open"
      :employees="item"
      :checked="checked"
      @toggleOpen="toggleOpen"
  />
</template>

<script>
import Department from "@/components/Department";
export default {
  name: 'accordion',
  components: {
    Department
  },
  props: ['employees'],
  data () {
    return {
      open: false,
      checked: false
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
    toggleOpen(index) {
      this.employees = this.employees.map((item, i) => {
        if (index === i) {
          item.open = !item.open;
        }

        return item;
      });
    },
    checkAll() {
      this.checked = true
    }

  }
}
</script>

<style>

</style>