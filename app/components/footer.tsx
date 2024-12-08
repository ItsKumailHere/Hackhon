// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="block  bg-white text-black border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h1 className="text-lg font-bold">Funiro.</h1>
              <address className="not-italic text-sm text-gray-500">
                400 University Drive Suite 200 Coral Gables, <br />
                FL 33134 USA
              </address>
            </div> 
  
            {/* Links Section */} 
            <div>
              <h3 className="text-sm font-medium mb-4 text-gray-400">Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">Shop</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
  
            {/* Help Section */}
            <div>
              <h3 className="text-sm font-medium mb-4 text-gray-400">Help</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Payment Options</a></li>
                <li><a href="#" className="hover:underline">Returns</a></li>
                <li><a href="#" className="hover:underline">Privacy Policies</a></li>
              </ul>
            </div>
  
            {/* Newsletter Section */}
            <div>
              <h3 className="text-sm font-medium mb-4 text-gray-400">Newsletter</h3>
              <form className="flex items-center gap-3">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full border-b border-b-black text-sm focus:outline-none "
                />
                <button
                  type="submit"
                  className=" text-gray-950 border-b-black border-b rounded-r-md hover:bg-gray-800"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
  
          {/* Footer Bottom Section */}
          <div className="mt-8 border-t border-gray-200 pt-4 text-sm text-gray-500 text-center">
            © 2023 Funiro. All rights reserved
          </div>
        </div>
      </footer>
    );
  }