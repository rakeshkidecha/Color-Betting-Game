const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const allowedOrigins = process.env.CORS_ORIGINS?.split(',') || '*';

app.use(cookieParser());
app.use(cors({
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        } else {
            return callback(new Error('❌ Not allowed by CORS'));
        }
    },
    credentials: true
}));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'..','public')));


module.exports = app;