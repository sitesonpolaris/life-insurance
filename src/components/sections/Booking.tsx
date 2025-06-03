import React, { useState } from 'react';
import { Calendar, Clock, Phone, User, Mail, MessageSquare } from 'lucide-react';

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    day: '',
    time: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    // In a real application, this would send the data to a backend
    console.log(formData);
  };

  return (
    <section className="py-16 bg-white" id="booking">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="md:flex">
            <div className="md:w-1/2 p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">
                Ready to secure your family's future?
              </h2>
              <p className="mb-8 text-blue-100">
                Schedule a free, no-obligation consultation with one of our insurance experts
                to discuss your personalized recommendations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-full">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Expert Guidance</h3>
                    <p className="text-blue-100">Get personalized advice from licensed professionals.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-full">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Flexible Scheduling</h3>
                    <p className="text-blue-100">Choose a time that works best for your schedule.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-full">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone or Video Chat</h3>
                    <p className="text-blue-100">Consult from the comfort of your home.</p>
                  </div>
                </div>
                
                <div className="hidden md:block mt-12">
                  <p className="font-medium mb-4">Trusted by:</p>
                  <div className="flex space-x-6">
                    <div className="bg-white/10 px-4 py-2 rounded">
                      <span className="text-lg font-semibold">StateLife</span>
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded">
                      <span className="text-lg font-semibold">NationalGuard</span>
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded">
                      <span className="text-lg font-semibold">ProtectPlus</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-white p-12">
              {step === 1 ? (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Book Your Free Consultation
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          placeholder="John Smith"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="you@example.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="day" className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Day (Wed-Sat)
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Calendar className="h-5 w-5 text-gray-400" />
                          </div>
                           <select
                            id="day"
                            name="day"
                            value={formData.day}
                            onChange={(e) => setFormData({ ...formData, day: e.target.value })}
                            required
                            className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="">Select a day</option>
                            <option value="3:00 PM">Wednesday</option>
                            <option value="4:00 PM">Thursday</option>
                            <option value="5:00 PM">Friday</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Time
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Clock className="h-5 w-5 text-gray-400" />
                          </div>
                          <select
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                            required
                            className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="">Select a time</option>
                            <option value="3:00 PM">3:00 PM</option>
                            <option value="4:00 PM">4:00 PM</option>
                            <option value="5:00 PM">5:00 PM</option>
                            <option value="6:00 PM">6:00 PM</option>
                            <option value="7:00 PM">7:00 PM</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Any specific questions? (Optional)
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
                          <MessageSquare className="h-5 w-5 text-gray-400" />
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={3}
                          className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          placeholder="I'm interested in learning more about..."
                        ></textarea>
                      </div>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors"
                      >
                        Schedule Consultation
                      </button>
                      <p className="text-xs text-gray-500 mt-2 text-center">
                        By submitting this form, you agree to our privacy policy and terms of service.
                      </p>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Your consultation has been scheduled. We've sent a confirmation email to {formData.email} with all the details.
                  </p>
                  <div className="border-t border-gray-200 pt-6 mt-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Your appointment details:</h4>
                    <p className="text-gray-600">
                      <span className="block"><strong>Day:</strong> {formData.day}</span>
                      <span className="block"><strong>Time:</strong> {formData.time} EST</span>
                    </p>
                  </div>
                  <button
                    onClick={() => setStep(1)}
                    className="mt-8 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-6 py-2 rounded-lg transition-colors"
                  >
                    Schedule Another Appointment
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;