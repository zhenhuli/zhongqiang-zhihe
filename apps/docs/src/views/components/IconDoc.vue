<template>
  <div class="doc-page">
    <h1 class="page-title">Icon 图标</h1>
    <p class="page-desc">提供了一套常用的图标集合。</p>

    <div class="section">
      <h2 class="section-title">基本用法</h2>
      <p class="section-desc">通过 name 属性指定图标名称。</p>

      <div class="demo-box">
        <div class="demo-content">
          <ZqIcon name="search" />
          <ZqIcon name="edit" />
          <ZqIcon name="delete" />
          <ZqIcon name="plus" />
          <ZqIcon name="minus" />
        </div>
      </div>

      <div class="code-block">
        <pre><code class="language-vue"><template>
  <ZqIcon name="search" />
  <ZqIcon name="edit" />
  <ZqIcon name="delete" />
  <ZqIcon name="plus" />
  <ZqIcon name="minus" />
</template>

<script setup lang="ts">
import { ZqIcon } from '@zhongqiang/vue-ui'
</script></code></pre>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">图标大小</h2>
      <p class="section-desc">通过 size 属性设置图标大小，支持数字（像素）和字符串。</p>

      <div class="demo-box">
        <div class="demo-content">
          <ZqIcon name="search" :size="16" />
          <ZqIcon name="search" :size="20" />
          <ZqIcon name="search" :size="24" />
          <ZqIcon name="search" :size="32" />
          <ZqIcon name="search" size="2rem" />
        </div>
      </div>

      <div class="code-block">
        <pre><code class="language-vue"><template>
  <ZqIcon name="search" :size="16" />
  <ZqIcon name="search" :size="20" />
  <ZqIcon name="search" :size="24" />
  <ZqIcon name="search" :size="32" />
  <ZqIcon name="search" size="2rem" />
</template>

<script setup lang="ts">
import { ZqIcon } from '@zhongqiang/vue-ui'
</script></code></pre>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">图标颜色</h2>
      <p class="section-desc">通过 color 属性设置图标颜色。</p>

      <div class="demo-box">
        <div class="demo-content">
          <ZqIcon name="search" color="#409eff" />
          <ZqIcon name="search" color="#67c23a" />
          <ZqIcon name="search" color="#e6a23c" />
          <ZqIcon name="search" color="#f56c6c" />
          <ZqIcon name="search" color="#909399" />
        </div>
      </div>

      <div class="code-block">
        <pre><code class="language-vue"><template>
  <ZqIcon name="search" color="#409eff" />
  <ZqIcon name="search" color="#67c23a" />
  <ZqIcon name="search" color="#e6a23c" />
  <ZqIcon name="search" color="#f56c6c" />
  <ZqIcon name="search" color="#909399" />
</template>

<script setup lang="ts">
import { ZqIcon } from '@zhongqiang/vue-ui'
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
              <td>name</td>
              <td>图标名称</td>
              <td>string</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>size</td>
              <td>图标大小</td>
              <td>string / number</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>color</td>
              <td>图标颜色</td>
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
import { ZqIcon } from '@zhongqiang/vue-ui'
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
  font-size: 20px;
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
