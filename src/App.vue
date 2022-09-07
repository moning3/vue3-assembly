<template>

  <div class="content">
    <!-- <div class="tooltip-box">

      <Tooltip :data="msg" :pos="loc">
        <div>{{loc}}</div>
      </Tooltip>
    </div> -->
    <div class="tooltip-box" v-for="item in posts" :key="item.id" :class="`tooltip-postion-${item.loc}`">
      <Tooltip :data="item.msg" :pos="item.loc">
        <div>{{item.data}}</div>
      </Tooltip>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Tooltip from "./components/Tooltip.vue";

const msg = ref("描述内容展示,描述内容展示.描述内容展示/描述内容展示");
const loc = ref("bottom");

const posts = [
  { id: 1, data: "内容1111", msg: "描述内容1213", loc: "top" },
  { id: 2, data: "内容2222", msg: "描述内容非常v出现", loc: "left" },
  { id: 3, data: "内容3333", msg: "描述内容实打实的撒", loc: "right" },
  { id: 4, data: "内容4444", msg: "描述内容是歌功颂德分", loc: "bottom" }
];
</script>

 <style lang="scss" scoped>
</style>
