
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    quote: "India Stack has revolutionized how we deliver financial services. The eKYC and UPI frameworks have allowed us to onboard customers faster and process transactions securely.",
    name: "Rajesh Kumar",
    title: "CEO, PayNow Financial",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    quote: "As a government service provider, DigiLocker has transformed how we issue and verify certificates. Citizens no longer need to carry physical documents.",
    name: "Priya Sharma",
    title: "Director, Digital Governance Initiative",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: 3,
    quote: "The open APIs provided by India Stack enabled us to build an inclusive healthcare platform that serves even the most remote areas of India.",
    name: "Dr. Anand Rao",
    title: "Founder, HealthConnect India",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by Organizations Across India
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            See how India Stack is transforming businesses and government services
          </p>
        </div>

        <div className="mt-12 space-y-8 md:grid md:grid-cols-3 md:gap-x-6 md:gap-y-8 md:space-y-0">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full flex flex-col">
              <CardContent className="pt-6 flex-grow flex flex-col">
                <div className="flex-grow">
                  <svg className="h-8 w-8 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-500 text-base italic">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
