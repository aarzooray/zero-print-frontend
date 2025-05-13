import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

// Form data type
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  interest: string;
}

const CallToAction: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    interest: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const res = await axios.post<{ message: string }>(
        "http://localhost:3400/waitlist/register",
        formData
      );
      setSuccessMessage(res.data.message || "Successfully submitted!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        interest: "",
      });
    } catch (err) {
      console.error(err);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="join-waitlist" className="section-padding bg-zeroprint-green/5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="heading-lg text-zeroprint-green mb-6">
          Ready to Take Real Climate Action?
        </h2>
        <p className="paragraph mb-8">
          Join ZeroPrint's waitlist and be part of verified carbon removal.
        </p>

        {/* Waitlist form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-zeroprint-green focus:border-zeroprint-green"
                  placeholder="Your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-zeroprint-green focus:border-zeroprint-green"
                  placeholder="Your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-zeroprint-green focus:border-zeroprint-green"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                I'm interested as a:
              </label>
              <select
                id="interest"
                name="interest"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-zeroprint-green focus:border-zeroprint-green"
                value={formData.interest}
                onChange={handleChange}
                required
              >
                <option value="">Please select</option>
                <option value="business">Business</option>
                <option value="individual">Individual</option>
                <option value="farmer">Farmer</option>
                <option value="partner">Potential Partner</option>
              </select>
            </div>

            <input
              type="submit"
              className="w-full btn-primary py-3"
              value={loading ? "Submitting..." : "Join the Waitlist"}
              disabled={loading}
            />
          </form>

          {/* Success message */}
          {successMessage && (
            <div className="mt-4 text-green-600 font-medium">
              ✅ {successMessage}
            </div>
          )}

          {/* Error message */}
          {errorMessage && (
            <div className="mt-4 text-red-600 font-medium">
              ❌ {errorMessage}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
