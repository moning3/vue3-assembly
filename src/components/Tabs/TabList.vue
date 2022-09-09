<template lang="">
    <div>
        <Tab v-for="(tab, index) in list" :section="tab.name" :key="tab.id"
        :class="{'tab-active': index === currentTab }"
        @click="changeActive(index)">
        </Tab>
    </div>
</template>
<script setup>
import Tab from "./Tab.vue";
import { defineProps, inject } from "vue";
const props = defineProps({
  list: {
    type: Array,
    default: []
  }
});
// 默认当前选中tab
let currentTab = inject('current')

// 更改选择tab
const changeActive = index => {
  currentTab.value = index;
  return currentTab;
};
</script>
<style lang="scss">
</style>