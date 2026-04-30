<template>
  <div class="doc-page">
    <h1 class="page-title">Grid 栅格</h1>
    <p class="page-desc">基于 24 栏栅格系统，通过基础的 24 栏划分，快速创建布局。</p>

    <div class="section">
      <h2 class="section-title">基础用法</h2>
      <p class="section-desc">使用 row 和 col 组件，并通过 span 属性来指定每一栏的比例。</p>

      <div class="demo-box">
        <div class="demo-content">
          <ZqRow class="demo-row">
            <ZqCol :span="24"><div class="demo-col">24</div></ZqCol>
          </ZqRow>
          <ZqRow class="demo-row">
            <ZqCol :span="12"><div class="demo-col">12</div></ZqCol>
            <ZqCol :span="12"><div class="demo-col demo-col-alt">12</div></ZqCol>
          </ZqRow>
          <ZqRow class="demo-row">
            <ZqCol :span="8"><div class="demo-col">8</div></ZqCol>
            <ZqCol :span="8"><div class="demo-col demo-col-alt">8</div></ZqCol>
            <ZqCol :span="8"><div class="demo-col">8</div></ZqCol>
          </ZqRow>
          <ZqRow class="demo-row">
            <ZqCol :span="6"><div class="demo-col">6</div></ZqCol>
            <ZqCol :span="6"><div class="demo-col demo-col-alt">6</div></ZqCol>
            <ZqCol :span="6"><div class="demo-col">6</div></ZqCol>
            <ZqCol :span="6"><div class="demo-col demo-col-alt">6</div></ZqCol>
          </ZqRow>
        </div>
      </div>

      <div class="code-block">
        <pre><code class="language-vue"><template>
  <ZqRow>
    <ZqCol :span="24"><div>24</div></ZqCol>
  </ZqRow>
  <ZqRow>
    <ZqCol :span="12"><div>12</div></ZqCol>
    <ZqCol :span="12"><div>12</div></ZqCol>
  </ZqRow>
  <ZqRow>
    <ZqCol :span="8"><div>8</div></ZqCol>
    <ZqCol :span="8"><div>8</div></ZqCol>
    <ZqCol :span="8"><div>8</div></ZqCol>
  </ZqRow>
  <ZqRow>
    <ZqCol :span="6"><div>6</div></ZqCol>
    <ZqCol :span="6"><div>6</div></ZqCol>
    <ZqCol :span="6"><div>6</div></ZqCol>
    <ZqCol :span="6"><div>6</div></ZqCol>
  </ZqRow>
</template>

<script setup lang="ts">
import { ZqRow, ZqCol } from '@zhongqiang/vue-ui'
</script></code></pre>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">分栏间隔</h2>
      <p class="section-desc">通过 gutter 属性设置分栏之间的间隔。</p>

      <div class="demo-box">
        <div class="demo-content">
          <ZqRow :gutter="20" class="demo-row">
            <ZqCol :span="6"><div class="demo-col">6</div></ZqCol>
            <ZqCol :span="6"><div class="demo-col demo-col-alt">6</div></ZqCol>
            <ZqCol :span="6"><div class="demo-col">6</div></ZqCol>
            <ZqCol :span="6"><div class="demo-col demo-col-alt">6</div></ZqCol>
          </ZqRow>
        </div>
      </div>

      <div class="code-block">
        <pre><code class="language-vue"><template>
  <ZqRow :gutter="20">
    <ZqCol :span="6"><div>6</div></ZqCol>
    <ZqCol :span="6"><div>6</div></ZqCol>
    <ZqCol :span="6"><div>6</div></ZqCol>
    <ZqCol :span="6"><div>6</div></ZqCol>
  </ZqRow>
</template>

