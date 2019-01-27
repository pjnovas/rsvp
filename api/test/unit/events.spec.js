"use strict";

const { ServiceBroker } = require("moleculer");
const { ValidationError } = require("moleculer").Errors;
const TestService = require("../../services/events.service");

describe("Test 'events' service", () => {
	let broker = new ServiceBroker();
	broker.createService(TestService);

	beforeAll(() => broker.start());
	afterAll(() => broker.stop());

	describe("Test 'events.create' action", () => {

		it("should return with 'Hello Moleculer'", () => {
			expect(broker.call("events.hello")).resolves.toBe("Hello Moleculer");
		});

	});

});

