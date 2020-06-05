const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Mongoose Scheme

const ProjectSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	languages: {
		type: Array,
		required: true
	},
	website: {
		type: String,
		required: true
	},
	github: {
		type: String,
		required: true
	},
	img: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	}
});

module.exports = Project = mongoose.model('project', ProjectSchema);
