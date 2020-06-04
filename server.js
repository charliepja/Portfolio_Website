require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const projects = require('./routes/api/projects.js');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB config
const db = process.env.ATLAS_URI;

// Connects to DB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('MongoDB Connected!'))
	.catch(err => console.log(err));

// Use API Routes
app.use('/api/projects', projects);

// Port to connect too
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
