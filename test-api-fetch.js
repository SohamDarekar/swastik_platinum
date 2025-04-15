// Modern ES module approach for testing API connection

console.log('Testing connection to API server...');

const testApi = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/health');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('API server is accessible!');
    console.log('RESPONSE:', JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error connecting to API server:', error.message);
    console.log('Please ensure the server is running on port 5000');
  }
};

testApi();
