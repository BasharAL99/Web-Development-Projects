const Contract = require('../Models/Contract');

// Create a new contract
exports.createContract = async (req, res) => {
    try {
        const newContract = await Contract.create(req.body);
        res.status(200).json(newContract);
    } catch (error) {
        handleError(res, error);
    }
};

// Get all contracts
exports.getAllContracts = async (req, res) => {
    try {
        const contracts = await Contract.find({});
        res.status(200).json(contracts);
    } catch (error) {
        handleError(res, error);
    }
};

// Get a specific contract by ID
exports.getContractById = async (req, res) => {
    try {
        const { id } = req.params;
        const contract = await Contract.findById(id);
        if (!contract) {
            return res.status(404).json({ message: 'Contract not found' });
        }
        res.status(200).json(contract);
    } catch (error) {
        handleError(res, error);
    }
};

// Update a contract by ID
exports.updateContractById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedContract = await Contract.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedContract) {
            return res.status(404).json({ message: 'Contract not found' });
        }
        res.status(200).json({ message: 'Contract successfully updated', updatedContract });
    } catch (error) {
        handleError(res, error);
    }
};

// Delete a contract by ID
exports.deleteContractById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedContract = await Contract.findByIdAndDelete(id);
        if (!deletedContract) {
            return res.status(404).json({ message: 'Contract not found' });
        }
        res.status(200).json({ message: 'Contract successfully deleted' });
    } catch (error) {
        handleError(res, error);
    }
};

// Error handling function
const handleError = (res, error) => {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
};
