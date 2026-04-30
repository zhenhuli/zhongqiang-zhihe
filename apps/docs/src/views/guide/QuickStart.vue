<template>
  <div class="doc-page">
    <h1 class="page-title">快速上手</h1>

    <div class="section">
      <h2 class="section-title">创建一个 Vue 项目</h2>
      <p class="section-desc">如果你还没有 Vue 项目，可以使用 Vite 快速创建一个。</p>
      <div class="code-block">
        <pre><code class="language-bash"># 使用 Vite 创建项目
npm create vite@latest my-app -- --template vue

# 进入项目目录
cd my-app

# 安装依赖
npm install</code></pre>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">安装 ZhongQiang UI</h2>
      <div class="code-block">
        <pre><code class="language-bash">npm install @zhongqiang/vue-ui</code></pre>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">使用组件</h2>

      <h3 class="section-subtitle">方式一：全局注册</h3>
      <p class="section-desc">在 main.ts 中全局引入组件库，所有组件即可直接使用。</p>
      <div class="code-block">
        <pre><code class="language-typescript">// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import ZhongQiangUI from '@zhongqiang/vue-ui'
import '@zhongqiang/vue-ui/dist/style.css'

const app = createApp(App)
app.use(ZhongQiangUI)
app.mount('#app')</code></pre>
      </div>

      <h3 class="section-subtitle">方式二：按需引入</h3>
      <p class="section-desc">只引入你需要的组件，减少打包体积。</p>
      <div class="code-block">
        <pre><code class="language-typescript">// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { ZqButton, ZqLink } from '@zhongqiang/vue-ui'
import '@zhongqiang/vue-ui/dist/style.css'

const app = createApp(App)

// 全局注册组件
app.component('ZqButton', ZqButton)
app.component('ZqLink', ZqLink)

app.mount('#app')</code></pre>
      </div>

      <h3 class="section-subtitle">在组件中直接引入</h3>
      <div class="code-block">
        <pre><code class="language-vue"><template>
  <div>
    <ZqButton type="primary">主要按钮</ZqButton>
    <ZqLink type="primary">链接</ZqLink>
  </div>
</template>

<script setup lang="ts">
import { ZqButton, ZqLink } from '@zhongqiang/vue-ui'
</script></code></pre>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">示例</h2>
      <p class="section-desc">以下是一个简单的使用示例：</p>

      <div class="demo-box">
        <div class="demo-content">
          <ZqButton type="primary">主要按钮</ZqButton>
          <ZqButton type="success">成功按钮</ZqButton>
          <ZqButton type="warning">警告按钮</ZqButton>
          <ZqButton type="danger">危险按钮</ZqButton>
        </div>
      </div>

      <div class="code-block">
        <pre><code class="language-vue"><template>
  <div class="demo">
    <ZqButton type="primary">主要按钮</ZqButton>
    <ZqButton type="success">成功按钮</ZqButton>
    <ZqButton type="warning">警告按钮</ZqButton>
    <ZqButton type="danger">危险按钮</ZqButton>
  </div>
</template>

<script setup lang="ts">
import { ZqButton } from '@zhongqiang/vue-ui'
</script></code></pre>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">下一步</h2>
      <p class="section-desc">
        现在你已经了解了如何安装和使用 ZhongQiang UI，接下来可以查看各个组件的详细文档，了解更多用法。
      </p>
      <router-link to="/components/button" class="next-link">
        查看 Button 组件文档 →
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ZqButton } from '@zhongqiang/vue-ui'
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

.language-vue {
  color: #4fc1ff;
}

.demo-box {
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  margin: 12px 0;
}

.demo-content {
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.next-link {
  display: inline-block;
  padding: 12px 24px;
  background-color: var(--primary-color);
  color: #fff;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
  transition: background-color 0.3s;
}

.next-link:hover {
  background-color: #66b1ff;
  color: #fff;
}
</style>
