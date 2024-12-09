import React from "react";

const Page = () => {
  return (
    <div className="flex justify-center items-start p-6 md:p-12 bg-gray-100 min-h-screen">
      <div className="max-w-5xl w-full bg-white rounded-md shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
          {/* Billing Details */}
          <div>
            <h2 className="text-lg font-bold mb-4">Billing details</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  id="companyName"
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium">
                  Country / Region
                </label>
                <select
                  id="country"
                  className="w-full px-4 py-2 border rounded-md"
                  defaultValue="Sri Lanka"
                >
                  <option value="Sri Lanka">Sri Lanka</option>
                </select>
              </div>
              <div>
                <label htmlFor="streetAddress" className="block text-sm font-medium">
                  Street address
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium">
                    Town / City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="province" className="block text-sm font-medium">
                    Province
                  </label>
                  <select
                    id="province"
                    className="w-full px-4 py-2 border rounded-md"
                    defaultValue="Western Province"
                  >
                    <option value="Western Province">Western Province</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium">
                    ZIP code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <h2 className="text-lg font-bold mb-4">Product</h2>
            <div className="border border-gray-300 rounded-md p-4 mb-6">
              <div className="flex justify-between">
                <span>Asgard sofa x 1</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between mt-4">
                <span>Subtotal</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-4">
                <span>Total</span>
                <span>Rs. 250,000.00</span>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-bold mb-4">Payment method</h2>
              <div>
                <label className="flex items-center mb-4">
                  <input
                    type="radio"
                    name="paymentMethod"
                    className="mr-2"
                    defaultChecked
                  />
                  Direct Bank Transfer
                </label>
                <label className="flex items-center">
                  <input type="radio" name="paymentMethod" className="mr-2" />
                  Cash On Delivery
                </label>
              </div>
            </div>
            <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800">
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;