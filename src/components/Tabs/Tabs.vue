<template lang="">
    
        <TabList :list="getList"></TabList>
    
</template>
<script setup>
import TabList from "./TabList.vue";
import { defineProps, computed } from "vue";
const props = defineProps({
  tabsList: {
    type: Array,
    default: []
  }
});
const getList = computed(() => {
  return props.tabsList;
});
</script>
<style lang="scss">
</style>