import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {

  const testimonials = [
    {
      name: "Ravi Kumar",
      role: "Restaurant Owner",
      city: "Chennai",
      content:
        "Tap2Bill is one of the best POS billing software for restaurants in India. Our restaurant in Chennai switched from manual billing to Tap2Bill and the billing speed improved a lot. Order management, bill printing, and sales reports are very easy to use.",
      avatar: "https://picsum.photos/seed/ravi/80/80"
    },
    {
      name: "Priya",
      role: "Cafe Owner",
      city: "Bangalore",
      content:
        "We were looking for a simple restaurant billing software and Tap2Bill is perfect. The POS system is fast, easy to learn, and works smoothly even during peak hours.",
      avatar: "https://picsum.photos/seed/priya/80/80"
    },
    {
      name: "Suresh Kumar",
      role: "Restaurant Manager",
      city: "Coimbatore",
      content:
        "If you are searching for restaurant billing software in India, Tap2Bill is a great choice. The interface is simple and the support team is very helpful.",
      avatar: "https://picsum.photos/seed/suresh/80/80"
    },
    {
      name: "Kavya Reddy",
      role: "Cafe Owner",
      city: "Bangalore",
      content:
        "Tap2Bill cloud POS software is very useful for managing our cafe outlets. We can track sales, update menu items and monitor reports easily.",
      avatar: "https://picsum.photos/seed/kavya/80/80"
    },
    {
  name: "Arun Prakash",
  role: "Restaurant Owner",
  city: "Salem",
  content:
    "Tap2Bill made our restaurant billing much faster. Earlier we used manual billing, but now everything from order to bill printing is very smooth. The POS system is simple and perfect for restaurants.",
  avatar: "https://picsum.photos/seed/arun/80/80"
},
{
  name: "Meena Lakshmi",
  role: "Cafe Owner",
  city: "Madurai",
  content:
    "We started using Tap2Bill for our cafe and it works perfectly. Menu management, billing and reports are very easy to handle. I recommend Tap2Bill for small cafes and food businesses.",
  avatar: "https://picsum.photos/seed/meena/80/80"
},
{
  name: "Karthik Raj",
  role: "Hotel Manager",
  city: "Tiruchirappalli",
  content:
    "Tap2Bill POS software helped us manage restaurant billing efficiently. Staff learned the system very quickly and the billing speed improved a lot during busy hours.",
  avatar: "https://picsum.photos/seed/karthik/80/80"
},
{
  name: "Divya Shankar",
  role: "Juice Shop Owner",
  city: "Erode",
  content:
    "Tap2Bill is a simple and affordable billing software for small food businesses. Our juice shop uses it daily and the billing process is quick and easy.",
  avatar: "https://picsum.photos/seed/divya/80/80"
},
{
  name: "Praveen Kumar",
  role: "Fast Food Shop Owner",
  city: "Coimbatore",
  content:
    "We searched for restaurant billing software in India and found Tap2Bill. It is easy to use, the interface is clean and the reports help us track daily sales.",
  avatar: "https://picsum.photos/seed/praveen/80/80"
},
{
  name: "Senthil Kumar",
  role: "Restaurant Owner",
  city: "Tirunelveli",
  content:
    "Tap2Bill restaurant POS software helped us simplify our billing process. The interface is very easy and our staff learned it quickly. Billing during busy hours is now much faster.",
  avatar: "https://picsum.photos/seed/senthil/80/80"
},
{
  name: "Lakshmi Narayanan",
  role: "Cafe Owner",
  city: "Chengalpattu",
  content:
    "Tap2Bill is one of the most user-friendly cafe billing software we have used. It works smoothly and the sales reports help us understand our daily business performance.",
  avatar: "https://picsum.photos/seed/lakshmi/80/80"
},
{
  name: "Manoj Kumar",
  role: "Restaurant Manager",
  city: "Vellore",
  content:
    "We implemented Tap2Bill POS in our restaurant and the billing process became much faster. Order management and bill printing are very simple to handle.",
  avatar: "https://picsum.photos/seed/manoj/80/80"
},
{
  name: "Harini Raj",
  role: "Bakery Owner",
  city: "Salem",
  content:
    "Tap2Bill is a great billing solution for small food businesses like bakeries and cafes. The system is simple, affordable and very easy to operate.",
  avatar: "https://picsum.photos/seed/harini/80/80"
},
{
  name: "Dinesh Kumar",
  role: "Fast Food Shop Owner",
  city: "Karur",
  content:
    "After switching to Tap2Bill cloud POS software, managing our fast food shop billing became very easy. Reports, menu updates and billing are all handled smoothly.",
  avatar: "https://picsum.photos/seed/dinesh/80/80"
}
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
    setIndex((prev) =>
  prev + 1 > testimonials.length - 3 ? 0 : prev + 1
);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-40 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#FF5722] font-bold text-sm tracking-widest uppercase mb-4 block">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Our happy clients
          </h2>

          <p className="text-gray-600 text-lg">
            Restaurants and cafés across India trust Tap2Bill to simplify billing
            and manage their business efficiently.
          </p>
        </div>

        <div className="relative w-full overflow-hidden">

          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
             transform: `translateX(-${index * (100 / 3)}%)`
            }}
          >

            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-full md:min-w-[33.33%] px-4"
              >

                <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all h-full">

                  <div className="flex flex-col items-center text-center">

                    <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-orange-50">
                      <img src={t.avatar} alt={t.name} />
                    </div>

                    <h4 className="text-xl font-black text-gray-900">
                      {t.name}
                    </h4>

                    <p className="text-sm text-gray-500 mb-4">
                      {t.role} • {t.city}
                    </p>

                    <div className="flex gap-1 text-orange-400 mb-6">
                      {[1,2,3,4,5].map(s => (
                        <Star key={s} size={14} fill="currentColor" />
                      ))}
                    </div>

                    <p className="text-gray-600 leading-relaxed italic">
                      {t.content}
                    </p>

                    <div className="mt-8 text-[#FF5722] opacity-20">
                      <Quote size={40}/>
                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;