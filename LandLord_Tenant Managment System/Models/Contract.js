
const mongoose = require('mongoose');

// Contract Schema
const contractSchema = new mongoose.Schema({
   
    contractDate: { type: Date, required: true },
    propertyAddress: { type: String, required: true },
    tenants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' }],
    landlord: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Landlord', required: true }],
    feeMonthly: { type: Number, required: true },
    propertyDoorNumber: { type: String, required: true },
    contractLength: { type: String, enum: ['Month', 'Year', 'Permanent'], required: true },
    propertyType: { type: String, enum: ['Apartment', 'Semi-Detached', 'Detached', 'Other'], required: true }
});


const Contract = mongoose.model('Contract', contractSchema);

module.exports = Contract;

//modeling of Db
// database is designed to store information 
// about tenants, landlords, and contracts. 
// I have separate collections for each entity. 
// The Tenant collection includes personal info. 
// The Landlord collection includes personal and additional info
//  such as date of birth The Contract collection contains info about date of the contract 
//  , fee, type of property length of contract, and references to the corresponding 
//  tenant and landlord.



//impact on your REST API development
// database design directly influenced how the structured  REST API.
//  the  API routes need to align with the database collections (tenants, landlords, contracts)
//   for smooth CRUD operations. also implemented validation in API to ensure data consistency 
//   with the database schema. 
// Any changes to the database schema require corresponding updates to the API for consistency