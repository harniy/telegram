<script setup lang="ts">
import { matContentCopy } from '@quasar/extras/material-icons'
import { usikId } from '@/utils'

const usikStore = useUsikStore()
</script>

<template>
  <div class="block block-3" v-if="usikStore.filterUsiks.length !== 0">
    <div class="block-result">
      <div class="block-result__title">
        All users
        <q-checkbox keep-color color="cyan" v-model="usikStore.state.withId.result" label="With ID" />
        <div class="switcher">
          Unique
          <q-toggle v-model="usikStore.state.toggle" color="primary" keep-color />
          Without repeated
        </div>
      </div>
      <div class="block-result__usiks">
        <div class="usik" v-for="(usik, idx) in usikStore.uniqueUsers" :key="idx">
          {{ `${usikId(idx, usikStore.state.withId.result)}${usik}` }}
        </div>
      </div>
      <div class="block-result__count">
        <span>
          Users count: <b>{{ usikStore.uniqueUsers.length }}</b>
        </span>

        <q-icon :name="matContentCopy"
          @click="usikStore.saveUsiks(usikStore.uniqueUsers, usikStore.state.withId.result)" />
      </div>
    </div>
  </div>
</template>