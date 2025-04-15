import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://localhost:27017/swastik-platinum';

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

async function displayEnquiries() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected successfully');
    
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    console.log(`Found ${enquiries.length} enquiries:`);
    
    enquiries.forEach((enquiry, index) => {
      console.log(`\n--- Enquiry ${index + 1} ---`);
      console.log(`Name: ${enquiry.name}`);
      console.log(`Email: ${enquiry.email}`);
      console.log(`Phone: ${enquiry.phone}`);
      console.log(`Message: ${enquiry.message}`);
      console.log(`Schedule Visit: ${enquiry.scheduleVisit}`);
      console.log(`Source: ${enquiry.source}`);
      console.log(`Created: ${enquiry.createdAt}`);
    });
    
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error:', error);
  }
}

displayEnquiries();
