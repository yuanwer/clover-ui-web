<template>
  <div class="layout">
    <ViewContainer />
    <Taskbar />
  </div>
</template>

<script lang="ts" setup>
import Taskbar from './taskbar/index.vue'
import ViewContainer from './view-container/index.vue'
</script>
<script lang="ts">
export default {
  name: 'Layout'
}
</script>

<style lang="less" scoped>
.layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: url('@/assets/background/img_20181108_143756b.jpg') no-repeat;
  background-size: cover;
}
</style>
