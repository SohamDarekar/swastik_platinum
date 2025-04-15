import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection - use Atlas in production, local in development
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/swastik-platinum';

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Create Enquiry Schema and Model
const enquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  scheduleVisit: Boolean,
  source: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Enquiry = mongoose.model('Enquiry', enquirySchema);

// CORS configuration
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173', process.env.FRONTEND_URL || '*'],
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  credentials: true
}));

// Middleware
app.use(express.json());

// Basic route
app.get('/api/health', (req, res) => {
  res.json({ 
    message: 'API is running', 
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// Enquiry submission endpoint with MongoDB storage
app.post('/api/enquiry/submit', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message, scheduleVisit, source } = req.body;
    console.log('Received form data:', req.body);
    
    // Create a new enquiry document
    const enquiry = new Enquiry({
      name: `${firstName} ${lastName}`.trim(),
      email,
      phone,
      message: message || '',
      scheduleVisit: scheduleVisit || false,
      source: source || 'website'
    });
    
    // Save to MongoDB
    await enquiry.save();
    console.log('Enquiry saved to MongoDB');
    
    // Return success response
    res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully and saved to MongoDB',
      data: { id: enquiry._id, ...req.body }
    });
  } catch (error) {
    console.error('Error saving enquiry:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while saving your enquiry'
    });
  }
});

// Add an endpoint to view all enquiries
app.get('/api/enquiry', async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: enquiries.length,
      data: enquiries
    });
  } catch (error) {
    console.error('Error fetching enquiries:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while fetching enquiries'
    });
  }
});

// Add a new endpoint to get all enquiries
app.get('/api/enquiries', async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: enquiries.length,
      data: enquiries
    });
  } catch (error) {
    console.error('Error fetching enquiries:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching enquiries',
      error: error.message
    });
  }
});

// Add an endpoint to delete an enquiry by ID
app.delete('/api/enquiry/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Enquiry.findByIdAndDelete(id);
    
    if (!result) {
      return res.status(404).json({
        success: false,
        error: 'Enquiry not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Enquiry deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting enquiry:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while deleting enquiry'
    });
  }
});

// Serve static files if in production
if (process.env.NODE_ENV === 'production') {
  // Serve static files from the 'dist' directory
  app.use(express.static(path.join(__dirname, 'dist')));
  
  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    // Only handle non-API requests with the React app
    if (!req.url.startsWith('/api')) {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    } else {
      // If it's an API request that wasn't caught by previous routes, return 404
      res.status(404).json({ error: 'API endpoint not found' });
    }
  });
  
  console.log('Running in production mode - serving static files');
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
