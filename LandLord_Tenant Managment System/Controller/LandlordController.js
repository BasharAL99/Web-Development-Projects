const Landlord = require('../Models/Landlord');

// Create a new landlord
exports.createLandlord = async (req, res) => {
    try {
        const newLandlord = await Landlord.create(req.body);
        res.status(200).json(newLandlord);
    } catch (error) {
        handleError(res, error);
    }
};

// Get all landlords
exports.getAllLandlords = async (req, res) => {
    try {
        const landlords = await Landlord.find({});
        res.status(200).json(landlords);
    } catch (error) {
        handleError(res, error);
    }
};

// Get a specific landlord by ID
exports.getLandlordById = async (req, res) => {
    try {
        const { id } = req.params;
        const landlord = await Landlord.findById(id);
        if (!landlord) {
            return res.status(404).json({ message: 'Landlord not found' });
        }
        res.status(200).json(landlord);
    } catch (error) {
        handleError(res, error);
    }
};

// Update a landlord by ID
exports.updateLandlordById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedLandlord = await Landlord.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedLandlord) {
            return res.status(404).json({ message: 'Landlord not found' });
        }
        res.status(200).json({ message: 'Landlord successfully updated', updatedLandlord });
    } catch (error) {
        handleError(res, error);
    }
};

// Delete a landlord by ID
exports.deleteLandlordById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedLandlord = await Landlord.findByIdAndDelete(id);
        if (!deletedLandlord) {
            return res.status(404).json({ message: 'Landlord not found' });
        }
        res.status(200).json({ message: 'Landlord successfully deleted' });
    } catch (error) {
        handleError(res, error);
    }
};


// Error handling function
const handleError = (res, error) => {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
};
