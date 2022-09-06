<template>
    <div class="block" @mouseenter="tooltipShow" @mouseleave="tooltipHide">
        <div class="bubble" :class="getBubblePosition" v-if="tooltipVisible">
            <div class="arrow" :class="getArrowPosition"></div>
            {{ getData }}
        </div>
        <slot />
    </div>
</template>

<script setup>
import { defineProps, computed, defineEmits, ref, reactive } from "vue";

const props = defineProps({
  data: {
    type: String
  },
  pos: {
    type: String
  }
});

// const emit = defineEmits([updata]);
let tooltipVisible = ref(true);

const getData = computed(() => {
  return props.data;
});

const getBubblePosition = computed(() => {
  return `bubble-position-${props.pos}`;
});
const getArrowPosition = computed(() => {
  return `arrow-position-${props.pos}`;
});

const tooltipShow = () => {
  console.log("鼠标进入.");
  return (tooltipVisible.value = true);
};

const tooltipHide = () => {
  return (tooltipVisible.value = true);
};
</script>

<style>
.block {
  position: relative;
}
.bubble {
  position: absolute;
  display: block;
  min-width: 80px;
  max-width: 200px;
  border: 1px solid #fff;
  padding: 4px;
  border-radius: 5px;
  background: #fff;
  color: #333;
  z-index: 1000;
  line-height: 25px;
}
.bubble-position-top {
  bottom: 30px;
}
.bubble-position-left {
  left: 0;
}

/* 箭头方向 */
.arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-color: #ffffff transparent transparent transparent;
}
.arrow-position-top {
  left: 0px;
  bottom: -8px;
  border-width: 8.7px 5px 0 5px;
}
.arrow-position-right {
  left: -10px;
  top: 10px;
  border-width: 5px 0 5px 8.7px;
}
.arrow-position-left {
  right: -10px;
  top: 10px;
  border-width: 5px 8.7px 5px 0;
}
.arrow-position-bottom {
  left: 15px;
  top: -10px;
  border-width: 0 5px 8.7px 5px;
}
</style>
