<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="app-icon" :title="props.name">
    <img class="icon" :src="props.icon" alt="icon" />
    <!--    <span>{{ props.name }}</span>-->
  </div>
</template>

<style scoped lang="less">
.app-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }

  .icon {
    width: 50px;
    height: 50px;
  }
}
</style>
