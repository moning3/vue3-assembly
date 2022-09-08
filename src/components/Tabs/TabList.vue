<template lang="">
    <div>
        <Tab v-for="(tab, index) in list" :section="tab.name" :key="tab.id"
        :class="{'tab-active': index === currentActive }"
        @click="changeActive(index)">
        </Tab>
    </div>
</template>
<script setup>
import Tab from "./Tab.vue";
import { defineProps, computed, ref, reactive } from "vue";
const props = defineProps({
  list: {
    type: Array,
    default: []
  }
});
let currentActive = ref(0);
const changeActive = index => {
  currentActive.value = index;
  return currentActive;
};
</script>
<style lang="scss">
</style>