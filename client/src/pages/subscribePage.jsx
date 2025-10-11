import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubscribePage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const plans = [
    {
      id: "weekly",
      name: "Weekly Plan",
      price: "₹99",
      duration: "7 days",
      features: [
        "Access to all premium articles",
        "Ad-free reading experience",
        "Priority customer support",
        "Weekly newsletter",
        "Early access to new features",
      ],
      popular: false,
      savings: null,
    },
    {
      id: "monthly",
      name: "Monthly Plan",
      price: "₹299",
      duration: "30 days",
      features: [
        "Everything in Weekly Plan",
        "Exclusive monthly content",
        "Download articles offline",
        "Personal reading list",
        "Monthly insights report",
      ],
      popular: true,
      savings: "Save ₹97",
    },
    {
      id: "yearly",
      name: "Yearly Plan",
      price: "₹2,999",
      duration: "365 days",
      features: [
        "Everything in Monthly Plan",
        "Annual premium content",
        "VIP community access",
        "Priority feature requests",
        "Annual savings of ₹589",
      ],
      popular: false,
      savings: "Save ₹589",
    },
  ];

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
  };

  const handleSubscribe = async () => {
    if (!selectedPlan) return;

    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
      navigate(`/payment?plan=${selectedPlan}`);
    }, 1000);
  };

  return (
    <div className="  bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unlock premium content, ad-free experience, and exclusive features.
            Start your journey with MagOne today!
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-3xl shadow-xl p-8 transition-all duration-300 hover:scale-105 ${
                selectedPlan === plan.id
                  ? "ring-4 ring-blue-500 ring-opacity-50 shadow-2xl"
                  : "hover:shadow-2xl"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Savings Badge */}
              {plan.savings && (
                <div className="absolute -top-4 right-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {plan.savings}
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 ml-2">/{plan.duration}</span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8 text-left">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Select Button */}
                <button
                  onClick={() => handlePlanSelect(plan.id)}
                  className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                    selectedPlan === plan.id
                      ? "bg-blue-600 text-white shadow-lg transform scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md"
                  }`}
                >
                  {selectedPlan === plan.id ? "Selected" : "Select Plan"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe Button */}
        <div className="text-center">
          <button
            onClick={handleSubscribe}
            disabled={!selectedPlan || isLoading}
            className={`px-12 py-4 rounded-2xl text-xl font-bold transition-all duration-300 ${
              selectedPlan && !isLoading
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl hover:scale-105 cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                Processing...
              </div>
            ) : (
              "Continue to Payment"
            )}
          </button>

          {!selectedPlan && (
            <p className="text-gray-500 mt-4">
              Please select a plan to continue
            </p>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose MagOne Premium?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Lightning Fast
                </h4>
                <p className="text-gray-600 text-sm">
                  Get instant access to premium content
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Secure & Safe
                </h4>
                <p className="text-gray-600 text-sm">
                  Your data is protected with bank-level security
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  24/7 Support
                </h4>
                <p className="text-gray-600 text-sm">
                  Round-the-clock customer support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribePage;
