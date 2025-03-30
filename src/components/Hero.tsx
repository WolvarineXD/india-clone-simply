
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-y-0 h-full w-full" aria-hidden="true">
        <div className="relative h-full">
          <svg
            className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="pattern-1"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" className="text-orange-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#pattern-1)" />
          </svg>
          <svg
            className="absolute left-0 bottom-0 transform -translate-x-1/2 translate-y-1/4 lg:-translate-x-1/2 xl:translate-y-1/2"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="pattern-2"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" className="text-green-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#pattern-2)" />
          </svg>
        </div>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                  Digital India Initiative
                </span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block text-gray-900">Empowering India with</span>
                  <span className="block gradient-text">Digital Public Infrastructure</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                India Stack is a set of open APIs and digital public goods that aim to unlock the economic primitives of identity, data, and payments at population scale.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="sm:flex sm:justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-4">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                  <img
                    className="w-full"
                    src="https://indiastack.org/wp-content/uploads/2023/03/India-Stack-Logo.png"
                    alt="India Stack Logo"
                  />
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                    <svg className="h-20 w-20 text-primary" fill="currentColor" viewBox="0 0 84 84">
                      <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
                      <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
