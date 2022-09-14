<template lang="">
  <button class="button-default" :class="type"></button>
</template>
<script setup>
import { computed } from '@vue/reactivity';
import { defineProps } from 'vue';

  const props = defineProps({
    type: String
  })
  const type = computed(() =>{
    return props.type
  })
</script>
<style lang="scss">
  .button-default{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    height: 32px;
    border-radius: 4px;
    white-space: nowrap;
    cursor: pointer;
    color: #606266;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    transition: .1s;
    border: 1px solid #dcdfe6;
    padding: 8px 15px;
    background-color: #fff;;
  }
  .button-primary{
    background-color: #409eff;
    color: #fff;
    border-color: #409eff;
  }
</style>