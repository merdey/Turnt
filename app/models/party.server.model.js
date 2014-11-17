'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Party Schema
 */
var PartySchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	event_date: {
		type: Date,
		default: Date.now
	},
	event_name: {
		type: String,
		default: '',
		trim: true,
		required: 'Event name cannot be blank'
	},
	description: {
		type: String,
		default: '',
		trim: true
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	cost: {
		type: Number,
		default: 0
	}
});

mongoose.model('Party', PartySchema);
