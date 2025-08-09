'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'letmein') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return <AdminDashboard />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            PlugIQ Admin
          </Link>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="Enter admin password"
              required
            />
          </div>
          
          {error && (
            <div className="text-red-600 dark:text-red-400 text-sm">
              {error}
            </div>
          )}
          
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

function AdminDashboard() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [deletionRequests, setDeletionRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingDeletions, setLoadingDeletions] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'contacts' | 'deletions'>('contacts');

  const fetchContacts = async () => {
    try {
      const response = await fetch('/api/contacts');
      if (response.ok) {
        const data = await response.json();
        setContacts(data);
      } else {
        console.error('Failed to fetch contacts');
        setContacts([]);
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
      setContacts([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchDeletionRequests = async () => {
    try {
      const response = await fetch('/api/deletion-requests');
      if (response.ok) {
        const data = await response.json();
        setDeletionRequests(data);
      } else {
        console.error('Failed to fetch deletion requests');
        setDeletionRequests([]);
      }
    } catch (error) {
      console.error('Error fetching deletion requests:', error);
      setDeletionRequests([]);
    } finally {
      setLoadingDeletions(false);
    }
  };

  // Fetch real data from Firebase
  useEffect(() => {
    fetchContacts();
    fetchDeletionRequests();
  }, []);

  const handleDelete = async (id: string) => {
    setDeleting(id);
    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setContacts(contacts.filter(contact => contact.id !== id));
        setShowDeleteConfirm(null);
      } else {
        console.error('Failed to delete contact');
        alert('Failed to delete contact. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
      alert('Error deleting contact. Please try again.');
    } finally {
      setDeleting(null);
    }
  };

  const confirmDelete = (id: string) => {
    setShowDeleteConfirm(id);
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(null);
  };

  const handleLogout = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            PlugIQ Admin
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Admin Dashboard
        </h1>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8">
          <button
            onClick={() => setActiveTab('contacts')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === 'contacts'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Contact Submissions ({contacts.length})
          </button>
          <button
            onClick={() => setActiveTab('deletions')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === 'deletions'
                ? 'bg-red-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Data Deletion Requests ({deletionRequests.length})
          </button>
        </div>

        {/* Contact Submissions Tab */}
        {activeTab === 'contacts' && (
          <>
            {loading ? (
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                <p className="text-gray-600 dark:text-gray-300">Loading submissions...</p>
              </div>
            ) : contacts.length === 0 ? (
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
                <p className="text-gray-600 dark:text-gray-300">No contact submissions yet.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {contacts.map((contact) => (
                  <div key={contact.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg relative">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Contact #{contact.id}
                      </h3>
                      <button
                        onClick={() => confirmDelete(contact.id)}
                        disabled={deleting === contact.id}
                        className="bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
                      >
                        {deleting === contact.id ? 'Deleting...' : 'Delete'}
                      </button>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Name</label>
                        <p className="text-gray-900 dark:text-white">{contact.name}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</label>
                        <p className="text-gray-900 dark:text-white">{contact.email}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Date</label>
                        <p className="text-gray-900 dark:text-white">
                          {new Date(contact.timestamp).toLocaleDateString()} {new Date(contact.timestamp).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Message</label>
                      <p className="text-gray-900 dark:text-white mt-1">{contact.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Data Deletion Requests Tab */}
        {activeTab === 'deletions' && (
          <>
            {loadingDeletions ? (
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
                <p className="text-gray-600 dark:text-gray-300">Loading deletion requests...</p>
              </div>
            ) : deletionRequests.length === 0 ? (
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
                <p className="text-gray-600 dark:text-gray-300">No data deletion requests yet.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {deletionRequests.map((request) => (
                  <div key={request.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-red-500">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                        <svg className="w-5 h-5 text-red-600 dark:text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                        Deletion Request #{request.id}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        request.status === 'pending' 
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                          : request.status === 'completed'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                          : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                      }`}>
                        {request.status || 'pending'}
                      </span>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Name</label>
                        <p className="text-gray-900 dark:text-white">{request.name}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</label>
                        <p className="text-gray-900 dark:text-white">{request.email}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Date Requested</label>
                        <p className="text-gray-900 dark:text-white">
                          {new Date(request.timestamp).toLocaleDateString()} {new Date(request.timestamp).toLocaleTimeString()}
                        </p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Status</label>
                        <p className="text-gray-900 dark:text-white capitalize">{request.status || 'pending'}</p>
                      </div>
                    </div>
                    {request.reason && (
                      <div>
                        <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Reason</label>
                        <p className="text-gray-900 dark:text-white mt-1">{request.reason}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Confirm Deletion
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Are you sure you want to delete this contact submission? This action cannot be undone.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleDelete(showDeleteConfirm)}
                disabled={deleting === showDeleteConfirm}
                className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white px-4 py-2 rounded font-medium transition-colors"
              >
                {deleting === showDeleteConfirm ? 'Deleting...' : 'Delete'}
              </button>
              <button
                onClick={cancelDelete}
                disabled={deleting === showDeleteConfirm}
                className="flex-1 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-200 px-4 py-2 rounded font-medium transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
