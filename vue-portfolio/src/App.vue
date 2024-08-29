<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'

import { computed } from 'vue'

const router = useRouter()

router.beforeEach((to, from) => {
  setTimeout(() => {
    // console.log("wait a moment")
  }, 1800)
})
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style scoped></style>
