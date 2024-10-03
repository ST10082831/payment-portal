const express = require('express');      
const mongoose = require('mongoose');   
const dotenv = require('dotenv');       

dotenv.config();                         

const app = express();                  
app.use(express.json());               

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection failed", err));


app.post('/api/register', (req, res) => { /* Handle registration */ });
app.post('/api/login', (req, res) => { /* Handle login */ });

// Start server on the specified PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));