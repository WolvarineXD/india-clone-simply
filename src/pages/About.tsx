
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About India Stack
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                A set of open APIs and digital public goods for a presence-less, paperless, and cashless service delivery.
              </p>
            </div>

            <div className="mt-12">
              <Card className="shadow-lg">
                <CardContent className="p-6 sm:p-10">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                      <p className="mt-4 text-gray-500">
                        India Stack is a set of APIs that allows governments, businesses, startups and developers to utilize a unique digital Infrastructure to solve India's hard problems towards presence-less, paperless, and cashless service delivery.
                      </p>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <h2 className="text-2xl font-bold text-gray-900">The Four Layers</h2>
                      <div className="mt-6 grid gap-6 sm:grid-cols-2">
                        <div className="bg-orange-50 p-6 rounded-lg">
                          <h3 className="text-lg font-medium text-orange-800">Presenceless Layer</h3>
                          <p className="mt-2 text-orange-600">
                            Allows for a universal biometric digital identity that can be authenticated anywhere. Example: Aadhaar Authentication.
                          </p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg">
                          <h3 className="text-lg font-medium text-blue-800">Paperless Layer</h3>
                          <p className="mt-2 text-blue-600">
                            Digital records are available in a digital locker eliminating the need to carry physical documents. Example: DigiLocker.
                          </p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg">
                          <h3 className="text-lg font-medium text-green-800">Cashless Layer</h3>
                          <p className="mt-2 text-green-600">
                            A single interface for all financial transactions across India. Example: UPI.
                          </p>
                        </div>
                        <div className="bg-purple-50 p-6 rounded-lg">
                          <h3 className="text-lg font-medium text-purple-800">Consent Layer</h3>
                          <p className="mt-2 text-purple-600">
                            Allows data to move freely and securely to democratize the market for data. Example: Data Empowerment and Protection Architecture (DEPA).
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <h2 className="text-2xl font-bold text-gray-900">History & Evolution</h2>
                      <p className="mt-4 text-gray-500">
                        India Stack began with the introduction of Aadhaar in 2009, which created the foundation for a digital identity system. It has since evolved to include UPI for payments, DigiLocker for documentation, and various consent frameworks for data sharing. Each layer has been developed in response to specific needs in India's digital transformation journey.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
