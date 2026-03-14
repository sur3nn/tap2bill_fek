
import React from 'react';
import { Mail, Phone, MapPin, Send, ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ContactUs: React.FC = () => {
  const address = "First Floor, 246, Cuddalore Main Rd, Ammapet, Salem, Tamil Nadu 636003";
  const coords = "11.6604296,78.1876488";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${coords}`;

  return (
    <div className="bg-white">
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-black text-[#FF5722] mb-4">Book a Free Demo</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tell us about your business. We will show how Tap2Bill can simplify billing and reports.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <ScrollReveal direction="left" className="space-y-12">
              <div>
                <h2 className="text-4xl font-black text-gray-900 mb-6">What Happens Next?</h2>
                <div className="space-y-6">
                  {[
                    "We contact you.",
                    "We understand your needs.",
                    "We show a live demo.",
                    "You start your 7-day free trial."
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-[#FF5722] font-black">
                        {i + 1}
                      </div>
                      <p className="text-lg font-bold text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 font-medium mt-8 italic">No commitment. Cancel anytime.</p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-[#FF5722] flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900">Email Us</h4>
                    <p className="text-gray-600 font-bold">support@cmatrix.in</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-[#FF5722] flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900">Call Us</h4>
                    <p className="text-gray-600 font-bold">+91 9994555400</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-[#FF5722] flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900">Our Location</h4>
                    <p className="text-gray-600 font-bold max-w-xs">{address}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="bg-white rounded-[3rem] border border-gray-100 shadow-2xl p-10 md:p-14">
              <form className="space-y-6">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 px-6 focus:border-[#FF5722] outline-none transition-all font-medium"
                />
                <input 
                  type="text" 
                  placeholder="Business Name" 
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 px-6 focus:border-[#FF5722] outline-none transition-all font-medium"
                />
                <input 
                  type="tel" 
                  placeholder="Mobile Number" 
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 px-6 focus:border-[#FF5722] outline-none transition-all font-medium"
                />
                <input 
                  type="text" 
                  placeholder="Location" 
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 px-6 focus:border-[#FF5722] outline-none transition-all font-medium"
                />
                <textarea 
                  placeholder="Message" 
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 px-6 focus:border-[#FF5722] outline-none transition-all font-medium resize-none"
                ></textarea>
                <button className="w-full bg-[#FF5722] text-white py-5 rounded-2xl font-black text-xl hover:bg-[#E64A19] transition-all shadow-xl shadow-orange-500/20 active:scale-95 flex items-center justify-center gap-3">
                  <Send size={24} />
                  Request Demo
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[500px] w-full bg-gray-100">
        <iframe 
          title="Tap2Bill Salem Location"
          src={`https://maps.google.com/maps?q=${coords}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
          className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
          allowFullScreen
          loading="lazy"
        ></iframe>
        <div className="absolute top-8 right-8 z-10">
          <button 
            onClick={() => window.open(googleMapsUrl, '_blank')}
            className="bg-white text-gray-950 px-6 py-3 rounded-2xl font-black flex items-center gap-2 shadow-2xl hover:bg-orange-50 transition-colors border border-gray-100"
          >
            <ExternalLink size={18} className="text-[#FF5722]" />
            Show Large Map
          </button>
        </div>
      </section>
      
      <div className="py-12"></div>
    </div>
  );
};

export default ContactUs;
