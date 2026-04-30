<template>
  <div class="doc-page">
    <h1 class="page-title">Button 按钮</h1>
    <p class="page-desc">常用的操作按钮。</p>

    <div class="section">
      <h2 class="section-title">基础用法</h2>
      <p class="section-desc">使用 type 属性来定义按钮的样式。</p>

      <div class="demo-box">
        <div class="demo-content">
          <ZqButton>默认按钮</ZqButton>
          <ZqButton type="primary">主要按钮</ZqButton>
          <ZqButton type="success">成功按钮</ZqButton>
          <ZqButton type="warning">警告按钮</ZqButton>
          <ZqButton type="danger">危险按钮</ZqButton>
          <ZqButton type="info">信息按钮</ZqButton>
          <ZqButton type="text">文字按钮</ZqButton>
        </div>
      </div>

      <div class="code-block">
        <pre><code class="language-vue"><template>
  <ZqButton>默认按钮</ZqButton>
  <ZqButton type="primary">主要按钮</ZqButton>
  <ZqButton type="success">成功按钮</ZqButton>
  <ZqButton type="warning">警告按钮</ZqButton>
  <ZqButton type="danger">危险按钮</ZqButton>
  <ZqButton type="info">信息按钮</ZqButton>
  <ZqButton type="text">文字按钮</ZqButton>
</template>

<script setup lang="ts">
import { ZqButton } from '@zhongqiang/vue-ui'
</script></code></pre>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">朴素按钮</h2>
      <p class="section-desc">使用 plain 属性设置朴素按钮。</p>

      <div class="demo-box">
        <div class="demo-content">
          <ZqButton plain>默认按钮</ZqButton>
          <ZqButton type="primary" plain>主要按钮</ZqButton>
          <ZqButton type="success" plain>成功按钮</ZqButton>
          <ZqButton type="warning" plain>警告按钮</ZqButton>
          <ZqButton type="danger" plain>危险按钮</ZqButton>
          <ZqButton type="info" plain>信息按钮</ZqButton>
        </div>
      </div>

      <div class="code-block">
        <pre><code class="language-vue"><template>
  <ZqButton plain>默认按钮</ZqButton>
  <ZqButton type="primary" plain>主要按钮</ZqButton>
  <ZqButton type="success" plain>成功按钮</ZqButton>
  <ZqButton type="warning" plain>警告按钮</ZqButton>
  <ZqButton type="danger" plain>危险按钮</ZqButton>
  <ZqButton type="info" plain>信息按钮</ZqButton>
</template>

<script setup lang="ts">
import { ZqButton } from '@zhongqiang/vue-ui'
</script></code></pre>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">圆角按钮</h2>
      <p class="section-desc">使用 round 属性设置圆角按钮。</p>

      <div class="demo-box">
        <div class="demo-content">
          <ZqButton round>默认按钮</ZqButton>
          <ZqButton type="primary" round>主要按钮</ZqButton>
          <ZqButton type="success" round>成功按钮</ZqButton>
          <ZqButton type="warning" round>警告按钮</ZqButton>
          <ZqButton type="danger" round>危险按钮</ZqButton>
        </div>
      </div>

      <div class="code-block">
        <pre><code class="language-vue"><template>
  <ZqButton round>默认按钮</ZqButton>
  <ZqButton type="primary" round>主要按钮</ZqButton>
  <ZqButton type="success" round>成功按钮</ZqButton>
  <ZqButton type="warning" round>警告按钮</ZqButton>
  <ZqButton type="danger" round>危险按钮</ZqButton>
</template>

