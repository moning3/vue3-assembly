<template>
  <div class="tooltip-content" v-for="item in posts" :key="item.id" :class="`tooltip-postion-${item.loc}`">
      <Tooltip :data="item.msg" :pos="item.loc">
        {{item.data}}
      </Tooltip>
    </div>
</template>

<script setup>
import Tooltip from "@/components/Tooltip.vue";

const posts = [
  { id: 1, data: "内容1111", msg: "描述内容1213", loc: "top" },
  { id: 2, data: "内容2222", msg: "描述内容非常v出现", loc: "left" },
  { id: 3, data: "内容3333", msg: "描述内容实打实的撒", loc: "right" },
  { id: 4, data: "内容4444", msg: "描述内容是歌功颂德分", loc: "bottom" }
];

</script>

<style lang="scss" scoped>
.tooltip-container {
  overflow: hidden;
}
</style>