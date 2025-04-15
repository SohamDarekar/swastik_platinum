import { EnquiryFormData, ApiResponse } from '../types/enquiry';

// Ensure the API URL is correctly set for the deployed environment
const API_URL = 'https://swastik-platinum.onrender.com';

export async function submitEnquiry(data: EnquiryFormData): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_URL}/api/enquiry/submit`, {
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
    const response = await fetch(`${API_URL}/api/enquiry`);
    return await response.json();
  } catch (error) {
    return {
      success: false,
      error: 'Failed to fetch enquiries.'
    };
  }
}
