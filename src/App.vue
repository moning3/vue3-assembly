<template>

  <div class="content">
    <div class="tooltip-box">
      <!-- <Tooltip :data="posts[0].msg" :pos="posts[0].loc">
        <div class="">{{posts[0].loc}}</div>
      </Tooltip> -->

      <Tooltip :data="posts[1].msg" :pos="posts[1].loc">
        <div class="">{{posts[1].loc}}</div>
      </Tooltip>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Tooltip from "./components/Tooltip.vue";

const msg = ref("描述内容展示,描述内容展示.描述内容展示/描述内容展示");
const loc = ref("top");

const posts = [
  { id: 1, data: "内容1111", msg: "描述内容～", loc: "top" },
  { id: 2, data: "内容2222", msg: "描述内容-", loc: "left" },
  { id: 3, data: "内容3333", msg: "描述内容@", loc: "right" },
  { id: 4, data: "内容4444", msg: "描述内容&", loc: "bottom" }
];
</script>

<style>
.tooltip-box {
  position: relative;
  line-height: 30px;
}
</style>
