"use strict";

const DbService = require("moleculer-db");
const MongooseAdapter = require("moleculer-db-adapter-mongoose");
const mongoose = require("mongoose");

// const { MoleculerError } = require("moleculer").Errors;

class CustomAdapter extends MongooseAdapter {
	updateById(_id, update) {
		console.log('heyheyhyeeee ', _id);
		return super.updateById(_id, update);
	}
};

module.exports = {
	name: "events",
	mixins: [DbService],
	settings: {
		rest: "events/"
	},
	adapter: new CustomAdapter(process.env.MONGO_URI),
	modelName: "Event",
	schema: mongoose.Schema({
		title: { type: String, minlength: 10 },
		content: { type: String },
		when: { type: Date }
	}, {
		timestamps: true
	}),
	actions: {
		setAttendee(ctx) {
			console.log('heeeellloooooooooooooo')
		}
	}
};
