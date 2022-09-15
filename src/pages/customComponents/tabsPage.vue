<template>
  <div class="tabs-content">
      <Tabs :tabs-list="tabList">
        <TabPanel :tabs-list="tabList"></TabPanel>
      </Tabs>
    </div>
</template>

<script setup>
  import Tabs from "@/components/Tabs/Tabs.vue";
  import TabPanel from "@/components/Tabs/TabPanel.vue";
  
  const tabList = [
  { id: 1, name: "section1", msg: "内容内容内容Panel1" },
  { id: 2, name: "section2", msg: "内容内容内容Panel222222" },
  { id: 3, name: "section3", msg: "内容内容内容Panel33333" }
];
</script>

<style lang="scss" scoped>

</style>