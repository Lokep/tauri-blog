<style lang="scss" scoped>
.content {
  max-height: 100%;
  overflow-y: scroll;
  overflow-y: overlay;
}
</style>

<template>
  <div class="layout w-full h-full flex bg-slate-100">
    <Leftbar />

    <div
      class="content flex-1 h-full p-4"
      :style="{
        ...wrapPadding,
      }"
    >
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import Leftbar from "./leftbar.vue";
import { computed } from "vue";
import { isNumber, isBoolean } from "lodash-es";

const route = useRoute();

const defaultPadding = "16px";

const wrapPadding = computed(() => {
  const { padding } = route.meta;

  if (padding === undefined) {
    return {
      padding: defaultPadding,
    };
  }

  if (isNumber(padding)) {
    return {
      padding: padding + "px",
    };
  } else if (Array.isArray(padding)) {
    return {
      padding: padding
        .map((item) =>
          isNumber(item) || item.indexOf("px" || "%" || "vw" || "vh" || "em") === -1
            ? item + "px"
            : item
        )
        .join(" "),
    };
  } else if (isBoolean(padding)) {
    return {
      padding: padding ? defaultPadding : 0,
    };
  }
});
</script>
