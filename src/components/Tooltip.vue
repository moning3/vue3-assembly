<template>
    <div class="tooltip-content" @mouseenter="tooltipShow" @mouseleave="tooltipHide">
        <div class="tooltip-bubble" :class="getBubblePosition" v-if="tooltipVisible">
            <div class="tooltip-bubble-arrow"></div>
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
let tooltipVisible = ref(false);

const getData = computed(() => {
  return props.data;
});

const getBubblePosition = computed(() => {
  return `tooltip-bubble-position-${props.pos}`;
});

const tooltipShow = () => {
  console.log("鼠标进入.");
  tooltipVisible.value = true;
};

const tooltipHide = () => {
  tooltipVisible.value = false;
};
</script>

<style lang="scss" scope>
.tooltip-content {
  position: relative;
  line-height: 30px;
  .tooltip-bubble {
    position: absolute;
    min-width: 80px;
    max-width: 200px;
    border: 1px solid #fff;
    padding: 4px;
    border-radius: 5px;
    background: #fff;
    color: #333;
    z-index: 1000;
    .tooltip-bubble-arrow {
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-color: #ffffff transparent transparent transparent;
    }
  }
  .tooltip-bubble-position-top {
    top: -5px;
    transform: translateY(-100%);
    .tooltip-bubble-arrow {
      left: 0px;
      bottom: -8px;
      border-width: 8.7px 5px 0 5px;
    }
  }
  .tooltip-bubble-position-left {
    left: -15px;
    transform: translateX(-100%);
    .tooltip-bubble-arrow {
      right: -10px;
      top: 10px;
      border-width: 5px 8.7px 5px 0;
    }
  }
  .tooltip-bubble-position-right {
    right: -15px;
    transform: translateX(100%);
    .tooltip-bubble-arrow {
      left: -10px;
      top: 10px;
      border-width: 5px 0 5px 8.7px;
    }
  }
  .tooltip-bubble-position-bottom {
    bottom: -5px;
    transform: translateY(100%);
    .tooltip-bubble-arrow {
      left: 0px;
      top: -8px;
      border-width: 0 5px 8.7px 5px;
    }
  }
}
</style>
