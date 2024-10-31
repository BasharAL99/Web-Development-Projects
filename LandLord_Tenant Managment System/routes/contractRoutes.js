// routes/contractRoutes.js
const express = require('express');
const router = express.Router();
const contractController = require('../Controller/ContractController');//importing the method from the controller

// Create a new contract
router.post('/', contractController.createContract);

// Get all contracts
router.get('/', contractController.getAllContracts);

// Get a specific contract by ID
router.get('/:id', contractController.getContractById);

// Update a contract by ID
router.put('/:id', contractController.updateContractById);

// Delete a contract by ID
router.delete('/:id', contractController.deleteContractById);


module.exports = router;//exporting
