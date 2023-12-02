<script setup lang="ts">
import { matContentCopy } from '@quasar/extras/material-icons'
const usikStore = useUsikStore()
</script>

<template>
  <div class="block">
    <div class="block-title">
      Enter text
    </div>

    <div class="block-textarea">
      <q-input v-model="usikStore.state.rawUsiks" filled type="textarea"></q-input>
    </div>

    <div class="block-result" v-if="usikStore.filterUsiks.length !== 0">
      <div class="block-result__title">
        All users
      </div>
      <div class="block-result__usiks">
        <div class="usik" v-for="(usik, idx) in usikStore.filterUsiks" :key="idx">
          {{ `${idx + 1}.${usik}` }}
        </div>
      </div>
      <div class="block-result__count">
        <span>
          Users count: <b>{{ usikStore.filterUsiks.length }}</b>
        </span>

        <q-icon :name="matContentCopy" @click="usikStore.saveUsiks(usikStore.filterUsiks)" />
      </div>
    </div>
  </div>
</template>