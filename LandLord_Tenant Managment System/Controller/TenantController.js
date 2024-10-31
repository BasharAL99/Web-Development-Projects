const Tenant = require('../Models/Tenant');

// Create a new tenant
exports.createTenant = async (req, res) => {
    try {
        const newTenant = await Tenant.create(req.body);
        res.status(200).json(newTenant);
    } catch (error) {
        handleError(res, error);
    }
};

// Get all tenants
exports.getAllTenants = async (req, res) => {
    try {
        const tenants = await Tenant.find({});
        res.status(200).json(tenants);
    } catch (error) {
        handleError(res, error);
    }
};

// Get a specific tenant by ID
exports.getTenantById = async (req, res) => {
    try {
        const { id } = req.params;
        const tenant = await Tenant.findById(id);
        if (!tenant) {
            return res.status(404).json({ message: 'Tenant not found' });
        }
        res.status(200).json(tenant);
    } catch (error) {
        handleError(res, error);
    }
};

// Update a tenant by ID
exports.updateTenantById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTenant = await Tenant.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedTenant) {
            return res.status(404).json({ message: 'Tenant not found' });
        }
        res.status(200).json({ message: 'Tenant successfully updated', updatedTenant });
    } catch (error) {
        handleError(res, error);
    }
};

// Delete a tenant by ID
exports.deleteTenantById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTenant = await Tenant.findByIdAndDelete(id);
        if (!deletedTenant) {
            return res.status(404).json({ message: 'Tenant not found' });
        }
        res.status(200).json({ message: 'Tenant successfully deleted' });
    } catch (error) {
        handleError(res, error);
    }
};

// Error handling function
const handleError = (res, error) => {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
};
