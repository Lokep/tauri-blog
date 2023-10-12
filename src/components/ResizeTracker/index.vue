<style lang="scss" scoped>
.tracker {
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  user-select: none;
  // background-color: rgba(0, 0, 0, 0.3);
  border-right: 2px solid transparent;
  transition: border-color 0.4s;

  &:hover {
    border-right: 2px solid blue;
  }

  &-block {
    @apply bg-white;
    @apply cursor-pointer;

    font-size: 14px;
    box-sizing: border-box;
    border: 1px solid rgb(239, 239, 245);
    border-radius: 4px;
    right: -16px;
    top: 30vh;
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    pointer-events: all;

    &:hover {
      @apply shadow;
    }
  }
}
</style>

<template>
  <div class="tracker w-full h-full">
    <div class="tracker-block absolute iconfont icona-zuojiantouzhixiangzuojiantou"></div>
    <div class="tracker-block absolute iconfont icona-youjiantouzhixiangyoujiantou"></div>
    <div class="tracker-line"></div>
  </div>
</template>

<script setup lang="ts">
/**
 * 使用场景：需要使用collapse 或者拖拽调整width的 比如菜单组件中，
 */
</script>
