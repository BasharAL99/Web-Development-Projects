// routes/tenantRoutes.js
const express = require('express');
const router = express.Router();
const tenantController = require('../Controller/TenantController');

// Create a new tenant
router.post('/', tenantController.createTenant);

// Get all tenants
router.get('/', tenantController.getAllTenants);

// Get a specific tenant by ID
router.get('/:id', tenantController.getTenantById);

// Update a tenant by ID
router.put('/:id', tenantController.updateTenantById);

// Delete a tenant by ID
router.delete('/:id', tenantController.deleteTenantById);

module.exports = router;//export the router
