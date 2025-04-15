import { EnquiryFormData, ApiResponse } from '../types/enquiry';

// Dynamic API URL for development/production environments
const API_URL = import.meta.env.VITE_API_URL || 
                (import.meta.env.PROD 
                  ? 'https://swastik-platinum-api.onrender.com/api'  // Update this with your actual Render URL
                  : 'http://localhost:5000/api');

export async function submitEnquiry(data: EnquiryFormData): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_URL}/enquiry/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    return await response.json();
  } catch (error) {
    return {
      success: false,
      error: 'Network error. Please try again later.'
    };
  }
}

export async function fetchEnquiries(): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_URL}/enquiry`);
    return await response.json();
  } catch (error) {
    return {
      success: false,
      error: 'Failed to fetch enquiries.'
    };
  }
}
