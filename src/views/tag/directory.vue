<style lang="scss" scoped>
.leftbar {
  background-color: #fff;
  width: 240px;
}

.menu {
  &-header {
    border-bottom: 1px solid rgb(239, 239, 245);
  }
}
</style>

<template>
  <div class="container w-full h-full flex">
    <div class="leftbar h-full w-3/12 overflow-hidden shrink-0">
      <!-- {{ route.params }} -->

      <div class="menu-header m-2 p-2">
        <div class="text-lg">文件夹名 {{ route.params.directory[0] }}</div>
      </div>

      <Cell icon="iconhome" label="首页" />
      <Cell icon="iconpin" label="全部文档/目录" />
    </div>

    <div class="content flex-1 h-full flex items-center justify-center">
      <n-empty size="large" description="暂无内容，快来创作吧"></n-empty>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>
