<style lang="scss" scoped>
.leftbar {
  // min-width: 60px;
  min-width: 240px;
  width: 18vw;
  position: relative;
  background-color: #fafafa;

  padding: 40px 0 0;
}

.menu {
  overflow-y: scroll;
  user-select: none;

  &-item {
    margin: 10px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 14px;
    line-height: 20px;

    @apply flex;
    @apply items-center;

    &:hover {
      background-color: #eff0f0;
    }

    &--icon {
      font-size: 20px;
      font-weight: 500;
      // padding: 8px;
      line-height: 20px;
      padding: 10px;
      // text-align: center;
      height: 40px;
    }

    &.is-active {
      background-color: #eff0f0;
      // color: #fff;
    }
  }

  &-sub {
    margin: 10px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 14px;
    line-height: 20px;

    margin-left: 40px;

    & + & {
      margin-top: 10px;
    }

    &:hover {
      background-color: #eff0f0;
    }
  }
}
</style>

<template>
  <div class="leftbar h-full flex flex-col">
    <n-avatar class="shrink-0 mx-auto">U</n-avatar>

    <div class="p-4">
      <n-input v-model:value="keyword" type="text" placeholder="基本的 Input" loading />
    </div>

    <div class="menu">
      <template v-for="item in constants" :key="item.name">
        <Cell :icon="item.meta.icon" :label="item.meta.title" :link="item.path" />
      </template>

      <div class="px-4">
        <n-divider />
      </div>

      <div class="tags">
        <Cell icon="iconhashjinghao" label="标签" />

        <!-- <div
          class="menu-sub flex items-center gap-1 p-2"
          v-for="item in 10"
          :key="item"
          @click="() => router.push('/tag/test/2323/' + item)"
        >
          <div class="iconfont"></div>
          <div class="menu-sub--txt truncate">标签标签标签标签标签标签</div>
        </div> -->

        <Cell
          v-for="item in 10"
          :key="item"
          label="标签标签标签标签标签标签"
          size="small"
          @click="() => router.push('/tag/test/2323/' + item)"
        />
      </div>
    </div>

    <ResizeTracker />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { constants } from "@/router/index";
import { ref } from "vue";

const router = useRouter();
const keyword = ref("");
</script>
