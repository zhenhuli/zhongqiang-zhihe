<template>
  <div class="doc-page">
    <h1 class="page-title">Link 链接</h1>
    <p class="page-desc">文字超链接组件。</p>

    <div class="section">
      <h2 class="section-title">基础用法</h2>
      <p class="section-desc">使用 type 属性来定义链接的样式。</p>

      <div class="demo-box">
        <div class="demo-content">
          <ZqLink>默认链接</ZqLink>
          <ZqLink type="primary">主要链接</ZqLink>
          <ZqLink type="success">成功链接</ZqLink>
          <ZqLink type="warning">警告链接</ZqLink>
          <ZqLink type="danger">危险链接</ZqLink>
          <ZqLink type="info">信息链接</ZqLink>
        </div>
      </div>

      <div class="code-block">
        <pre><code class="language-vue"><template>
  <ZqLink>默认链接</ZqLink>
  <ZqLink type="primary">主要链接</ZqLink>
  <ZqLink type="success">成功链接</ZqLink>
  <ZqLink type="warning">警告链接</ZqLink>
  <ZqLink type="danger">危险链接</ZqLink>
  <ZqLink type="info">信息链接</ZqLink>
</template>

<script setup lang="ts">
import { ZqLink } from '@zhongqiang/vue-ui'
</script></code></pre>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">下划线</h2>
      <p class="section-desc">使用 underline 属性显示下划线。</p>

      <div class="demo-box">
        <div class="demo-content">
          <ZqLink type="primary" underline>带下划线</ZqLink>
          <ZqLink type="success" underline>带下划线</ZqLink>
          <ZqLink type="danger" underline>带下划线</ZqLink>
        </div>
      </div>

      <div class="code-block">
        <pre><code class="language-vue"><template>
  <ZqLink type="primary" underline>带下划线</ZqLink>
  <ZqLink type="success" underline>带下划线</ZqLink>
  <ZqLink type="danger" underline>带下划线</ZqLink>
</template>

<script setup lang="ts">
import { ZqLink } from '@zhongqiang/vue-ui'
</script></code></pre>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">禁用状态</h2>
      <p class="section-desc">使用 disabled 属性禁用链接。</p>

      <div class="demo-box">
        <div class="demo-content">
          <ZqLink disabled>禁用链接</ZqLink>
          <ZqLink type="primary" disabled>禁用链接</ZqLink>
        </div>
      </div>

      <div class="code-block">
        <pre><code class="language-vue"><template>
  <ZqLink disabled>禁用链接</ZqLink>
  <ZqLink type="primary" disabled>禁用链接</ZqLink>
</template>

<script setup lang="ts">
import { ZqLink } from '@zhongqiang/vue-ui'
</script></code></pre>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">链接跳转</h2>
      <p class="section-desc">使用 href 属性设置跳转地址，target 属性设置打开方式。</p>

      <div class="demo-box">
        <div class="demo-content">
          <ZqLink type="primary" href="https://github.com" target="_blank">外部链接</ZqLink>
          <ZqLink type="success" href="https://www.npmjs.com">新窗口打开</ZqLink>
        </div>
      </div>

      <div class="code-block">
        <pre><code class="language-vue"><template>
  <ZqLink type="primary" href="https://github.com" target="_blank">外部链接</ZqLink>
  <ZqLink type="success" href="https://www.npmjs.com" target="_blank">新窗口打开</ZqLink>
</template>

<script setup lang="ts">
import { ZqLink } from '@zhongqiang/vue-ui'
</script></code></pre>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">Attributes</h2>
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
              <td>type</td>
              <td>类型</td>
              <td>string</td>
              <td>primary / success / warning / danger / info</td>
              <td>default</td>
            </tr>
            <tr>
              <td>underline</td>
              <td>是否下划线</td>
              <td>boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用</td>
              <td>boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>href</td>
              <td>原生 href 属性</td>
              <td>string</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>target</td>
              <td>原生 target 属性</td>
              <td>string</td>
              <td>_blank / _self / _parent / _top</td>
              <td>_self</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>图标类名</td>
              <td>string</td>
              <td>—</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ZqLink } from '@zhongqiang/vue-ui'
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
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
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