<script setup lang="ts">
import { ZqRow, ZqCol } from '@zhongqiang/vue-ui'
</script></code></pre>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">分栏偏移</h2>
      <p class="section-desc">通过 offset 属性设置分栏的偏移量。</p>

      <div class="demo-box">
        <div class="demo-content">
          <ZqRow class="demo-row">
            <ZqCol :span="6"><div class="demo-col">6</div></ZqCol>
            <ZqCol :span="6" :offset="6"><div class="demo-col demo-col-alt">6 (offset 6)</div></ZqCol>
          </ZqRow>
          <ZqRow class="demo-row">
            <ZqCol :span="8"><div class="demo-col">8</div></ZqCol>
            <ZqCol :span="8" :offset="8"><div class="demo-col demo-col-alt">8 (offset 8)</div></ZqCol>
          </ZqRow>
          <ZqRow class="demo-row">
            <ZqCol :span="12" :offset="6"><div class="demo-col">12 (offset 6)</div></ZqCol>
          </ZqRow>
        </div>
      </div>

      <div class="code-block">
        <pre><code class="language-vue"><template>
  <ZqRow>
    <ZqCol :span="6"><div>6</div></ZqCol>
    <ZqCol :span="6" :offset="6"><div>6 (offset 6)</div></ZqCol>
  </ZqRow>
  <ZqRow>
    <ZqCol :span="8"><div>8</div></ZqCol>
    <ZqCol :span="8" :offset="8"><div>8 (offset 8)</div></ZqCol>
  </ZqRow>
  <ZqRow>
    <ZqCol :span="12" :offset="6"><div>12 (offset 6)</div></ZqCol>
  </ZqRow>
</template>

<script setup lang="ts">
import { ZqRow, ZqCol } from '@zhongqiang/vue-ui'
</script></code></pre>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">对齐方式</h2>
      <p class="section-desc">通过 justify 属性设置水平排列方式，align 属性设置垂直排列方式。</p>

      <div class="demo-box">
        <div class="demo-content">
          <p class="demo-label">justify: center</p>
          <ZqRow justify="center" class="demo-row demo-row-center">
            <ZqCol :span="4"><div class="demo-col">4</div></ZqCol>
            <ZqCol :span="4"><div class="demo-col demo-col-alt">4</div></ZqCol>
            <ZqCol :span="4"><div class="demo-col">4</div></ZqCol>
          </ZqRow>
          <p class="demo-label">justify: end</p>
          <ZqRow justify="end" class="demo-row demo-row-center">
            <ZqCol :span="4"><div class="demo-col">4</div></ZqCol>
            <ZqCol :span="4"><div class="demo-col demo-col-alt">4</div></ZqCol>
            <ZqCol :span="4"><div class="demo-col">4</div></ZqCol>
          </ZqRow>
          <p class="demo-label">justify: space-around</p>
          <ZqRow justify="space-around" class="demo-row demo-row-center">
            <ZqCol :span="4"><div class="demo-col">4</div></ZqCol>
            <ZqCol :span="4"><div class="demo-col demo-col-alt">4</div></ZqCol>
            <ZqCol :span="4"><div class="demo-col">4</div></ZqCol>
          </ZqRow>
          <p class="demo-label">justify: space-between</p>
          <ZqRow justify="space-between" class="demo-row demo-row-center">
            <ZqCol :span="4"><div class="demo-col">4</div></ZqCol>
            <ZqCol :span="4"><div class="demo-col demo-col-alt">4</div></ZqCol>
            <ZqCol :span="4"><div class="demo-col">4</div></ZqCol>
          </ZqRow>
        </div>
      </div>

      <div class="code-block">
        <pre><code class="language-vue"><template>
  <ZqRow justify="center">
    <ZqCol :span="4"><div>4</div></ZqCol>
    <ZqCol :span="4"><div>4</div></ZqCol>
    <ZqCol :span="4"><div>4</div></ZqCol>
  </ZqRow>
  <ZqRow justify="end">
    <ZqCol :span="4"><div>4</div></ZqCol>
    <ZqCol :span="4"><div>4</div></ZqCol>
    <ZqCol :span="4"><div>4</div></ZqCol>
  </ZqRow>
  <ZqRow justify="space-around">
    <ZqCol :span="4"><div>4</div></ZqCol>
    <ZqCol :span="4"><div>4</div></ZqCol>
    <ZqCol :span="4"><div>4</div></ZqCol>
  </ZqRow>
  <ZqRow justify="space-between">
    <ZqCol :span="4"><div>4</div></ZqCol>
    <ZqCol :span="4"><div>4</div></ZqCol>
    <ZqCol :span="4"><div>4</div></ZqCol>
  </ZqRow>
