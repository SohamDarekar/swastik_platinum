// Export types related to enquiries
export interface EnquiryFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message?: string;
  scheduleVisit?: boolean;
  source?: string;
}

export interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
  data?: any;
}

export interface Enquiry {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
  scheduleVisit: boolean;
  source: string;
  createdAt: string;
}
