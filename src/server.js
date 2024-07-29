import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// پروکسی برای درخواست‌های API
app.use(
  '/api',
  createProxyMiddleware({
    target: 'https://api.digikala.com',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',
    },
  })
);

// سرو کردن فایل‌های استاتیک Vite
app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
