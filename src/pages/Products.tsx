
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                India Stack Products
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Explore the suite of digital public goods that make up India Stack
              </p>
            </div>

            <div className="mt-12">
              <Tabs defaultValue="identity" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="identity">Identity</TabsTrigger>
                  <TabsTrigger value="payments">Payments</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                  <TabsTrigger value="consent">Consent</TabsTrigger>
                </TabsList>
                
                <TabsContent value="identity" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Identity Layer</CardTitle>
                      <CardDescription>
                        Enabling presence-less service delivery through digital identity
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="india-card">
                          <h3 className="text-xl font-semibold text-gray-900">Aadhaar</h3>
                          <p className="mt-2 text-gray-500">
                            The world's largest biometric identity system providing a unique 12-digit identity number to residents of India.
                          </p>
                          <div className="mt-4 flex items-center">
                            <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-md">1.3+ billion enrollments</span>
                          </div>
                        </div>
                        
                        <div className="india-card">
                          <h3 className="text-xl font-semibold text-gray-900">e-KYC</h3>
                          <p className="mt-2 text-gray-500">
                            Electronic Know Your Customer allows businesses to complete customer verification digitally using Aadhaar authentication.
                          </p>
                          <div className="mt-4 flex items-center">
                            <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-md">Paperless Verification</span>
                          </div>
                        </div>
                      </div>

                      <div className="india-card">
                        <h3 className="text-xl font-semibold text-gray-900">Aadhaar Authentication</h3>
                        <p className="mt-2 text-gray-500">
                          APIs and services that enable identity verification through various means including biometric, OTP, and demographic checks.
                        </p>
                        <div className="mt-4 flex items-center space-x-2">
                          <Button variant="outline" size="sm">API Documentation</Button>
                          <Button size="sm">Integration Guide</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="payments" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Payments Layer</CardTitle>
                      <CardDescription>
                        Enabling cashless transactions and financial inclusion
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="india-card">
                          <h3 className="text-xl font-semibold text-gray-900">UPI</h3>
                          <p className="mt-2 text-gray-500">
                            Unified Payment Interface allowing instant real-time payment over mobile devices.
                          </p>
                          <div className="mt-4 flex items-center">
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-md">8.94+ billion monthly transactions</span>
                          </div>
                        </div>
                        
                        <div className="india-card">
                          <h3 className="text-xl font-semibold text-gray-900">BHIM</h3>
                          <p className="mt-2 text-gray-500">
                            Bharat Interface for Money is a UPI based mobile application facilitating e-payments.
                          </p>
                          <div className="mt-4 flex items-center">
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-md">100+ million downloads</span>
                          </div>
                        </div>
                      </div>

                      <div className="india-card">
                        <h3 className="text-xl font-semibold text-gray-900">AePS</h3>
                        <p className="mt-2 text-gray-500">
                          Aadhaar enabled Payment System allows Aadhaar biometric authentication for financial transactions.
                        </p>
                        <div className="mt-4 flex items-center space-x-2">
                          <Button variant="outline" size="sm">API Documentation</Button>
                          <Button size="sm">Integration Guide</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="documents" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Documents Layer</CardTitle>
                      <CardDescription>
                        Enabling paperless governance and service delivery
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="india-card">
                          <h3 className="text-xl font-semibold text-gray-900">DigiLocker</h3>
                          <p className="mt-2 text-gray-500">
                            Platform for issuance and verification of documents & certificates digitally.
                          </p>
                          <div className="mt-4 flex items-center">
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-md">100+ million users</span>
                          </div>
                        </div>
                        
                        <div className="india-card">
                          <h3 className="text-xl font-semibold text-gray-900">e-Sign</h3>
                          <p className="mt-2 text-gray-500">
                            Online electronic signature service to facilitate signing of documents digitally.
                          </p>
                          <div className="mt-4 flex items-center">
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-md">Legally valid signatures</span>
                          </div>
                        </div>
                      </div>

                      <div className="india-card">
                        <h3 className="text-xl font-semibold text-gray-900">Digital Document Gateway</h3>
                        <p className="mt-2 text-gray-500">
                          Framework for secure document exchange and verification between government departments and citizens.
                        </p>
                        <div className="mt-4 flex items-center space-x-2">
                          <Button variant="outline" size="sm">API Documentation</Button>
                          <Button size="sm">Integration Guide</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="consent" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Consent Layer</CardTitle>
                      <CardDescription>
                        Enabling data sharing with user consent
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="india-card">
                          <h3 className="text-xl font-semibold text-gray-900">DEPA</h3>
                          <p className="mt-2 text-gray-500">
                            Data Empowerment and Protection Architecture for consent-based data sharing.
                          </p>
                          <div className="mt-4 flex items-center">
                            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-md">Data Democracy</span>
                          </div>
                        </div>
                        
                        <div className="india-card">
                          <h3 className="text-xl font-semibold text-gray-900">Account Aggregator</h3>
                          <p className="mt-2 text-gray-500">
                            Framework to enable secure consent-based financial data sharing.
                          </p>
                          <div className="mt-4 flex items-center">
                            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-md">Financial Data Exchange</span>
                          </div>
                        </div>
                      </div>

                      <div className="india-card">
                        <h3 className="text-xl font-semibold text-gray-900">Consent Manager</h3>
                        <p className="mt-2 text-gray-500">
                          System that allows users to control and manage consent for data sharing across services.
                        </p>
                        <div className="mt-4 flex items-center space-x-2">
                          <Button variant="outline" size="sm">API Documentation</Button>
                          <Button size="sm">Integration Guide</Button>
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

export default Products;
