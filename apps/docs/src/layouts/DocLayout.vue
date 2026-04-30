<template>
  <div class="doc-layout">
    <header class="doc-header">
      <div class="header-content">
        <h1 class="logo">ZhongQiang UI</h1>
        <nav class="header-nav">
          <router-link to="/guide/installation" class="nav-item">文档</router-link>
          <router-link to="/components/icon" class="nav-item">组件</router-link>
          <a href="https://github.com" target="_blank" class="nav-item">GitHub</a>
        </nav>
      </div>
    </header>
    <div class="doc-main">
      <aside class="doc-sidebar">
        <div class="sidebar-content">
          <div class="sidebar-group">
            <h3 class="sidebar-title">开发指南</h3>
            <router-link
              v-for="item in guideItems"
              :key="item.path"
              :to="item.path"
              class="sidebar-item"
              :class="{ 'is-active': isRouteActive(item.path) }"
            >
              {{ item.title }}
            </router-link>
          </div>
          <div class="sidebar-group">
            <h3 class="sidebar-title">组件</h3>
            <router-link
              v-for="item in componentItems"
              :key="item.path"
              :to="item.path"
              class="sidebar-item"
              :class="{ 'is-active': isRouteActive(item.path) }"
            >
              {{ item.title }}
            </router-link>
          </div>
        </div>
      </aside>
      <main class="doc-content">
        <div class="content-wrapper">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const guideItems = [
  { path: '/guide/installation', title: '安装' },
  { path: '/guide/quickstart', title: '快速上手' }
]

const componentItems = [
  { path: '/components/icon', title: 'Icon 图标' },
  { path: '/components/button', title: 'Button 按钮' },
  { path: '/components/link', title: 'Link 链接' },
  { path: '/components/layout', title: 'Layout 布局' },
  { path: '/components/grid', title: 'Grid 栅格' }
]

const isRouteActive = (path: string) => {
  return computed(() => route.path === path).value
}
</script>

<style scoped>
.doc-layout {
  min-height: 100vh;
  background-color: var(--bg-color-page);
}

.doc-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background-color: var(--bg-color);
  border-bottom: 1px solid var(--border-color);
  z-index: 100;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 24px;
  max-width: 1440px;
  margin: 0 auto;
}

.logo {
  font-size: 20px;
  font-weight: 600;
  color: var(--primary-color);
}

.header-nav {
  display: flex;
  gap: 32px;
}

.nav-item {
  color: var(--text-regular);
  font-size: 15px;
  transition: color 0.3s;
}

.nav-item:hover,
.nav-item.router-link-active {
  color: var(--primary-color);
}

.doc-main {
  display: flex;
  padding-top: var(--header-height);
  max-width: 1440px;
  margin: 0 auto;
}

.doc-sidebar {
  position: sticky;
  top: var(--header-height);
  width: var(--sidebar-width);
  height: calc(100vh - var(--header-height));
  overflow-y: auto;
  border-right: 1px solid var(--border-color-light);
  background-color: var(--bg-color);
}

.sidebar-content {
  padding: 20px 0;
}

.sidebar-group {
  margin-bottom: 24px;
}

.sidebar-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  padding: 0 24px 8px;
  margin-bottom: 4px;
}

.sidebar-item {
  display: block;
  padding: 8px 24px;
  font-size: 14px;
  color: var(--text-regular);
  transition: all 0.3s;
}

.sidebar-item:hover {
  color: var(--primary-color);
  background-color: rgba(64, 158, 255, 0.05);
}

.sidebar-item.is-active {
  color: var(--primary-color);
  font-weight: 500;
  background-color: rgba(64, 158, 255, 0.08);
  border-right: 3px solid var(--primary-color);
}

.doc-content {
  flex: 1;
  min-height: calc(100vh - var(--header-height));
  background-color: var(--bg-color);
}

.content-wrapper {
  padding: var(--content-padding);
  max-width: 900px;
}

@media (max-width: 960px) {
  .doc-sidebar {
    display: none;
  }
}
</style>
