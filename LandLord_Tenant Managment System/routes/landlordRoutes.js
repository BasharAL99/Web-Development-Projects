// routes/landlordRoutes.js
const express = require('express');
const router = express.Router();
const landlordController = require('../Controller/LandlordController');//importing the method from the controllers 

// Create a new landlord
router.post('/', landlordController.createLandlord);

// Get all landlords
router.get('/', landlordController.getAllLandlords);

// Get a specific landlord by ID
router.get('/:id', landlordController.getLandlordById);

// Update a landlord by ID
router.put('/:id', landlordController.updateLandlordById);

// Delete a landlord by ID
router.delete('/:id', landlordController.deleteLandlordById);

module.exports = router;//exporting
