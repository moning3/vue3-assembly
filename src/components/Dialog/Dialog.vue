<template lang="">
  <div class="dialog-overlay" v-if="value">
    
  </div>
  <div class="dialog-content" :style="{ width: width }"  v-if="value">
      <div class="dialog-title">{{ title }}<span @click="close()">x</span></div>
      <div class="dialog-main">
        <slot/>
      </div>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
</template>
<script setup>
import { computed } from '@vue/reactivity';
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  title:{
    type: String
  },
  beforeClose:{
    type: Function
  },
  modelValue:{
    type: Boolean
  },
  width: {
    type: String
  }
})
const emit = defineEmits(['updata: modelValue'])
const title = computed(() => {
  return props.title
})

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
const close = computed(() => {
  return props.beforeClose
})
</script>
<style lang="scss">
  .dialog-overlay{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    background: #000;
    z-index: 10000;
    opacity:0.6; 
  }
  .dialog-content{
      position:fixed;
      left:50%;
		  top:50%;
      box-sizing: border-box;
      padding: 10px;
		  z-index:10001;
		  transform:translate(-50%,-50%);
      background-color: #000;
    .dialog-title{
      display: flex;
      justify-content: space-between;
      span{
        cursor: pointer;
      }
    }
  }
  
</style>