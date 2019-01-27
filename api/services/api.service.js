"use strict";

const ApiGateway = require("moleculer-web");

module.exports = {
	name: "api",
	mixins: [ApiGateway],

	// More info about settings: https://moleculer.services/docs/0.13/moleculer-web.html
	settings: {
		port: process.env.PORT || 3000,

		routes: [{
			path: "/api",
			whitelist: [
				// Access to any actions in all services under "/api" URL
				"**"
			],
			aliases: {
				// "GET events": "events.find",
				"GET events/:id": "events.get",
				"POST events": "events.create",
				"PUT events/:id": "events.update",
				"DELETE events/:id": "events.remove",

				"POST events/:id/attendee": "events.setAttendee",
			},

			// Disable direct URLs (`/events/find` or `/events.find`)
			mappingPolicy: "restrict"
		}],

		// Serve assets from "public" folder
		assets: {
			folder: "public"
		}
	}
};
