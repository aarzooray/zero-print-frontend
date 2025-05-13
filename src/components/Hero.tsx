
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import ComingSoonDialog from "./ComingSoonDialog";

const Hero: React.FC = () => {
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);

  // py-4 md:py-28 lg:py-32
  return (
    <section className="relative border-red-900   verflow-hidden ">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in ">
            <div className="inline-block mb-2 bg-zeroprint-green/10 px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-zeroprint-green">Carbon Removal That Matters</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-zeroprint-green">
              Offset Your Carbon Footprint
              <span className="block text-zeroprint-brown mt-2">Empower Indian Farms</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl">
              Join the movement to remove 750,000 tonnes of CO₂ by 2030 using Enhanced Rock Weathering (ERW) 
              in India's farmlands.
            </p>
            
            <div className="flex flex-wrap gap-5 pt-4">
              <a href="#join-waitlist" className="btn-primary shadow-lg shadow-zeroprint-green/20 transform transition-all duration-300 hover:scale-[1.02]">
                Join The Waitlist
              </a>
              <button 
                onClick={() => setIsComingSoonOpen(true)}
                className="btn-secondary border-2 transform transition-all duration-300 hover:scale-[1.02]"
              >
                Explore Projects
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-7 pt-6">
              <a href="#business" className="btn-tertiary group">
                <span>For Businesses</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#individual" className="btn-tertiary group">
                <span>For Individuals</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl animate-fade-in [animation-delay:300ms] transform transition-all duration-700 hover:shadow-zeroprint-green/10 hover:-translate-y-1">
              {/* <img
                src="https://images.unsplash.com/photo-1565457210787-eef50b93b812?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Indian farmland"
                className="w-full h-[400px] md:h-[500px] object-cover"
              /> */}
              <img
                src="https://plus.unsplash.com/premium_photo-1694475528747-0fa268e4c91f?q=80&w=2198&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Indian farmland"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            
            
            <div className="absolute -z-10 -inset-4 bg-zeroprint-green/5 rounded-3xl -rotate-3"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute -z-10 top-0 left-0 right-0 h-full bg-gradient-to-br from-zeroprint-cream/30 to-zeroprint-green/5"></div>
      <div className="absolute -z-10 bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white to-transparent"></div>

      <ComingSoonDialog
        open={isComingSoonOpen}
        onOpenChange={setIsComingSoonOpen}
        featureName="Explore Projects"
      />
    </section>
  );
};

export default Hero;
