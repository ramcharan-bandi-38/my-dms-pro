const express = require('express');
const path = require('path');

const app = express();

// 🌐 DYNAMIC PORT RULE: Render uses its own system variable, or defaults to 3000 locally
const PORT = process.env.PORT || 3000;

// Serve your HTML, CSS, and client JavaScript files automatically from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Simple API status checkpoint route
app.get('/api/status', (req, res) => {
    res.json({ message: "Backend server is running perfectly!" });
});

// Start listening for incoming traffic connections
app.listen(PORT, () => {
    console.log(`===================================================`);
    console.log(`🚀 DMS SERVER RUNNING LIVE AT: http://localhost:${PORT}`);
    console.log(`===================================================`);
});
