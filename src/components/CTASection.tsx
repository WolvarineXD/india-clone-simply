
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="bg-blue-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-blue-300">Start integrating with India Stack today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 border-0">
              Get started
            </Button>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-800">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
