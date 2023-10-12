<style lang="scss" scoped></style>

<template>
  <div class="container">
    {{ route.params }}
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>
