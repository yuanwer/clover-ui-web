import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('index', () => {
  const runningApp = ref([])
 
  function addRunningApp(app) {
    runningApp.value.push(app)
  }


  return { runningApp,addRunningApp }
})
