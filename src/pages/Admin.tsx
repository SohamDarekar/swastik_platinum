import React, { useState, useEffect } from 'react';
import { convertToCSV, downloadCSV, getFormattedDate } from '../lib/exportUtils';

interface Enquiry {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
  scheduleVisit: boolean;
  source: string;
  createdAt: string;
}

export const Admin = () => {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/enquiry');
      
      if (!response.ok) {
        throw new Error('Failed to fetch enquiries');
      }
      
      const data = await response.json();
      
      if (data.success) {
        setEnquiries(data.data);
      } else {
        throw new Error(data.error || 'Failed to fetch enquiries');
      }
    } catch (error) {
      console.error('Error fetching enquiries:', error);
      setError(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleExport = () => {
    try {
      setIsExporting(true);
      
      // Define columns to export
      const columns = ['name', 'email', 'phone', 'message', 'scheduleVisit', 'source', 'createdAt'];
      
      // Convert enquiries to CSV format
      const csvContent = convertToCSV(
        // Format dates for better readability in Excel
        enquiries.map(enquiry => ({
          ...enquiry,
          createdAt: new Date(enquiry.createdAt).toLocaleString(),
          message: enquiry.message || ''
        })),
        columns
      );
      
      // Generate filename with current date
      const filename = `swastik-platinum-enquiries-${getFormattedDate()}.csv`;
      
      // Download the CSV file
      downloadCSV(csvContent, filename);
    } catch (err) {
      console.error('Error exporting data:', err);
      alert('Failed to export data. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard - Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Enquiries Admin Panel</h1>
        
        <button
          onClick={handleExport}
          disabled={isExporting || enquiries.length === 0}
          className={`px-4 py-2 rounded flex items-center space-x-2 
            ${(isExporting || enquiries.length === 0) 
              ? 'bg-gray-300 cursor-not-allowed' 
              : 'bg-green-600 hover:bg-green-700 text-white'}`}
        >
          <span>
            {isExporting ? 'Exporting...' : 'Export to CSV'}
          </span>
          {!isExporting && (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          )}
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Email</th>
              <th className="py-2 px-4 border-b text-left">Phone</th>
              <th className="py-2 px-4 border-b text-left">Message</th>
              <th className="py-2 px-4 border-b text-left">Schedule Visit</th>
              <th className="py-2 px-4 border-b text-left">Source</th>
              <th className="py-2 px-4 border-b text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((enquiry) => (
              <tr key={enquiry._id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{enquiry.name}</td>
                <td className="py-2 px-4 border-b">{enquiry.email}</td>
                <td className="py-2 px-4 border-b">{enquiry.phone}</td>
                <td className="py-2 px-4 border-b">{enquiry.message || '-'}</td>
                <td className="py-2 px-4 border-b">{enquiry.scheduleVisit ? 'Yes' : 'No'}</td>
                <td className="py-2 px-4 border-b">{enquiry.source}</td>
                <td className="py-2 px-4 border-b">{new Date(enquiry.createdAt).toLocaleString()}</td>
              </tr>
            ))}
            
            {enquiries.length === 0 && (
              <tr>
                <td colSpan={7} className="py-4 px-4 text-center text-gray-500">
                  No enquiries found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
