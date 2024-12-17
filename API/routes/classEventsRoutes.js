const express = require("express");
const classEventsController = require("../controllers/classEventsController");

const router = express.Router();

router.post("/", classEventsController.create); // Create a new event
router.get("/", classEventsController.findAll); // Get all events
router.get("/:id", classEventsController.findOne); // Get a single event by ID
router.put("/:id", classEventsController.update); // Update an event by ID
router.delete("/:id", classEventsController.delete); // Delete an event by ID

router.post("/copy/:id", classEventsController.copy); // Copy an event by ID

module.exports = router;
