import { defineStore } from 'pinia'
import { useQuasar } from 'quasar'
import { useStorage } from '@vueuse/core'

export const useQuasarTheme = defineStore('theme', () => {
  const q = useQuasar()

  const state = reactive({
    isDark: false,
  })

  const theme = useStorage('theme', '')

  watch(() => q.dark.mode, (d) => {
    theme.value = String(d)
    state.isDark = !!d
  })

  onBeforeMount(() => {
    if (theme.value) {
      q.dark.set(JSON.parse(theme.value))
    }
  })
  return {
    state,
    toggle() {
      q.dark.toggle()
    },
  }
})
