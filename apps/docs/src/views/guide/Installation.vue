<template>
  <div class="doc-page">
    <h1 class="page-title">安装</h1>

    <div class="section">
      <h2 class="section-title">使用包管理器</h2>
      <div class="code-block">
        <pre><code class="language-bash"># npm
npm install @zhongqiang/vue-ui

# pnpm
pnpm add @zhongqiang/vue-ui

# yarn
yarn add @zhongqiang/vue-ui</code></pre>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">引入组件</h2>
      <p class="section-desc">你可以引入整个 ZhongQiang UI，或是根据需要仅引入部分组件。</p>

      <h3 class="section-subtitle">完整引入</h3>
      <div class="code-block">
        <pre><code class="language-typescript">import { createApp } from 'vue'
import ZhongQiangUI from '@zhongqiang/vue-ui'
import '@zhongqiang/vue-ui/dist/style.css'

const app = createApp(App)
app.use(ZhongQiangUI)
app.mount('#app')</code></pre>
      </div>

      <h3 class="section-subtitle">按需引入</h3>
      <div class="code-block">
        <pre><code class="language-typescript">import { createApp } from 'vue'
import { ZqButton, ZqLink } from '@zhongqiang/vue-ui'
import '@zhongqiang/vue-ui/dist/style.css'

const app = createApp(App)
app.component('ZqButton', ZqButton)
app.component('ZqLink', ZqLink)
app.mount('#app')</code></pre>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">注意事项</h2>
      <ul class="notice-list">
        <li>使用组件前请确保已引入样式文件</li>
        <li>组件库依赖 Vue 3.x，不支持 Vue 2.x</li>
        <li>推荐使用 pnpm 作为包管理器</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.doc-page {
  line-height: 1.8;
}

.page-title {
  font-size: 32px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border-color-light);
}

.section {
  margin-bottom: 40px;
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: 18px;
  font-weight: 500;
  color: var(--text-primary);
  margin: 24px 0 12px;
}

.section-desc {
  color: var(--text-regular);
  margin-bottom: 16px;
}

.code-block {
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 16px 20px;
  margin: 12px 0;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
}

.code-block code {
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.6;
  color: #d4d4d4;
}

.language-typescript {
  color: #4ec9b0;
}

.language-bash {
  color: #ce9178;
}

.notice-list {
  padding-left: 20px;
  color: var(--text-regular);
}

.notice-list li {
  margin-bottom: 8px;
}
</style>
