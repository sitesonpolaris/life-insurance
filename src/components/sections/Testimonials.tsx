import React, { useState } from 'react';
import { testimonials } from '../../data/testimonials';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See how others secured their family's future
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real stories from real customers who found the right life insurance coverage
            for their needs and are enjoying peace of mind.
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden md:block absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={prevTestimonial}
              className="bg-white shadow-md rounded-full p-3 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
            <button
              onClick={nextTestimonial}
              className="bg-white shadow-md rounded-full p-3 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="md:hidden flex justify-center gap-4 mb-6">
            <button
              onClick={prevTestimonial}
              className="bg-white shadow-md rounded-full p-3 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-white shadow-md rounded-full p-3 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-300 ${
                  index === activeIndex ? 'block opacity-100' : 'hidden opacity-0'
                }`}
              >
                <div className="md:flex">
                  <div className="md:w-1/3 relative">
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      className="w-full h-full object-cover object-center"
                      style={{ minHeight: '300px' }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 md:hidden">
                      <div className="text-white">
                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                        <p className="text-sm opacity-80">{testimonial.age} years old</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 md:w-2/3 flex flex-col justify-center">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 w-5 h-5 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-700 text-lg italic mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="hidden md:block">
                      <h3 className="font-semibold text-lg text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-500">
                        {testimonial.age} years old • {
                          testimonial.insuranceType === 'term' ? 'Term Life Insurance' :
                          testimonial.insuranceType === 'whole' ? 'Whole Life Insurance' :
                          'Indexed Universal Life'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-center mb-3">
              <Star className="text-yellow-400 w-6 h-6 fill-current" />
              <Star className="text-yellow-400 w-6 h-6 fill-current" />
              <Star className="text-yellow-400 w-6 h-6 fill-current" />
              <Star className="text-yellow-400 w-6 h-6 fill-current" />
              <Star className="text-yellow-400 w-6 h-6 fill-current" />
            </div>
            <p className="text-gray-500 text-center text-sm">4.9/5 average rating</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="font-semibold text-center">
              <span className="text-blue-600 text-2xl">5,400+</span>
              <span className="text-gray-700 block text-sm">Families Protected</span>
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="font-semibold text-center">
              <span className="text-blue-600 text-2xl">$1.2B+</span>
              <span className="text-gray-700 block text-sm">Coverage Provided</span>
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="font-semibold text-center">
              <span className="text-blue-600 text-2xl">15+</span>
              <span className="text-gray-700 block text-sm">Years Experience</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;