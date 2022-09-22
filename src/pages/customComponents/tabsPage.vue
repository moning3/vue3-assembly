<template>
  <div class="tabs-content">
      <!-- <Tabs :tabs-list="tabList">
        <TabPanel :tabs-list="tabList"></TabPanel>
      </Tabs> -->
      <Tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
        <TabPanel v-for="(item, index) in editableTabs" :key="item.name"
        :label="item.title" :name="item.name">
        {{ item.content }}
      </TabPanel>
      </Tabs>
    </div>
</template>

<script setup>
  import { ref } from "vue";
  import Tabs from "@/components/Tabs/Tabs.vue";
  import TabPanel from "@/components/Tabs/TabPanel.vue";

  let tabIndex = 2;
  const editableTabsValue = ref('2')
  const editableTabs = ref([
    { id: 1, title: 'Tab 1', name: '1', content: 'Tab 1 content' },
    { id: 2, title: 'Tab 2', name: '2', content: 'Tab 2 content' },
    { id: 3, title: 'Tab 3', name: '3', content: 'Tab 3 content' }
  ]);
  
  const handleTabsEdit = (targetName, action) => {
  if (action === 'add') {
    const newTabName = `${++tabIndex}`
    editableTabs.value.push({
      title: 'New Tab',
      name: newTabName,
      content: 'New Tab content',
    })
    editableTabsValue.value = newTabName
  } else if (action === 'remove') {
    const tabs = editableTabs.value
    let activeName = editableTabsValue.value
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
    }

    editableTabsValue.value = activeName
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
  }
}
</script>

<style lang="scss" scoped>

</style>