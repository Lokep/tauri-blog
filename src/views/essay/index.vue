<style lang="scss" scoped>
.leftbar {
  flex-basis: 40%;
  flex-shrink: 0;
}

.content {
  flex: 1;
  height: 100%;
  overflow-y: scroll;
  overflow-y: overlay;
  max-height: 100%;
  background-color: #fafafa;
}

// scroll-snap-type: y mandatory;
</style>

<template>
  <div class="container w-full h-full flex flex-row">
    <div class="leftbar bg-white"></div>

    <div class="content">
      <!-- <n-card hoverable style="width: 300px" v-for="i in 20" :key="i">
        <template #cover>
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        </template>
        <template #actions>
          <setting-outlined key="setting" />
          <edit-outlined key="edit" />
          <ellipsis-outlined key="ellipsis" />
        </template>
        <n-card-meta title="Card title" description="This is the description">
          <template #avatar>
            <n-avatar text="L" />
          </template>
        </n-card-meta>
      </n-card> -->
    </div>
  </div>
</template>

<script setup lang="ts">
// import { SettingOutlined, EditOutlined, EllipsisOutlined } from "@ant-design/icons-vue";
</script>
