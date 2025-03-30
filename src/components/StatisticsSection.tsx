
import React from 'react';
import { Progress } from '@/components/ui/progress';

const statistics = [
  {
    id: 1,
    name: 'Aadhaar Registrations',
    value: '99.9%',
    progress: 99.9,
    description: 'of adult population'
  },
  {
    id: 2,
    name: 'UPI Transactions',
    value: '8.94+ billion',
    progress: 92,
    description: 'monthly transactions'
  },
  {
    id: 3,
    name: 'DigiLocker Users',
    value: '100+ million',
    progress: 75,
    description: 'registered users'
  },
  {
    id: 4,
    name: 'Digital Payments',
    value: '$3+ trillion',
    progress: 85,
    description: 'annual volume'
  }
];

const StatisticsSection = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Impact</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Driving digital transformation at a population scale
          </p>
        </div>

        <dl className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat) => (
            <div key={stat.id} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  {stat.name}
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {stat.value}
                </dd>
                <div className="mt-4">
                  <Progress value={stat.progress} className="h-2" />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default StatisticsSection;
