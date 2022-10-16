require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI).then(() => console.log('Connected to DB')).catch(console.error);

app.listen(3001, ()=> console.log('server started on port 3001'));