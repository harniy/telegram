<script setup lang="ts">
import { usikId } from '@/utils'
import { matContentCopy } from '@quasar/extras/material-icons'
const usikStore = useUsikStore()
</script>

<template>
  <div class="block block-1">
    <div class="block-title">
      Enter text
    </div>

    <div class="block-textarea">
      <q-input v-model="usikStore.state.rawUsiks" filled type="textarea"></q-input>
    </div>

    <div class="block-result" v-if="usikStore.filterUsiks.length !== 0">
      <div class="block-result__title">
        All users

        <q-checkbox keep-color color="cyan" v-model="usikStore.state.withId.main" label="With ID" />
      </div>
      <div class="block-result__usiks">
        <div class="usik" v-for="(usik, idx) in usikStore.filterUsiks" :key="idx">
          {{ `${usikId(idx, usikStore.state.withId.main)}${usik}` }}
        </div>
      </div>
      <div class="block-result__count">
        <span>
          Users count: <b>{{ usikStore.filterUsiks.length }}</b>
        </span>

        <q-icon :name="matContentCopy" @click="usikStore.saveUsiks(usikStore.filterUsiks, usikStore.state.withId.main)" />
      </div>
    </div>
  </div>
</template>