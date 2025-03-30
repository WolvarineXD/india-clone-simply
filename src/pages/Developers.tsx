
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

const Developers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-50 to-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Developer Resources
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Everything you need to build with India Stack
              </p>
            </div>

            <div className="mt-12">
              <Tabs defaultValue="getting-started" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
                  <TabsTrigger value="documentation">Documentation</TabsTrigger>
                  <TabsTrigger value="sandbox">Sandbox</TabsTrigger>
                </TabsList>
                
                <TabsContent value="getting-started" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Getting Started with India Stack</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="india-card">
                          <h3 className="text-xl font-semibold text-gray-900">For Startups</h3>
                          <p className="mt-2 text-gray-500">
                            Learn how to integrate India Stack APIs into your startup to accelerate growth and reach millions of users.
                          </p>
                          <div className="mt-4">
                            <Button className="mt-2">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Button>
                          </div>
                        </div>
                        
                        <div className="india-card">
                          <h3 className="text-xl font-semibold text-gray-900">For Enterprises</h3>
                          <p className="mt-2 text-gray-500">
                            Discover how large organizations can leverage India Stack for digital transformation at scale.
                          </p>
                          <div className="mt-4">
                            <Button className="mt-2">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Button>
                          </div>
                        </div>
                      </div>

                      <div className="india-card">
                        <h3 className="text-xl font-semibold text-gray-900">Quick Start Guides</h3>
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Button variant="outline" className="justify-start">
                            <div className="flex flex-col items-start">
                              <span className="text-sm">Aadhaar Authentication</span>
                              <span className="text-xs text-gray-500">Identity Verification</span>
                            </div>
                          </Button>
                          <Button variant="outline" className="justify-start">
                            <div className="flex flex-col items-start">
                              <span className="text-sm">UPI Integration</span>
                              <span className="text-xs text-gray-500">Payment Processing</span>
                            </div>
                          </Button>
                          <Button variant="outline" className="justify-start">
                            <div className="flex flex-col items-start">
                              <span className="text-sm">DigiLocker API</span>
                              <span className="text-xs text-gray-500">Document Storage</span>
                            </div>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="documentation" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>API Documentation</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="india-card">
                          <h3 className="text-lg font-semibold text-gray-900">Aadhaar API</h3>
                          <p className="mt-2 text-sm text-gray-500">
                            Authentication, eKYC, OTP Services
                          </p>
                          <div className="mt-4">
                            <Button size="sm" variant="outline" className="w-full">View Documentation</Button>
                          </div>
                        </div>
                        
                        <div className="india-card">
                          <h3 className="text-lg font-semibold text-gray-900">UPI API</h3>
                          <p className="mt-2 text-sm text-gray-500">
                            Payment Flows, QR Codes, Intent
                          </p>
                          <div className="mt-4">
                            <Button size="sm" variant="outline" className="w-full">View Documentation</Button>
                          </div>
                        </div>
                        
                        <div className="india-card">
                          <h3 className="text-lg font-semibold text-gray-900">DigiLocker API</h3>
                          <p className="mt-2 text-sm text-gray-500">
                            Document Issuance, Verification, Access
                          </p>
                          <div className="mt-4">
                            <Button size="sm" variant="outline" className="w-full">View Documentation</Button>
                          </div>
                        </div>
                        
                        <div className="india-card">
                          <h3 className="text-lg font-semibold text-gray-900">eSign API</h3>
                          <p className="mt-2 text-sm text-gray-500">
                            Digital Signatures, Document Signing
                          </p>
                          <div className="mt-4">
                            <Button size="sm" variant="outline" className="w-full">View Documentation</Button>
                          </div>
                        </div>
                        
                        <div className="india-card">
                          <h3 className="text-lg font-semibold text-gray-900">Account Aggregator API</h3>
                          <p className="mt-2 text-sm text-gray-500">
                            Consent-Based Data Sharing
                          </p>
                          <div className="mt-4">
                            <Button size="sm" variant="outline" className="w-full">View Documentation</Button>
                          </div>
                        </div>
                        
                        <div className="india-card">
                          <h3 className="text-lg font-semibold text-gray-900">OCEN API</h3>
                          <p className="mt-2 text-sm text-gray-500">
                            Credit Enablement Network
                          </p>
                          <div className="mt-4">
                            <Button size="sm" variant="outline" className="w-full">View Documentation</Button>
                          </div>
                        </div>
                      </div>

                      <div className="india-card">
                        <h3 className="text-xl font-semibold text-gray-900">SDK Downloads</h3>
                        <p className="mt-2 text-gray-500">
                          Download software development kits for common platforms to accelerate your integration.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Button variant="outline" size="sm">Android SDK</Button>
                          <Button variant="outline" size="sm">iOS SDK</Button>
                          <Button variant="outline" size="sm">JavaScript SDK</Button>
                          <Button variant="outline" size="sm">Java SDK</Button>
                          <Button variant="outline" size="sm">Python SDK</Button>
                          <Button variant="outline" size="sm">Go SDK</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="sandbox" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Testing Environment</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="india-card">
                        <h3 className="text-xl font-semibold text-gray-900">Sandbox Access</h3>
                        <p className="mt-2 text-gray-500">
                          Test your integration with India Stack APIs in a secure sandbox environment without using real data.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-4">
                          <Button>Request Sandbox Access</Button>
                          <Button variant="outline">View Testing Guidelines</Button>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="india-card">
                          <h3 className="text-xl font-semibold text-gray-900">Test Data</h3>
                          <p className="mt-2 text-gray-500">
                            Access test data for APIs including synthetic Aadhaar numbers, test accounts for UPI, and sample documents.
                          </p>
                          <div className="mt-4">
                            <Button variant="outline">Download Test Data</Button>
                          </div>
                        </div>
                        
                        <div className="india-card">
                          <h3 className="text-xl font-semibold text-gray-900">API Simulator</h3>
                          <p className="mt-2 text-gray-500">
                            Interactive tool to simulate API requests and responses without writing code.
                          </p>
                          <div className="mt-4">
                            <Button variant="outline">Launch Simulator</Button>
                          </div>
                        </div>
                      </div>

                      <div className="india-card">
                        <h3 className="text-xl font-semibold text-gray-900">Production Readiness</h3>
                        <p className="mt-2 text-gray-500">
                          Guidelines and checklists to ensure your integration is ready for production.
                        </p>
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium text-gray-900">Security Audits</h4>
                            <p className="text-sm text-gray-500 mt-1">Requirements for security compliance</p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium text-gray-900">Performance Testing</h4>
                            <p className="text-sm text-gray-500 mt-1">Guidelines for load testing</p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium text-gray-900">Documentation</h4>
                            <p className="text-sm text-gray-500 mt-1">Required paperwork for go-live</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Developers;
