<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import Navbar from './components/Navbar.vue'

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
