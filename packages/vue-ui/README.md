# @zhongqiang/vue-ui

基于 Vue 3 的企业级 UI 组件库，风格参考 Element UI。

## 特性

- 🎨 基于 Vue 3 Composition API
- 🔧 完整的 TypeScript 支持
- 📦 开箱即用的高质量组件
- 🎯 完善的单元测试覆盖
- 📖 详细的文档和示例

## 安装

```bash
npm install @zhongqiang/vue-ui
```

## 使用

### 全局注册

```typescript
import { createApp } from 'vue'
import ZhongQiangUI from '@zhongqiang/vue-ui'
import '@zhongqiang/vue-ui/dist/style.css'

const app = createApp(App)
app.use(ZhongQiangUI)
app.mount('#app')
```

### 按需引入

```typescript
import { ZqButton, ZqLink } from '@zhongqiang/vue-ui'
import '@zhongqiang/vue-ui/dist/style.css'

const app = createApp(App)
app.component('ZqButton', ZqButton)
app.component('ZqLink', ZqLink)
app.mount('#app')
```

### 在组件中使用

```vue
<template>
  <div>
    <ZqButton type="primary">主要按钮</ZqButton>
    <ZqLink type="primary">链接</ZqLink>
  </div>
</template>

<script setup lang="ts">
import { ZqButton, ZqLink } from '@zhongqiang/vue-ui'
</script>
```

## 组件列表

| 组件名 | 说明 |
|--------|------|
| ZqIcon | 图标组件 |
| ZqButton | 按钮组件 |
| ZqLink | 链接组件 |
| ZqContainer | 布局容器 |
| ZqHeader | 顶部栏 |
| ZqAside | 侧边栏 |
| ZqMain | 主内容区 |
| ZqFooter | 底部栏 |
| ZqRow | 栅格行 |
| ZqCol | 栅格列 |

## 文档

访问 [ZhongQiang UI 文档网站](http://localhost:3000) 查看完整的组件文档和使用示例。

文档网站包含：
- **开发指南**：安装、快速上手
- **组件文档**：所有组件的用法、属性和示例

## 开发

```bash
# 安装依赖
npm install

# 构建
npm run build

# 运行测试
npm run test
```

## License

MIT
