<template>
  <div class="showdialog-content">
      <button @click="dialogVisible = true">显示弹窗</button>
    </div>

    <Dialog v-model="dialogVisible" title="Tip" width="30%" :before-close="handleClose">
      <span>This is a message.</span>
      <template #footer>
        <span>
          <Button @click="dialogVisible = false">Cancel</Button>
          <Button type="primary" @click="dialogVisible = false">Confirm</Button>
        </span>
      </template>
    </Dialog>
</template>

<script setup>
import { ref } from "vue";
import Dialog from "@/components/Dialog/Dialog.vue"
import Button from "@/components/common/Button.vue"


let dialogVisible = ref(false)
let handleClose = () => {
  dialogVisible.value = false
}
  
</script>

<style lang="scss" scoped>

</style>