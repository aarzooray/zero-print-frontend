
import React from "react";

const ErwSection: React.FC = () => {
  return (
    <section id="solutions" className="section-padding bg-zeroprint-green/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-xl overflow-hidden shadow-lg order-2 lg:order-1">
          <img
            src="https://www.hindustantimes.com/ht-img/img/2023/05/22/550x309/b_1684774433184_1684774450502.png"
            alt="Crushed basalt being applied to soil"
            className="w-full h-[400px] object-cover"
          />
        </div>
        
        <div className="order-1 lg:order-2">
          <h2 className="heading-lg text-zeroprint-green mb-6">
            Why Enhanced Rock Weathering (ERW)?
          </h2>
          <p className="paragraph mb-6">
            Enhanced Rock Weathering (ERW) is a proven method where crushed basalt is applied to 
            farmland, absorbing CO₂ and rejuvenating soil. A solution where climate meets agriculture.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="bg-zeroprint-green/10 p-2 rounded-full mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-zeroprint-green">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Carbon Capture</h3>
                <p className="text-gray-600">
                  Crushed basalt naturally absorbs CO₂ from the air through chemical reactions, storing it securely for thousands of years.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-zeroprint-green/10 p-2 rounded-full mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-zeroprint-green">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Soil Health</h3>
                <p className="text-gray-600">
                  Basalt enriches soil with vital nutrients like phosphorus, potassium, and calcium, increasing fertility.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-zeroprint-green/10 p-2 rounded-full mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-zeroprint-green">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Science-Backed</h3>
                <p className="text-gray-600">
                  ERW is supported by extensive scientific research and real-world field trials.
                </p>
              </div>
            </div>
          </div>
          
          <a href="#how-it-works" className="btn-primary">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default ErwSection;
