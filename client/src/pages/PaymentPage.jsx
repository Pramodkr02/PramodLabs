import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const PaymentPage = () => {
  const [searchParams] = useSearchParams();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const navigate = useNavigate();

  const plan = searchParams.get("plan");

  const planDetails = {
    weekly: { name: "Weekly Plan", price: "₹99", duration: "7 days" },
    monthly: { name: "Monthly Plan", price: "₹299", duration: "30 days" },
    yearly: { name: "Yearly Plan", price: "₹2,999", duration: "365 days" },
  };

  const currentPlan = planDetails[plan] || planDetails.monthly;

  const paymentMethods = [
    {
      id: "razorpay",
      name: "Razorpay",
      icon: "💳",
      description: "Secure online payment gateway",
      popular: true,
    },
    {
      id: "upi",
      name: "BHIM UPI",
      icon: "📱",
      description: "Instant UPI payments",
      popular: true,
    },
    {
      id: "gpay",
      name: "Google Pay",
      icon: "🤖",
      description: "Quick & secure payments",
    },
    {
      id: "netbanking",
      name: "Net Banking",
      icon: "🏦",
      description: "Direct bank transfer",
    },
    {
      id: "debit",
      name: "Debit Card",
      icon: "💳",
      description: "Visa, Mastercard, RuPay",
    },
    {
      id: "wallet",
      name: "Digital Wallets",
      icon: "👛",
      description: "Paytm, PhonePe, Amazon Pay",
    },
  ];

  const handlePaymentMethodSelect = (methodId) => {
    setSelectedPaymentMethod(methodId);
  };

  const handlePayment = async () => {
    if (!selectedPaymentMethod) return;

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setShowAnimation(true);

      // Show success animation for 3 seconds
      setTimeout(() => {
        setPaymentSuccess(true);

        // Redirect to homepage after 2 seconds
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }, 3000);
    }, 3000);
  };

  const getPaymentForm = () => {
    switch (selectedPaymentMethod) {
      case "razorpay":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Card Number"
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="CVV"
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Cardholder Name"
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        );

      case "upi":
        return (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="UPI ID (e.g., name@bank)"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Or scan QR code</p>
              <div className="w-32 h-32 bg-gray-200 rounded-xl mx-auto flex items-center justify-center">
                <span className="text-4xl">📱</span>
              </div>
            </div>
          </div>
        );

      case "gpay":
        return (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Google Pay UPI ID"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">
                Or use Google Pay app
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold">
                Open Google Pay
              </button>
            </div>
          </div>
        );

      case "netbanking":
        return (
          <div className="space-y-4">
            <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Select your bank</option>
              <option>SBI</option>
              <option>HDFC Bank</option>
              <option>ICICI Bank</option>
              <option>Axis Bank</option>
              <option>Kotak Mahindra Bank</option>
              <option>Yes Bank</option>
              <option>Other Banks</option>
            </select>
            <input
              type="text"
              placeholder="Account Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        );

      case "debit":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Card Number"
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="CVV"
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Cardholder Name"
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <input
              type="password"
              placeholder="ATM PIN"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        );

      case "wallet":
        return (
          <div className="space-y-4">
            <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Select wallet</option>
              <option>Paytm</option>
              <option>PhonePe</option>
              <option>Amazon Pay</option>
              <option>MobiKwik</option>
            </select>
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        );

      default:
        return null;
    }
  };

  if (showAnimation) {
    return (
      <div className="  bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-bounce mb-8">
            <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-20 h-20 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-green-600 mb-4">
            Processing Payment...
          </h2>
          <p className="text-xl text-gray-600">
            Please wait while we complete your transaction
          </p>
        </div>
      </div>
    );
  }

  if (paymentSuccess) {
    return (
      <div className="  bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-ping mb-8">
            <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-20 h-20 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-green-600 mb-4">
            Payment Successful! 🎉
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Welcome to MagOne Premium!
          </p>
          <div className="animate-pulse">
            <p className="text-lg text-gray-700">Redirecting to homepage...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="  bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Your Payment
          </h1>
          <p className="text-xl text-gray-600">
            Choose your preferred payment method to unlock premium access
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Order Summary
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Plan:</span>
                  <span className="font-semibold text-gray-900">
                    {currentPlan.name}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold text-gray-900">
                    {currentPlan.duration}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-semibold text-gray-900">
                    {currentPlan.price}
                  </span>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">
                    Total:
                  </span>
                  <span className="text-2xl font-bold text-blue-600">
                    {currentPlan.price}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Select Payment Method
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    onClick={() => handlePaymentMethodSelect(method.id)}
                    className={`p-4 border-2 rounded-2xl cursor-pointer transition-all duration-300 ${
                      selectedPaymentMethod === method.id
                        ? "border-blue-500 bg-blue-50 ring-4 ring-blue-200"
                        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{method.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-gray-900">
                            {method.name}
                          </h4>
                          {method.popular && (
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Payment Form */}
              {selectedPaymentMethod && (
                <div className="border-t pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Payment Details for{" "}
                    {
                      paymentMethods.find((m) => m.id === selectedPaymentMethod)
                        ?.name
                    }
                  </h4>
                  {getPaymentForm()}
                </div>
              )}
            </div>

            {/* Pay Button */}
            <div className="text-center">
              <button
                onClick={handlePayment}
                disabled={!selectedPaymentMethod || isProcessing}
                className={`px-12 py-4 rounded-2xl text-xl font-bold transition-all duration-300 ${
                  selectedPaymentMethod && !isProcessing
                    ? "bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700 hover:shadow-2xl hover:scale-105 cursor-pointer"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    Processing...
                  </div>
                ) : (
                  `Pay ${currentPlan.price}`
                )}
              </button>

              {!selectedPaymentMethod && (
                <p className="text-gray-500 mt-4">
                  Please select a payment method to continue
                </p>
              )}
            </div>

            {/* Security Info */}
            <div className="mt-8 bg-blue-50 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <h4 className="font-semibold text-blue-900">Secure Payment</h4>
              </div>
              <p className="text-blue-800 text-sm">
                Your payment information is encrypted and secure. We use
                industry-standard SSL encryption to protect your data. All
                transactions are processed through secure payment gateways.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
