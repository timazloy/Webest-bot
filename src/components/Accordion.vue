<template>
  <div class="accordion">
    <div class="accordion__title">{{accordion.industry}}</div>
    <div class="accordion__item">{{accordion.employee}}</div>
    <div class="accordion__item">{{accordion.employee2}}</div>
  </div>
</template>

<script>
export default {
  name: 'accordion',
  props: ['accordion', 'index']
}

</script>