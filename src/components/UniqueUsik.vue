<script setup lang="ts">
import { matContentCopy } from '@quasar/extras/material-icons'
const usikStore = useUsikStore()

const normalizeRepeated = computed(() => {
  const allUsers = usikStore.filterUsiks
  const repeatedUsers = usikStore.repeatedUsers

  const res: string[] = []

  repeatedUsers.forEach((users: number[]) => {
    users.forEach(userIndex => {
      res.push(`${userIndex + 1}. ${allUsers[userIndex]}`)
    })
  })
  return res
})
</script>

<template>
  <div class="block block-2" v-if="usikStore.filterUsiks.length !== 0">
    <div class="block-title">
      Repeated users {{ usikStore.repeatedUsers.length }}
    </div>

    <div class="block-result" v-if="usikStore.repeatedUsers.length !== 0">
      <div class="block-result__usiks">
        <div class="usik" v-for="(usik, idx) in normalizeRepeated" :key="idx">
          {{ usik }}
        </div>
      </div>
      <div class="block-result__count">
        <q-icon :name="matContentCopy" style="margin-left: auto;"
          @click="usikStore.saveUsiks(normalizeRepeated, false)" />
      </div>
    </div>
  </div>
</template>