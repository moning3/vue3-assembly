<template lang="">
    <div class="tab-panel-content">
      {{tabsList[currentTab].msg}}
      <slot/>
    </div>
</template>
<script setup>
import { defineProps, inject } from 'vue';
const props = defineProps({
  tabsList: {
    type: Array,
    default: []
  }
});
// 默认当前选中tab
let currentTab = inject('current');

</script>
<style lang="scss">
</style>