import React, { useState, useMemo } from 'react';
import { capitalize, camelCase, kebabCase, formatDate, isToday } from '@zhongqiang/shared-utils';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const capitalizeDemo = useMemo(() => capitalize('hello world'), []);
  const camelCaseDemo = useMemo(() => camelCase('hello-world'), []);
  const kebabCaseDemo = useMemo(() => kebabCase('HelloWorld'), []);
  const formatDateDemo = useMemo(() => formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss'), []);
  const isTodayDemo = useMemo(() => isToday(new Date()), []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>React 示例应用</h1>
        <p className="subtitle">众强致合 Monorepo</p>
      </header>

      <main className="app-main">
        <section className="demo-section">
          <h2>共享工具库测试</h2>
          <div className="demo-grid">
            <div className="demo-item">
              <span className="label">capitalize:</span>
              <span className="value">{capitalizeDemo}</span>
            </div>
            <div className="demo-item">
              <span className="label">camelCase:</span>
              <span className="value">{camelCaseDemo}</span>
            </div>
            <div className="demo-item">
              <span className="label">kebabCase:</span>
              <span className="value">{kebabCaseDemo}</span>
            </div>
            <div className="demo-item">
              <span className="label">formatDate:</span>
              <span className="value">{formatDateDemo}</span>
            </div>
            <div className="demo-item">
              <span className="label">isToday:</span>
              <span className="value">{isTodayDemo ? '是' : '否'}</span>
            </div>
          </div>
        </section>

        <section className="counter-section">
          <h2>计数器示例</h2>
          <div className="counter">
            <button onClick={() => setCount(c => c - 1)} className="counter-btn">
              -
            </button>
            <span className="count">{count}</span>
            <button onClick={() => setCount(c => c + 1)} className="counter-btn">
              +
            </button>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>使用 React + Vite + TypeScript 构建</p>
      </footer>
    </div>
  );
};

export default App;
