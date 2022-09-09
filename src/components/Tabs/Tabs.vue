<template lang="">
  <div class="tabs-content">
    <TabList :list="getList" @changeCurrentTab="changeCurrentTab"></TabList>
    <slot></slot>
  </div>
   
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

let currentActive;
const changeCurrentTab = (value) =>{
  currentActive = value
}
</script>
<style lang="scss">
</style>