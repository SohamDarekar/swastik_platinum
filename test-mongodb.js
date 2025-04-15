import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://localhost:27017/swastik-platinum';

async function testConnection() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connection successful! The server is running.');
    await mongoose.disconnect();
  } catch (error) {
    console.error('MongoDB connection failed. The server might not be running.');
    console.error('Error details:', error.message);
  }
}

testConnection();
