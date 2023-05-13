<template>
  <Layout ref="appRef" @contextmenu.prevent />
</template>

<script lang="ts" setup>
import scaleBox from '@/utils/scaleBox'
import Layout from '@/layout/index.vue'
import { onMounted, ref } from 'vue'

const appRef = ref(null)

onMounted(() => {
  scaleBox({
    appRef
  })
})
</script>

<style lang="less">
html,
body,
#app {
  width: 100%;
  height: 100%;
}

#app {
  background-color: #eee;
}

* {
  box-sizing: border-box;
}
</style>
