const express = require('express');
const router = express.Router();

// Project Model
const Project = require('../../models/Project.js');

// @route GET api/projects
// @desc GET All Projects
// @access Public

router.get('/', (req, res) => {
	Project.find()
		.sort({ name: 1 })
		.then(projects => res.json(projects))
});

module.exports = router;
