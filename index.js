require('dotenv').config();
require('module-alias/register');

const PORT = process.env.PORT || 8080;
const db = require('@/config/db');
const app = require('@/app');

app.listen(PORT, (err) =>
    console.log(err ? err : `🚀 Server running on port ${PORT}`)
);