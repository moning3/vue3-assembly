<template lang="">
  <div class="dialog-content">
    <div class="dialog-title">{{ title }}</div>
    <div class="dialog-main">
      <slot/>
    </div>
    <div class="dialog-footer">
      <solt name="footer"></solt>
    </div>
   
  </div>
</template>
<script setup>
import { computed } from '@vue/reactivity';
import { defineProps } from 'vue';
const props = defineProps({
  title:{
    type: String
  },
  beforeClose:{
    type: Boolean
  }
})
const title = computed(() => {
  return props.title
})
</script>
<style lang="scss">
  
</style>