<template>
    <div class="tooltip-content" @mouseenter="tooltipShow" @mouseleave="tooltipHide">
        <div class="tooltip-bubble" :style="positionStyle"
          :class="getBubblePosition" v-if="tooltipVisible">
            <div class="tooltip-bubble-arrow"></div>
            {{ getData }}
        </div>
        <div class="tooltip-main"><slot /></div>
    </div>
</template>

<script setup>
import { defineProps, computed, defineEmits, ref } from "vue";

const props = defineProps({
  data: {
    type: String
  },
  pos: {
    type: String
  }
});

// const itemRefs = ref();

const slotRef = ref()
const setSlotRef = (el) => {
  slotRef.value = el;
}


// const emit = defineEmits([updata]);
let tooltipVisible = ref(false);

const getData = computed(() => {
  return props.data;
});

const getBubblePosition = computed(() => {
  return `tooltip-bubble-position-${props.pos}`;
});

let positionStyle = ref({});
const tooltipShow = (event) => {
  // console.log(event);
  positionStyle.value = getPosition(event)
  // console.log(positionStyle)
  tooltipVisible.value = true;
};
const getPosition = (event) => {
  let position;
  const eventData = event.target.getBoundingClientRect()
  // console.log(itemRefs.value)
  console.log(slotRef.value)
  // console.log(eventData)
  if(props.pos === 'top') {
    position = { top: eventData.top - 35 + 'px', left: eventData.left + 'px' }
  }
  if(props.pos === 'left') {
    position = { top: eventData.top + 'px', right: eventData.right - eventData.width + 5 + 'px' }
  }
  if(props.pos === 'right') {
    position = { top: eventData.top + 'px', left: eventData.right - eventData.width + 'px' }
  }
  if(props.pos === 'bottom') {
    position = { top: eventData.bottom + 'px', left: eventData.left + 'px' }
  }
  return position
}

const tooltipHide = () => {
  tooltipVisible.value = false;
  positionStyle.value = {};
};
</script>

<style lang="scss" scope>
.tooltip-content {
  // position: relative;
  // line-height: 30px;
  .tooltip-bubble {
    position: fixed;
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
    // top: -5px;
    // transform: translateY(-100%);
    .tooltip-bubble-arrow {
      left: 0px;
      bottom: -8px;
      border-width: 8.7px 5px 0 5px;
    }
  }
  .tooltip-bubble-position-left {
    // left: -15px;
    // transform: translateX(-100%);
    .tooltip-bubble-arrow {
      right: -10px;
      top: 10px;
      border-width: 5px 8.7px 5px 0;
    }
  }
  .tooltip-bubble-position-right {
    // right: -15px;
    // transform: translateX(100%);
    .tooltip-bubble-arrow {
      left: -10px;
      top: 10px;
      border-width: 5px 0 5px 8.7px;
    }
  }
  .tooltip-bubble-position-bottom {
    // bottom: -5px;
    // transform: translateY(100%);
    .tooltip-bubble-arrow {
      left: 0px;
      top: -8px;
      border-width: 0 5px 8.7px 5px;
    }
  }
  .tooltip-main{
    line-height: 30px;
    min-height: 30px;
  }
}
</style>