<script setup lang="ts">
import { ZqButton } from '@zhongqiang/vue-ui'
</script></code></pre>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">圆形按钮</h2>
      <p class="section-desc">使用 circle 属性设置圆形按钮。</p>

      <div class="demo-box">
        <div class="demo-content">
          <ZqButton circle>O</ZqButton>
          <ZqButton type="primary" circle>P</ZqButton>
          <ZqButton type="success" circle>S</ZqButton>
          <ZqButton type="warning" circle>W</ZqButton>
          <ZqButton type="danger" circle>D</ZqButton>
        </div>
      </div>

      <div class="code-block">
        <pre><code class="language-vue"><template>
  <ZqButton circle>O</ZqButton>
  <ZqButton type="primary" circle>P</ZqButton>
  <ZqButton type="success" circle>S</ZqButton>
  <ZqButton type="warning" circle>W</ZqButton>
  <ZqButton type="danger" circle>D</ZqButton>
</template>

<script setup lang="ts">
import { ZqButton } from '@zhongqiang/vue-ui'
</script></code></pre>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">按钮尺寸</h2>
      <p class="section-desc">使用 size 属性设置按钮尺寸，默认为 default。</p>

      <div class="demo-box">
        <div class="demo-content">
          <ZqButton size="large">大型按钮</ZqButton>
          <ZqButton size="default">默认按钮</ZqButton>
          <ZqButton size="small">小型按钮</ZqButton>
        </div>
      </div>

      <div class="code-block">
        <pre><code class="language-vue"><template>
  <ZqButton size="large">大型按钮</ZqButton>
  <ZqButton size="default">默认按钮</ZqButton>
  <ZqButton size="small">小型按钮</ZqButton>
</template>

<script setup lang="ts">
import { ZqButton } from '@zhongqiang/vue-ui'
</script></code></pre>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">禁用状态</h2>
      <p class="section-desc">使用 disabled 属性禁用按钮。</p>

      <div class="demo-box">
        <div class="demo-content">
          <ZqButton disabled>禁用按钮</ZqButton>
          <ZqButton type="primary" disabled>禁用按钮</ZqButton>
          <ZqButton type="text" disabled>禁用文字按钮</ZqButton>
        </div>
      </div>

      <div class="code-block">
        <pre><code class="language-vue"><template>
  <ZqButton disabled>禁用按钮</ZqButton>
  <ZqButton type="primary" disabled>禁用按钮</ZqButton>
  <ZqButton type="text" disabled>禁用文字按钮</ZqButton>
</template>

<script setup lang="ts">
import { ZqButton } from '@zhongqiang/vue-ui'
</script></code></pre>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">加载状态</h2>
      <p class="section-desc">使用 loading 属性显示加载状态。</p>

      <div class="demo-box">
        <div class="demo-content">
          <ZqButton type="primary" loading>加载中</ZqButton>
          <ZqButton type="success" loading>加载中</ZqButton>
        </div>
      </div>

      <div class="code-block">
        <pre><code class="language-vue"><template>
  <ZqButton type="primary" loading>加载中</ZqButton>
  <ZqButton type="success" loading>加载中</ZqButton>
</template>

<script setup lang="ts">
import { ZqButton } from '@zhongqiang/vue-ui'
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
              <td>按钮类型</td>
              <td>string</td>
              <td>primary / success / warning / danger / info / text</td>
              <td>default</td>
            </tr>
            <tr>
              <td>size</td>
              <td>按钮尺寸</td>
              <td>string</td>
              <td>large / default / small</td>
              <td>default</td>
            </tr>
            <tr>
              <td>plain</td>
              <td>是否朴素按钮</td>
              <td>boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>round</td>
              <td>是否圆角按钮</td>
              <td>boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>circle</td>
              <td>是否圆形按钮</td>
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
              <td>loading</td>
              <td>是否加载中</td>
              <td>boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>图标类名</td>
              <td>string</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>autofocus</td>
              <td>是否默认聚焦</td>
              <td>boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>native-type</td>
              <td>原生 type 属性</td>
              <td>string</td>
              <td>button / submit / reset</td>
              <td>button</td>
            </tr>
          </tbody>
        </table>
      </div>
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
  gap: 12px;
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
