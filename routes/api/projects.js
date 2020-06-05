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

// @route POST api/projects
// @desc CREATE a Project
// @access Public

router.post('/', (req, res) => {
	const newProject = new Project({
		name: req.body.name,
		languages: req.body.languages,
		website: req.body.website,
		github: req.body.github,
		img: req.body.img,
		description: req.body.description
	});

	newProject.save()
		.then(project => res.json(project));
});

// @route DELETE api/projects/:id
// @desc DELETE a Project
// @access Public

router.delete('/:id', (req, res) => {
	Project.findById(req.params.id)
		.then(project => project.remove().then(() => res.json({ success: true })))
		.catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
