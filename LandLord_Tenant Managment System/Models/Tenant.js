//models/tenant.js
const mongoose = require('mongoose');
// Tenant Schema
const tenantSchema = new mongoose.Schema({
    id:{type:Number},
    title: { type: String, enum: ['Mx', 'Ms', 'Mr', 'Mrs', 'Miss', 'Dr', 'Other'], required: true },
    firstName: { type: String, required: [true,'please Enter first Name' ]},
    surname: { type: String, required:  [true,'please Enter surename' ] },
    phoneNumber: { type: String, required:  [true,'please Enter phoneNumber' ] },
    email: { type: String, required:  [true,'please Enter Email Address' ] },
    homeAddress: {
        addressLine1: { type: String, required: [true,'please Enter AddressLine1' ]  },
        addressLine2: String,
        town: { type: String, required: [true,'please Enter Town' ] },
        county: { type: String, required:[true,'please Enter county' ] },
        eircode: { type: String, required: [true,'please Eircode' ] }
    }
});


// Create and export models based on schemas
const Tenant = mongoose.model('Tenant', tenantSchema);

module.exports = Tenant;