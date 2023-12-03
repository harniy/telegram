<script setup lang="ts">
import { matDarkMode, matLightMode } from '@quasar/extras/material-icons'

const theme = useQuasarTheme()

const modeIcon = computed(() => theme.state.isDark ? matDarkMode : matLightMode)
</script>

<template>
  <div class="main">
    <div class="dark-theme">
      <q-toggle v-model="theme.state.isDark" color="primary" keep-color :icon="modeIcon" dense dark
        @click="theme.toggle" />
    </div>
    <div class="title">Usik configurator</div>

    <MainUsik />
    <UniqueUsik />
    <FinishUsik />

  </div>
</template>
