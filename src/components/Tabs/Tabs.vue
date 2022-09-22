<template lang="">
  <div class="tabs-content">
    <TabList :list="getList"></TabList>
    <slot></slot>
  </div>
</template>
<script setup>
import { defineProps, ref, computed, provide } from "vue";
import TabList from "./TabList.vue";

const props = defineProps({
  tabsList: {
    type: Array,
    default: []
  }
});
const getList = computed(() => {
  return props.tabsList;
});

const current = ref(0);
provide('current', current);


</script>
<style lang="scss">
</style>