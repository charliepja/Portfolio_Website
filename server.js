require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
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

// Server static assests if production
if(process.env.NODE_ENV === 'production') {
	// Set Static Folder
	app.use(express.static('client/build'));
}

app.get('/*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
});

// Port to connect too
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
