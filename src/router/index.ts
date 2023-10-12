import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/components/Layout/index.vue";

/**
 * 用户设置模块
 * - 用户信息 语言/偏好/存储/导出/代码仓库/用户信息（名称/又想）
 * - 记录统计 stat
 * - 消息通知
 */
const settings = [];

/**
 * 固定模块
 * - dashboard
 * - memo 小记
 * - wechat 微信输入
 * - 每日回顾 日历
 */
export const constants = [
  {
    path: "dashboard",
    name: "Dashboard",
    component: () => import("@/views/dashboard/index.vue"),
    meta: {
      title: "开始",
      icon: "iconshijian",
    },
  },

  {
    path: "memo",
    name: "Memo",
    component: () => import("@/views/memo/index.vue"),
    meta: {
      title: "Memo",
      icon: "iconsucai",
      padding: false
    },
  },

  {
    path: "wechat",
    name: "Wechat",
    component: () => import("@/views/wechat/index.vue"),
    meta: {
      title: "微信输入",
      icon: "iconsucai",
    },
  },

  {
    path: "calendar",
    name: "Calendar",
    component: () => import("@/views/calendar/index.vue"),
    meta: {
      title: "每日回顾",
      icon: "iconshijian",
    },
  },
];

/**
 * tags 标签即各种目录
 */
const tags = [
  {

    path: 'tag',
    name: 'Tag',
    component: () => import("@/views/tag/index.vue"),
    meta: {
      padding: false,
    },
    children: [
      {
        path: ':directory*',
        name: 'File',
        component: () => import('@/views/tag/directory.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      redirect: "essay",
      children: [
        {
          path: "essay",
          name: "essay",
          component: () => import("@/views/essay/index.vue"),
        },


        ...constants,
        ...tags
      ],
    },
  ],
});

export default router;
