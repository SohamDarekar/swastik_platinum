import React, { useState, useEffect } from 'react';

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
      <h1 className="text-2xl font-bold mb-4">Enquiries Admin Panel</h1>
      
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
