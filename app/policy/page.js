import { FaShieldAlt, FaUserShield, FaLock } from "react-icons/fa";

export default function Policy() {
  return (
    <div className="  bg-gray-50 py-16">
      <div className="  mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FaShieldAlt className="mr-2" />
            Privacy & Policy
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-blue-500">Policy</span>
          </h1>
          <p className="text-lg text-gray-600">
            We are committed to protecting your privacy and ensuring
            transparency in our practices.
          </p>
        </div>

        {/* Policy Content */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <FaUserShield className="text-green-500 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Data Protection
                </h3>
                <p className="text-gray-600">
                  Your personal information is protected with industry-standard
                  security measures. We never share your data with third parties
                  without your explicit consent.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <FaLock className="text-purple-500 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Information Collection
                </h3>
                <p className="text-gray-600">
                  We only collect information that is necessary to provide our
                  services. This includes basic contact information and usage
                  data to improve your experience.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <FaShieldAlt className="text-orange-500 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Your Rights
                </h3>
                <p className="text-gray-600">
                  You have the right to access, modify, or delete your personal
                  information at any time. Contact us if you have any questions
                  about your data.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-center">
              For questions about our policy, contact us at{" "}
              <span className="text-blue-500 font-medium">
                privacy@pramodlabs.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
