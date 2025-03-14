const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 1000;
const TARGET_URL = process.env.CUSTOM_URL;
const cors = require('cors');

console.log(TARGET_URL);
console.log(TARGET_URL)

// Proxy middleware
app.use('/', createProxyMiddleware({
    target: TARGET_URL,
    changeOrigin: true,
    secure: false,
    pathRewrite: {
        '^/': '/',
    },
}));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Reverse Proxy Server listening on port ${port}`);
});