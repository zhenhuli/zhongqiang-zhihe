<template>
  <div class="app">
    <header class="app-header">
      <h1>Vue 3 示例应用</h1>
      <p class="subtitle">众强致合 Monorepo</p>
    </header>

    <main class="app-main">
      <section class="demo-section">
        <h2>共享工具库测试</h2>
        <div class="demo-grid">
          <div class="demo-item">
            <span class="label">capitalize:</span>
            <span class="value">{{ capitalizeDemo }}</span>
          </div>
          <div class="demo-item">
            <span class="label">camelCase:</span>
            <span class="value">{{ camelCaseDemo }}</span>
          </div>
          <div class="demo-item">
            <span class="label">kebabCase:</span>
            <span class="value">{{ kebabCaseDemo }}</span>
          </div>
          <div class="demo-item">
            <span class="label">formatDate:</span>
            <span class="value">{{ formatDateDemo }}</span>
          </div>
          <div class="demo-item">
            <span class="label">isToday:</span>
            <span class="value">{{ isTodayDemo ? '是' : '否' }}</span>
          </div>
        </div>
      </section>

      <section class="counter-section">
        <h2>计数器示例</h2>
        <div class="counter">
          <button @click="decrement" class="counter-btn">-</button>
          <span class="count">{{ count }}</span>
          <button @click="increment" class="counter-btn">+</button>
        </div>
      </section>
    </main>

    <footer class="app-footer">
      <p>使用 Vue 3 + Vite + TypeScript 构建</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { capitalize, camelCase, kebabCase, formatDate, isToday } from '@zhongqiang/shared-utils';

const count = ref(0);

const capitalizeDemo = computed(() => capitalize('hello world'));
const camelCaseDemo = computed(() => camelCase('hello-world'));
const kebabCaseDemo = computed(() => kebabCase('HelloWorld'));
const formatDateDemo = computed(() => formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss'));
const isTodayDemo = computed(() => isToday(new Date()));

function increment() {
  count.value++;
}

function decrement() {
  count.value--;
}
</script>
