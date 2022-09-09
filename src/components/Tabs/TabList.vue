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
import { defineProps,defineEmits, ref,watch } from "vue";
const props = defineProps({
  list: {
    type: Array,
    default: []
  }
});
const emit = defineEmits(['changeCurrentTab']);
// 默认当前选中tab
let currentActive = ref(0);

// 更改选择tab
const changeActive = index => {
  currentActive.value = index;
  return currentActive;
};

// 监听选中的tab
watch (currentActive,(newValue) =>{
  console.log(2)
  
  emit('changeCurrentTab',newValue)
})
</script>
<style lang="scss">
</style>