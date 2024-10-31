const express = require('express');//express
const mongoose = require('mongoose');//mongoose
const bodyParser = require('body-parser');
const path = require('path');

const cors = require('cors');

const tenantRoutes = require('./routes/tenantRoutes');
const landlordRoutes = require('./routes/landlordRoutes');
const contractRoutes = require('./routes/contractRoutes');

// Initialize Express app
const app = express();
  //middleware
  app.use(express.json());
  // app.use(bodyParser.urlencoded({ extended: true }));
  // app.use(bodyParser.json());
 // Enable CORS for all routes
  app.use(cors());

  app.use('/api/tenants', tenantRoutes);
  app.use('/api/landlords', landlordRoutes);
  app.use('/api/contracts', contractRoutes);

  // serve static files from the 'public' directory
app.use(express.static(path.join(__dirname)));

// root route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Connect to MongoDB database hosted on MongoDB Atlas
mongoose.connect('mongodb+srv://basharalkhalifeh2023:Basharalkhalifeh2023@cluster0.chhdlaj.mongodb.net/LandlordTenantManagmentSystem?retryWrites=true&w=majority&appName=Cluster0')


.then(()=>{
    console.log("Successfully connected to MongoDB");

    app.listen(3000,()=>{
        console.log("Server running on port 3000");
    });
}).catch(err =>{
    console.error('MongoDB connection error:',err);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});
