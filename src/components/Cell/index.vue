<style lang="scss" scoped>
.cell {
  @apply flex;
  @apply items-center;

  @apply mx-3;
  @apply my-2;
  @apply cursor-pointer;

  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;

  &.sm {
    margin: 10px;
  }

  &:hover {
    background-color: #eff0f0;

    .cell-operation {
      display: block;
    }
  }

  &.is-active {
    background-color: #eff0f0;
  }

  &-icon,
  &-operation {
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    padding: 10px;
    height: 40px;
    width: 40px;
  }

  &-operation {
    display: none;
    color: #666;
  }
}
</style>

<template>
  <div class="cell sm" @click="handleCellClick">
    <div class="cell-icon shrink-0 iconfont" :class="[icon]"></div>
    <div class="cell-text flex-1 truncate">{{ label }}</div>
    <div class="cell-operation shrink-0 iconfont icongengduo1"></div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";

enum ESize {
  // large,
  default = "default",
  small = "small",
}

const router = useRouter();

const props = defineProps({
  icon: {
    type: String,
  },

  label: {
    type: String,
    default: "",
  },

  link: {
    type: String,
    default: "",
  },

  size: {
    type: String as PropType<ESize>,
    default: ESize.default,
  },
});

const handleCellClick = () => {
  console.log(props.link);

  if (props.link) {
    const link = props.link.startsWith("/") ? props.link : `/${props.link}`;

    router.push(link);
  }
};
</script>
