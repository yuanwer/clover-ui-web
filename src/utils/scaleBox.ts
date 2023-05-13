import { onMounted, reactive } from 'vue'

export default function (options = {}) {
  const state = reactive({
    scale: 0,
    baseHeight: 1080,
    baseWidth: 1920,
    appRef: null
  })

  state.baseWidth = options.baseWidth || state.baseWidth
  state.baseHeight = options.baseHeight || state.baseHeight
  state.appRef = options.appRef || state.appRef

  const calcRate = () => {
    const appRef = state.appRef?.$el
    if (!appRef) {
      return
    }
    const offsetWidth = window.innerWidth
    const offsetHeight = window.innerHeight
    let top = 0
    let left = 0
    const scaleX = offsetWidth / state.baseWidth
    const scaleY = offsetHeight / state.baseHeight

    state.scale = Math.min(scaleX, scaleY)
    left = (offsetWidth - state.baseWidth * state.scale) / 2
    top = (offsetHeight - state.baseHeight * state.scale) / 2

    const transform = `translate3d(${left}px, ${top}px, 0) scale(${state.scale})`
    appRef.style.width = state.baseWidth + 'px'
    appRef.style.height = state.baseHeight + 'px'
    appRef.style.transformOrigin = 'left top'
    appRef.style.transform = transform
  }

  let timer = null

  const resize = () => {
    clearTimeout(timer)
    timer = setTimeout(calcRate, 500)
  }
  calcRate()

  window.addEventListener('resize', resize)
}
