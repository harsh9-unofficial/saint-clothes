import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative text-[#F6F6F6] w-full md:h-[820px] xl:h-[850px] 2xl:min-h-screen bg-[#527557]">
      {/* Background Image for Medium and Larger Screens */}
      <img
        src="/images/Footer.png"
        alt="Footer background"
        className="hidden md:block absolute inset-0 w-full h-full z-0"
      />

      {/* Content Container */}
      <div className="relative md:absolute z-10 w-full h-full flex flex-col justify-end py-2">
        <div className="container mx-auto py-4 sm:py-6 lg:py-10 xl:py-14 2xl:py-20 border-b grid grid-cols-1 sm:grid-cols-12 lg:grid-cols-16 gap-y-6 mg:gap-y-4">
          {/* Left Links */}
          <div className="flex flex-col space-y-2 sm:space-y-3 text-center justify-center col-span-1 sm:col-span-3 lg:col-span-4 text-lg sm:text-xl lg:text-2xl">
            <Link to="/ourstory" className="hover:underline py-3 sm:py-4">
              About
            </Link>
            <Link to="/allproducts" className="hover:underline py-3 sm:py-4">
              Product
            </Link>
            <Link to="/contact" className="hover:underline py-3 sm:py-4">
              Contact Us
            </Link>
            <Link to="#" className="hover:underline py-3 sm:py-4">
              Blog
            </Link>
          </div>

          {/* Center Newsletter */}
          <div className="text-center py-5 md:py-0 col-span-1 sm:col-span-6 lg:col-span-8 border-t border-b md:border-t-0 md:border-b-0 md:border-r md:border-l">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold py-3 sm:py-4">
              Get Updates
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl py-3 sm:py-4 mx-auto w-[90%]">
              Subscribe to our newsletter to receive updates on new arrivals,
              special offers, and other discount information.
            </p>
            <div className="grid grid-cols-1 gap-4 py-4 px-4 sm:px-7 lg:px-10 xl:px-0 mx-auto w-full md:w-[90%] xl:w-[75%]">
              <input
                type="email"
                placeholder="*Email"
                className="w-full px-4 py-3 sm:py-4 rounded placeholder-[#F6F6F6] text-[#F6F6F6] border border-[#F6F6F6] focus:outline-none"
              />
              <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 space-y-4 lg:space-y-0">
                <input
                  type="text"
                  placeholder="*First Name"
                  className="w-full col-span-2 px-4 py-3 sm:py-4 rounded placeholder-[#F6F6F6] text-[#F6F6F6] border border-[#F6F6F6] focus:outline-none"
                />
                <button
                  type="button"
                  className="bg-[#F6F6F6] text-[#527557] px-4 py-3 sm:py-4 col-span-1 rounded cursor-pointer text-lg sm:text-xl font-semibold w-full"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>

          {/* Right Links */}
          <div className="flex flex-col space-y-2 sm:space-y-3 text-center justify-center col-span-1 sm:col-span-3 lg:col-span-4 text-lg sm:text-xl lg:text-2xl">
            <Link to="/privacypolicy" className="hover:underline py-3 sm:py-4">
              Privacy & Policy
            </Link>
            <Link
              to="/termsandconditions"
              className="hover:underline py-3 sm:py-4"
            >
              Terms & Condition
            </Link>
            <Link to="/shippingpolicy" className="hover:underline py-3 sm:py-4">
              Shipping Policy
            </Link>
            <Link to="/returnpolicy" className="hover:underline py-3 sm:py-4">
              Return Policy
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-lg sm:text-xl xl:text-2xl text-[#F6F6F6] mt-4 sm:mt-6 pb-4">
          © 2025 Saint the Clothing Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
