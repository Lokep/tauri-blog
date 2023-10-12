<style lang="scss" scoped></style>

<template>
  <div class="container">
    <div class="text-2xl">{{ route.meta.title }}</div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>