</template>

<script setup lang="ts">
import { ZqRow, ZqCol } from '@zhongqiang/vue-ui'
</script></code></pre>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">响应式布局</h2>
      <p class="section-desc">通过 xs, sm, md, lg, xl 属性设置响应式断点。</p>

      <div class="demo-box">
        <div class="demo-content">
          <ZqRow class="demo-row">
            <ZqCol :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
              <div class="demo-col">响应式</div>
            </ZqCol>
            <ZqCol :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
              <div class="demo-col demo-col-alt">响应式</div>
            </ZqCol>
            <ZqCol :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
              <div class="demo-col">响应式</div>
            </ZqCol>
            <ZqCol :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
              <div class="demo-col demo-col-alt">响应式</div>
            </ZqCol>
          </ZqRow>
        </div>
      </div>

      <div class="code-block">
        <pre><code class="language-vue"><template>
  <ZqRow>
    <ZqCol :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
      <div>响应式</div>
    </ZqCol>
    <ZqCol :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
      <div>响应式</div>
    </ZqCol>
    <ZqCol :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
      <div>响应式</div>
    </ZqCol>
    <ZqCol :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
      <div>响应式</div>
    </ZqCol>
  </ZqRow>
</template>

<script setup lang="ts">
import { ZqRow, ZqCol } from '@zhongqiang/vue-ui'
</script></code></pre>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">Row Attributes</h2>
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
              <td>gutter</td>
              <td>栅格间隔</td>
              <td>number / array / object</td>
              <td>—</td>
              <td>0</td>
            </tr>
            <tr>
              <td>justify</td>
              <td>flex 布局下的水平排列方式</td>
              <td>string</td>
              <td>start / end / center / space-around / space-between</td>
              <td>start</td>
            </tr>
            <tr>
              <td>align</td>
              <td>flex 布局下的垂直排列方式</td>
              <td>string</td>
              <td>top / middle / bottom</td>
              <td>top</td>
            </tr>
            <tr>
              <td>tag</td>
              <td>自定义元素标签</td>
              <td>string</td>
              <td>—</td>
              <td>div</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">Col Attributes</h2>
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
              <td>span</td>
              <td>栅格占据的列数</td>
              <td>number</td>
              <td>—</td>
              <td>24</td>
            </tr>
            <tr>
              <td>offset</td>
              <td>栅格左侧的间隔格数</td>
              <td>number</td>
              <td>—</td>
              <td>0</td>
            </tr>
            <tr>
              <td>push</td>
              <td>栅格向右移动格数</td>
              <td>number</td>
              <td>—</td>
              <td>0</td>
            </tr>
            <tr>
              <td>pull</td>
              <td>栅格向左移动格数</td>
              <td>number</td>
              <td>—</td>
              <td>0</td>
            </tr>
            <tr>
              <td>xs</td>
              <td>< 768px 响应式栅格数或者栅格属性对象</td>
              <td>number / object</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>sm</td>
              <td>>= 768px 响应式栅格数或者栅格属性对象</td>
              <td>number / object</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>md</td>
              <td>>= 992px 响应式栅格数或者栅格属性对象</td>
              <td>number / object</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>lg</td>
              <td>>= 1200px 响应式栅格数或者栅格属性对象</td>
              <td>number / object</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>xl</td>
              <td>>= 1920px 响应式栅格数或者栅格属性对象</td>
              <td>number / object</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>tag</td>
              <td>自定义元素标签</td>
              <td>string</td>
              <td>—</td>
              <td>div</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ZqRow, ZqCol } from '@zhongqiang/vue-ui'
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

.demo-row {
  margin-bottom: 8px;
}

.demo-row-center {
  background-color: #f5f7fa;
  padding: 8px;
  border-radius: 4px;
}

.demo-label {
  font-size: 12px;
  color: var(--text-secondary);
  margin: 16px 0 8px;
}

.demo-col {
  background-color: #409eff;
  color: #fff;
  text-align: center;
  padding: 12px 0;
  border-radius: 4px;
  font-size: 14px;
}

.demo-col-alt {
  background-color: #67c23a;
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
