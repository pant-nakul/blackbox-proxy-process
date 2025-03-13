const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();
const app = express();
const PORT = 4000;
const TARGET_URL = process.env.CUSTOM_URL;
const cors = require('cors');

console.log(TARGET_URL);
app.use(cors({
    origin: '*', // Change * to specific domain for security
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.options('*', cors());

// Proxy middleware
app.use('/', createProxyMiddleware({
    target: TARGET_URL,
    changeOrigin: true,
    secure: false,
    pathRewrite: {
        '^/': '/',
    },
}));

app.listen(PORT, () => {
    console.log(`Reverse proxy running on http://localhost:${PORT}`);
})