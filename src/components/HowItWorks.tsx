
import React from "react";
import  { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

// Form data type
interface FormData {
  name: string;
  email: string;
  message: string;
}

function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post<{ message: string }>('/api/form', formData);
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert('Error submitting form');
    }
  }
}




const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2 className="heading-lg text-center text-zeroprint-green mb-12">
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative">
            <div className="bg-zeroprint-green/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-zeroprint-green">1</span>
            </div>
            <h3 className="heading-sm mb-3">Fund ERW Projects</h3>
            <p className="text-gray-600">
              Businesses and individuals fund Enhanced Rock Weathering projects. Your investment directly supports farmers implementing carbon capture.
            </p>
            
            {/* Connector line - visible on desktop only */}
            <div className="hidden md:block absolute top-7 left-[calc(100%_-_8px)] w-16 border-t-2 border-dashed border-zeroprint-green/30"></div>
          </div>
          
          <div className="relative">
            <div className="bg-zeroprint-green/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-zeroprint-green">2</span>
            </div>
            <h3 className="heading-sm mb-3">Farmers Apply Basalt</h3>
            <p className="text-gray-600">
              Indian farmers spread crushed basalt rock on their fields. We provide training, equipment, and ongoing support for maximum impact.
            </p>
            
            {/* Connector line - visible on desktop only */}
            <div className="hidden md:block absolute top-7 left-[calc(100%_-_8px)] w-16 border-t-2 border-dashed border-zeroprint-green/30"></div>
          </div>
          
          <div>
            <div className="bg-zeroprint-green/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-zeroprint-green">3</span>
            </div>
            <h3 className="heading-sm mb-3">Verified & Certified</h3>
            <p className="text-gray-600">
              Carbon capture is measured, verified by third parties, and certified. You receive documentation of your climate impact.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="paragraph mb-8 max-w-2xl mx-auto">
            Our approach combines rigorous science with transparent verification. Every tonne of CO₂ removed is backed by data and certification.
          </p>
          <a href="#join-waitlist" className="btn-primary">
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
