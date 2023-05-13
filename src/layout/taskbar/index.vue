<template>
  <div class="taskbar">
    <div class="taskbar-runningTask">
      <AppIcon
        v-for="app in runningApp"
        :key="app.id"
        :name="app.name"
        :icon="app.icon"
      />
    </div>
    <div class="taskbar-fixedApp">
      <div class="taskbar-fixedApp-item"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '@/stores'
import clover from '@/assets/icons/clover.png'
import AppIcon from '@/components/icon/AppIcon.vue'

const store = useStore()

const runningApp = store.runningApp

store.addRunningApp({
  id: '1',
  name: '应用列表',
  icon: clover
})
</script>
<script lang="ts">
export default {
  name: 'Taskbar'
}
</script>

<style lang="less" scoped>
.taskbar {
  align-self: center;
  margin-bottom: 10px;
  width: 80%;
  height: 100px;
  display: flex;
  border-radius: 30px;
  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.85);
  padding: 20px;

  .taskbar-runningTask {
    display: flex;
    align-items: center;
  }
}
</style>
