
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { IndianRupee } from 'lucide-react';

const stackComponents = [
  {
    id: 1,
    title: 'Aadhaar',
    description: 'Digital identity system providing unique identification for residents of India',
    badge: 'Identity',
    color: 'orange',
    usersCount: '1.3 billion+',
    icon: '🆔'
  },
  {
    id: 2,
    title: 'UPI',
    description: 'Unified Payment Interface for real-time mobile payment system',
    badge: 'Payment',
    color: 'blue',
    usersCount: '250 million+',
    icon: <IndianRupee className="h-8 w-8 text-blue-600" />
  },
  {
    id: 3,
    title: 'DigiLocker',
    description: 'Digital platform for issuance and verification of documents & certificates',
    badge: 'Document',
    color: 'green',
    usersCount: '100 million+',
    icon: '📑'
  },
  {
    id: 4,
    title: 'eKYC',
    description: 'Electronic Know Your Customer for paperless account opening',
    badge: 'Verification',
    color: 'purple',
    usersCount: '500 million+',
    icon: '✓'
  },
  {
    id: 5,
    title: 'eSign',
    description: 'Digital signature service for electronic signing of documents',
    badge: 'Signature',
    color: 'pink',
    usersCount: '50 million+',
    icon: '✍️'
  },
  {
    id: 6,
    title: 'OCEN',
    description: 'Open Credit Enablement Network to facilitate credit to MSMEs',
    badge: 'Finance',
    color: 'yellow',
    usersCount: '25 million+',
    icon: '💰'
  }
];

const getBadgeColor = (color: string) => {
  const colors = {
    orange: 'bg-orange-100 text-orange-800',
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    purple: 'bg-purple-100 text-purple-800',
    pink: 'bg-pink-100 text-pink-800',
    yellow: 'bg-yellow-100 text-yellow-800'
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

const StackComponents = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">India Stack Components</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            The building blocks of India's digital transformation journey
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stackComponents.map((component) => (
            <Card key={component.id} className="india-card hover:-translate-y-1 transition-transform">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getBadgeColor(component.color)}`}>
                      {component.badge}
                    </span>
                    <CardTitle className="mt-2">{component.title}</CardTitle>
                  </div>
                  <div className="text-2xl">
                    {typeof component.icon === 'string' ? component.icon : component.icon}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-gray-500 mt-2">
                  {component.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">{component.usersCount}</span> users
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackComponents;
