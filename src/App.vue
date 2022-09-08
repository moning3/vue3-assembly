<template>

  <div class="content">
    <div class="tooltip-content" v-for="item in posts" :key="item.id" :class="`tooltip-postion-${item.loc}`">
      <Tooltip :data="item.msg" :pos="item.loc">
        <div>{{item.data}}</div>
      </Tooltip>
    </div>

    <div class="tabs-content">
      <Tabs :tabs-list="tabList">
        <tab-panel v-for="tab in tabList" :key="tab.id">
          {{tab.msg}}
        </tab-panel>
      </Tabs>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Tooltip from "./components/Tooltip.vue";
import Tabs from "./components/Tabs/Tabs.vue";
import tabPanel from "./components/Tabs/TabPanel.vue";

const posts = [
  { id: 1, data: "内容1111", msg: "描述内容1213", loc: "top" },
  { id: 2, data: "内容2222", msg: "描述内容非常v出现", loc: "left" },
  { id: 3, data: "内容3333", msg: "描述内容实打实的撒", loc: "right" },
  { id: 4, data: "内容4444", msg: "描述内容是歌功颂德分", loc: "bottom" }
];
const tabList = [
  { id: 1, name: "section1", msg: "内容内容内容Panel1" },
  { id: 2, name: "section2", msg: "内容内容内容Panel222222" },
  { id: 3, name: "section3", msg: "内容内容内容Panel33333" }
];
</script>

 <style lang="scss" scoped>
</style>
