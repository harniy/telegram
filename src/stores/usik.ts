import { defineStore } from 'pinia'
import { useQuasar } from 'quasar'

export const useUsikStore = defineStore('usik', () => {
  const state = reactive<any>({
    rawUsiks: '',
    toggle: false
  })

  const { notify } = useQuasar()

  const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), [])

  const filterUsiks = computed(() =>
    state.rawUsiks?.replaceAll('\n', ' ')?.split(' ')?.filter(w => w.includes('@')) ?? [])

  const repeatedUsers = computed(() => {
    const unique = Array.from(new Set(filterUsiks.value))
    const res: Array<number[]> = []

    unique.forEach(u => {
      const user = filterUsiks.value.filter(f => f === u)
      if (user.length > 1) {
        res.push(indexOfAll(filterUsiks.value, u))
      }
    })

    return res
  })

  const uniqueUsers = computed(() => {
    const unique = Array.from(new Set(filterUsiks.value))
    if (!state.toggle) {
      return unique
    } else {
      const res: string[] = []

      unique.forEach(u => filterUsiks.value.filter(f => f === u).length > 1 ? res.push(String(u)) : false)
      return filterUsiks.value.filter(u => !res.includes(u))
    }
  })

  const saveUsiks = (usiks: string[], withIndex = true) => {
    const usersWithIdx = usiks.map((u, idx) => (`${withIndex ? `${idx + 1}. ` : ''} ${u}`))
    const normalizeUsers = usersWithIdx.join('\n')
    navigator.clipboard.writeText(normalizeUsers)
    notify({
      message: 'Copy!',
      type: 'positive'
    })
  }
  return {
    state,
    filterUsiks,
    saveUsiks,
    repeatedUsers,
    uniqueUsers
  }
})