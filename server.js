const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
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

app.listen(PORT, () => {
    console.log(`Reverse proxy running on http://localhost:${PORT}`);
})