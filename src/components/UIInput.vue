<template>
  <label class="accordion__title accordion-item custom-checkbox">
    <input class="accordion-item__checkbox" type="checkbox" :value="value" v-model="selectedEmployees">
    <span class="accordion-item__text accordion-item__text--min">{{name}}</span>
  </label>
</template>

<script>
export default {
  name: 'input',
  props: ['name', 'selectedEmployees', 'value']
}
</script>

<style>

</style>