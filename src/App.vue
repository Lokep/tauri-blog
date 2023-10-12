<template>
  <RouterView />
</template>

<style>
@import "//at.alicdn.com/t/c/font_1847302_zmhaalmgkic.css";

@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  width: 100%;
  height: 100%;

  overscroll-behavior-x: none;
}

.container {
  max-width: 100% !important;
  overscroll-behavior-x: none;
}
</style>
