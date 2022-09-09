<template>
  <span class="tab-section">{{getData}}</span>
</template>
<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({
  section: {
    type: String
  }
});
const getData = computed(() => {
  return props.section;
});
</script>
<style lang="scss">
.tab-section {
  display: inline-block;
  margin: 0 10px;
  color: #999;
  line-height: 30px;
  height: 30px;
  cursor: pointer;
}
.tab-section:hover,
.tab-active {
  border-bottom: 2px #00bfff solid;
  line-height: 28px;
}
</style>