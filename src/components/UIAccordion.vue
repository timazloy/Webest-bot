<template>
<div class="accordion">
  <div class="accordion__head" @click="isOpen = !isOpen">
    <slot name="head"></slot>
  </div>
  <div class="accordion__body" v-if="isOpen">
    <slot name="body"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "UIAccordion",
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<style scoped>

</style>
