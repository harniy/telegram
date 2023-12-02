<script setup lang="ts">
import { matContentCopy } from '@quasar/extras/material-icons'
const usikStore = useUsikStore()
</script>

<template>
  <div class="block block-3" v-if="usikStore.filterUsiks.length !== 0">
    <div class="block-result">
      <div class="block-result__title">
        All users
        <div class="switcher">
          Unique
          <q-toggle v-model="usikStore.state.toggle" color="primary" keep-color />
          Clear
        </div>
      </div>
      <div class="block-result__usiks">
        <div class="usik" v-for="(usik, idx) in usikStore.uniqueUsers" :key="idx">
          {{ `${idx + 1}.${usik}` }}
        </div>
      </div>
      <div class="block-result__count">
        <span>
          Users count: <b>{{ usikStore.uniqueUsers.length }}</b>
        </span>

        <q-icon :name="matContentCopy" @click="usikStore.saveUsiks(usikStore.uniqueUsers)" />
      </div>
    </div>
  </div>
</template>