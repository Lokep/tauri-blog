<style lang="scss" scoped></style>

<template>
  <div class="container">
    <div class="text-2xl mb-10" @click="() => greet('lokep')">{{ route.meta.title }}</div>

    <n-table :bordered="false" :single-line="false">
      <!-- <thead>
        <tr>
          <th>Abandon</th>
          <th>Abnormal</th>
          <th>Abolish</th>
          <th>...</th>
          <th>万事开头难</th>
        </tr>
      </thead> -->
      <tbody>
        <tr>
          <td>放弃</td>
          <td>反常的</td>
          <td>彻底废除</td>
          <td>...</td>
          <td>干！我刚才背的是啥</td>
        </tr>
        <tr>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
        </tr>
      </tbody>
    </n-table>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { invoke } from "@tauri-apps/api/tauri";

const route = useRoute();

const greet = async (name: string) => {
  console.log(await invoke("greet", { name }));
};
</script>
