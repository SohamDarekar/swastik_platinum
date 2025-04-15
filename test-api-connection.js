import http from 'node:http';

console.log('Testing connection to API server...');

// Test health endpoint
const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/api/health',
  method: 'GET'
};

const req = http.request(options, res => {
  console.log(`STATUS: ${res.statusCode}`);
  
  let data = '';
  
  res.on('data', chunk => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('RESPONSE:', data);
    console.log('API server is accessible!');
  });
});

req.on('error', error => {
  console.error('Error connecting to API server:', error.message);
  console.log('Please ensure the server is running on port 5000');
});

req.end();
