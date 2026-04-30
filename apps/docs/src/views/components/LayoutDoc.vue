<template>
  <div class="doc-page">
    <h1 class="page-title">Layout 布局</h1>
    <p class="page-desc">用于布局的容器组件，方便快速搭建页面的基本结构。</p>

    <div class="section">
      <h2 class="section-title">基础用法</h2>
      <p class="section-desc">ZqContainer 组件会根据其子元素自动判断方向，当子元素包含 ZqAside 时为水平布局，否则为垂直布局。</p>

      <div class="demo-box">
        <div class="demo-content">
          <div class="layout-demo">
            <ZqContainer>
              <ZqHeader class="demo-header">Header</ZqHeader>
              <ZqMain class="demo-main">Main</ZqMain>
              <ZqFooter class="demo-footer">Footer</ZqFooter>
            </ZqContainer>
          </div>
        </div>
      </div>

      <div class="code-block">
        <pre><code class="language-vue"><template>
  <ZqContainer>
    <ZqHeader>Header</ZqHeader>
    <ZqMain>Main</ZqMain>
    <ZqFooter>Footer</ZqFooter>
  </ZqContainer>
</template>

<script setup lang="ts">
import { ZqContainer, ZqHeader, ZqMain, ZqFooter } from '@zhongqiang/vue-ui'
</script></code></pre>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">包含侧边栏</h2>
      <p class="section-desc">当容器内有 ZqAside 组件时，布局会自动切换为水平方向。</p>

      <div class="demo-box">
        <div class="demo-content">
          <div class="layout-demo layout-demo-large">
            <ZqContainer>
              <ZqHeader class="demo-header">Header</ZqHeader>
              <ZqContainer>
                <ZqAside class="demo-aside">Aside</ZqAside>
                <ZqMain class="demo-main">Main</ZqMain>
              </ZqContainer>
            </ZqContainer>
          </div>
        </div>
      </div>

      <div class="code-block">
        <pre><code class="language-vue"><template>
  <ZqContainer>
    <ZqHeader>Header</ZqHeader>
    <ZqContainer>
      <ZqAside>Aside</ZqAside>
      <ZqMain>Main</ZqMain>
    </ZqContainer>
  </ZqContainer>
</template>

<script setup lang="ts">
import { ZqContainer, ZqHeader, ZqAside, ZqMain } from '@zhongqiang/vue-ui'
</script></code></pre>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">自定义高度和宽度</h2>
      <p class="section-desc">通过 height 和 width 属性自定义各部分的尺寸。</p>

      <div class="demo-box">
        <div class="demo-content">
          <div class="layout-demo layout-demo-large">
            <ZqContainer>
              <ZqHeader height="80px" class="demo-header">Header (80px)</ZqHeader>
              <ZqContainer>
                <ZqAside width="200px" class="demo-aside">Aside (200px)</ZqAside>
                <ZqMain class="demo-main">Main</ZqMain>
              </ZqContainer>
              <ZqFooter height="40px" class="demo-footer">Footer (40px)</ZqFooter>
            </ZqContainer>
          </div>
        </div>
      </div>

      <div class="code-block">
        <pre><code class="language-vue"><template>
  <ZqContainer>
    <ZqHeader height="80px">Header (80px)</ZqHeader>
    <ZqContainer>
      <ZqAside width="200px">Aside (200px)</ZqAside>
      <ZqMain>Main</ZqMain>
    </ZqContainer>
    <ZqFooter height="40px">Footer (40px)</ZqFooter>
  </ZqContainer>
</template>

<script setup lang="ts">
import { ZqContainer, ZqHeader, ZqAside, ZqMain, ZqFooter } from '@zhongqiang/vue-ui'
</script></code></pre>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">Container Attributes</h2>
      <div class="table-wrapper">
        <table class="attr-table">
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>可选值</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>direction</td>
              <td>子元素的排列方向</td>
              <td>string</td>
              <td>horizontal / vertical</td>
              <td>子元素中有 ZqAside 时为 horizontal，否则为 vertical</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">Header Attributes</h2>
      <div class="table-wrapper">
        <table class="attr-table">
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>可选值</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>height</td>
              <td>顶栏高度</td>
              <td>string</td>
              <td>—</td>
              <td>60px</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">Aside Attributes</h2>
      <div class="table-wrapper">
        <table class="attr-table">
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>可选值</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>width</td>
              <td>侧边栏宽度</td>
              <td>string</td>
              <td>—</td>
              <td>300px</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">Footer Attributes</h2>
      <div class="table-wrapper">
        <table class="attr-table">
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>可选值</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>height</td>
              <td>底栏高度</td>
              <td>string</td>
              <td>—</td>
              <td>60px</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ZqContainer, ZqHeader, ZqAside, ZqMain, ZqFooter } from '@zhongqiang/vue-ui'
</script>

<style scoped>
.doc-page {
  line-height: 1.8;
}

.page-title {
  font-size: 32px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.page-desc {
  color: var(--text-regular);
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
}

.layout-demo {
  width: 100%;
  min-height: 200px;
}

.layout-demo-large {
  min-height: 300px;
}

.demo-header {
  background-color: #409eff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}

.demo-aside {
  background-color: #545c64;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.demo-main {
  background-color: #e4e7ed;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.demo-footer {
  background-color: #727273;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}

.table-wrapper {
  overflow-x: auto;
}

.attr-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.attr-table th,
.attr-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid var(--border-color);
}

.attr-table th {
  background-color: var(--bg-color-page);
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
}

.attr-table td {
  color: var(--text-regular);
}

.attr-table tbody tr:hover {
  background-color: var(--bg-color-page);
}
</style>
