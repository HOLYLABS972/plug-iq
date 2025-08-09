import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            PlugIQ
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Home
            </Link>
            <Link href="/learn-more" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Learn More
            </Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="text-indigo-600 dark:text-indigo-400 font-medium">
              Privacy
            </Link>
          </div>
        </div>
      </nav>

      {/* Privacy Hero */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Privacy <span className="text-indigo-600 dark:text-indigo-400">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Last updated: December 2024
          </p>
        </div>

        {/* Privacy Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Information We Collect</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Personal Information</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      We collect information you provide directly to us, such as:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                      <li>Name, email address, and phone number</li>
                      <li>Payment information and billing address</li>
                      <li>Vehicle information for charging optimization</li>
                      <li>Account preferences and settings</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Usage Information</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      We automatically collect information about your use of our services:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                      <li>Charging session data (location, duration, energy consumed)</li>
                      <li>App usage patterns and preferences</li>
                      <li>Device information and IP address</li>
                      <li>Location data when using our mobile app</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How We Use Your Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Service Delivery</h3>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                      <li>• Process charging transactions</li>
                      <li>• Optimize charging recommendations</li>
                      <li>• Provide customer support</li>
                      <li>• Send service notifications</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Improvements</h3>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                      <li>• Analyze usage patterns</li>
                      <li>• Improve our services</li>
                      <li>• Develop new features</li>
                      <li>• Enhance user experience</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Data Sharing and Disclosure</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We do not sell your personal information. We may share your information in the following circumstances:
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Service Providers</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      We work with trusted partners to process payments, provide customer support, and maintain our infrastructure.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Legal Requirements</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      We may disclose information when required by law or to protect our rights and the safety of our users.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Business Transfers</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      In the event of a merger or acquisition, your information may be transferred to the new entity.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Your Rights and Choices</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Access and Control</h3>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                      <li>• View and update your account information</li>
                      <li>• Download your data</li>
                      <li>• Delete your account</li>
                      <li>• Opt out of marketing communications</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Location Data</h3>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                      <li>• Control location sharing in app settings</li>
                      <li>• Use precise or approximate location</li>
                      <li>• Turn off location services entirely</li>
                      <li>• View location history</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <svg className="w-5 h-5 text-red-600 dark:text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                    Delete Your Data
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    You have the right to request the deletion of all your personal data from our systems. This action is permanent and cannot be undone.
                  </p>
                  <Link
                    href="/delete-data"
                    className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                    Request Data Deletion
                  </Link>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Data Security</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We implement industry-standard security measures to protect your information:
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                        </svg>
                      </div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Encryption</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Data encrypted in transit and at rest</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                      </div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Monitoring</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">24/7 security monitoring</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                      </div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Compliance</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">GDPR and CCPA compliant</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-4">
                                      <div>
                    <p className="font-medium text-gray-900 dark:text-white mb-1">Email</p>
                    <p className="text-indigo-600 dark:text-indigo-400">support@theholylabs.com</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white mb-1">Address</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Holylabs Ltd<br />
                      275 New North Road Islington #1432<br />
                      London, N1 7AA<br />
                      United Kingdom
                    </p>
                  </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Changes to This Policy</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our website and updating the &quot;Last updated&quot; date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                </p>
              </section>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-indigo-400 mb-4 md:mb-0">
              PlugIQ
            </div>
            <div className="flex space-x-6">
              <Link href="/learn-more" className="hover:text-indigo-400 transition-colors">
                Learn More
              </Link>
              <Link href="/contact" className="hover:text-indigo-400 transition-colors">
                Contact
              </Link>
              <Link href="/privacy" className="text-indigo-400">
                Privacy
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PlugIQ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
