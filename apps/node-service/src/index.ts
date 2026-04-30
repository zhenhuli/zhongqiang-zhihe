import express, { type Request, type Response } from 'express';
import { formatDate, capitalize } from '@zhongqiang/shared-utils';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: '欢迎使用众强致合 Node.js 服务',
    timestamp: formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss'),
    version: '1.0.0',
  });
});

app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss'),
    uptime: process.uptime(),
  });
});

app.post('/api/format', (req: Request, res: Response) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'text 参数是必需的' });
  }

  res.json({
    original: text,
    capitalized: capitalize(text),
    timestamp: formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss'),
  });
});

app.listen(PORT, () => {
  console.log(`🚀 服务已启动: http://localhost:${PORT}`);
  console.log(`⏰ 启动时间: ${formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss')}`);
});

export default app;
