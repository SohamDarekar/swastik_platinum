import React, { useState, useEffect } from 'react';
import { convertToCSV, downloadCSV, getFormattedDate } from '../lib/exportUtils';
import { Eye, EyeOff } from 'lucide-react';
import { fetchEnquiries } from '../lib/api'; // Import fetchEnquiries function

// Get the API_URL from the environment or use the same logic as in api.ts
const API_URL = import.meta.env.VITE_API_URL || 
                (import.meta.env.PROD 
                  ? '/api'  // In production, use relative path
                  : 'http://localhost:5000/api');

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
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  
  // Authentication states
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  
  const CORRECT_PASSWORD = 'MegaplexPrime';

  useEffect(() => {
    if (isAuthenticated) {
      fetchEnquiries();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      setPasswordError('');
    } else {
      setPasswordError('Incorrect password. Please try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/enquiry`);
      
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

  const handleDeleteEnquiry = async (id: string) => {
    // Show confirmation dialog
    if (!window.confirm('Are you sure you want to delete this enquiry? This action cannot be undone.')) {
      return;
    }

    try {
      setIsDeleting(id);
      const response = await fetch(`${API_URL}/enquiry/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete enquiry');
      }
      
      const data = await response.json();
      
      if (data.success) {
        // Remove the deleted enquiry from the state
        setEnquiries(enquiries.filter(enquiry => enquiry._id !== id));
      } else {
        throw new Error(data.error || 'Failed to delete enquiry');
      }
    } catch (error) {
      console.error('Error deleting enquiry:', error);
      alert(error instanceof Error ? error.message : 'An error occurred while deleting the enquiry');
    } finally {
      setIsDeleting(null);
    }
  };

  // If not authenticated, show login form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6">Admin Login</h1>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {passwordError && (
                <p className="mt-2 text-sm text-red-600">{passwordError}</p>
              )}
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Login
            </button>
          </form>
          
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>Access restricted to authorized personnel only.</p>
          </div>
        </div>
      </div>
    );
  }

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
        
        <div className="flex space-x-4">
          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-800"
          >
            Logout
          </button>
          
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
              <th className="py-2 px-4 border-b text-left">Actions</th>
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
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleDeleteEnquiry(enquiry._id)}
                    disabled={isDeleting === enquiry._id}
                    className={`p-2 rounded ${
                      isDeleting === enquiry._id
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-red-600 hover:bg-red-700 text-white'
                    }`}
                    title="Delete this enquiry"
                  >
                    {isDeleting === enquiry._id ? (
                      'Deleting...'
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                    )}
                  </button>
                </td>
              </tr>
            ))}
            
            {enquiries.length === 0 && (
              <tr>
                <td colSpan={8} className="py-4 px-4 text-center text-gray-500">
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
