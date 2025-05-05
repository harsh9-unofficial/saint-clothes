import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import { CgShoppingBag } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { Menu, ChevronDown } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [collectionOpen, setCollectionOpen] = useState(false);

  const shopRef = useRef(null);
  const collectionRef = useRef(null);

  const location = useLocation(); // Hook to get the current location

  const toggleDropdown = (menu) => {
    if (menu === "shop") {
      setShopOpen(!shopOpen);
      if (!shopOpen) setCollectionOpen(false); // Close collection if shop is opened
    } else if (menu === "collection") {
      setCollectionOpen(!collectionOpen);
      if (!collectionOpen) setShopOpen(false); // Close shop if collection is opened
    }
  };

  // Close dropdowns whenever the route changes
  useEffect(() => {
    setShopOpen(false);
    setCollectionOpen(false);
  }, [location]);

  return (
    <header className="shadow-md relative top-0 z-50 bg-white">
      <div className="container mx-auto flex justify-between items-center px-2 py-3 md:py-5">
        {/* Left nav (Desktop) */}
        <div className="hidden md:flex space-x-6 lg:text-xl items-center">
          <Link
            to="/newarrivals"
            className="hover:text-[#527557] font-semibold"
          >
            New Arrivals
          </Link>

          {/* Shop */}
          <div ref={shopRef}>
            <button
              onClick={() => toggleDropdown("shop")}
              className="flex items-center hover:text-[#527557] font-semibold cursor-pointer"
            >
              Shop
              <ChevronDown
                size={16}
                className={`ml-1 transition-transform duration-200 ${
                  shopOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {shopOpen && (
              <div className="absolute left-0 top-full w-full bg-white shadow-lg border-t z-40">
                <div className="container mx-auto px-4 py-4 grid grid-rows-3 grid-flow-col gap-4">
                  <Link
                    to="/allproducts"
                    className="hover:underline font-semibold"
                  >
                    All Product
                  </Link>
                  <Link
                    to="/shop/kids"
                    className="hover:underline font-semibold"
                  >
                    Kids
                  </Link>
                  <Link
                    to="/shop/man"
                    className="hover:underline font-semibold"
                  >
                    Man
                  </Link>
                  <Link
                    to="/shop/accessories"
                    className="hover:underline font-semibold"
                  >
                    Accessories
                  </Link>
                  <Link
                    to="/shop/woman"
                    className="hover:underline font-semibold"
                  >
                    Woman
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Collection */}
          <div ref={collectionRef}>
            <button
              onClick={() => toggleDropdown("collection")}
              className="flex items-center hover:text-[#527557] font-semibold cursor-pointer"
            >
              Collection
              <ChevronDown
                size={16}
                className={`ml-1 transition-transform duration-200 ${
                  collectionOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {collectionOpen && (
              <div className="absolute left-0 top-full w-full bg-white shadow-xl border-t z-40">
                <div className="container mx-auto px-2 py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Link
                    to="/collection/classic-green-tee"
                    className="group text-center relative"
                  >
                    <div className="absolute inset-0 flex items-end justify-center p-2 xl:pb-4 2xl:pb-5 rounded-t-lg">
                      <div className="lg:text-2xl font-medium text-white">
                        Classic Green Tee
                      </div>
                    </div>
                    <img
                      src="/images/Collection1.png"
                      alt="Classic Green Tee"
                      className="rounded-lg w-full h-full object-cover transition"
                    />
                  </Link>

                  {/* Original: Yellow Dress */}
                  <Link
                    to="/collection/yellow-dress"
                    className="group text-center relative"
                  >
                    <div className="absolute inset-0 flex items-end justify-center p-2 xl:pb-4 2xl:pb-5 rounded-t-lg">
                      <div className="lg:text-2xl font-medium text-white">
                        Yellow Dress
                      </div>
                    </div>
                    <img
                      src="/images/Collection2.png"
                      alt="Yellow Dress"
                      className="rounded-lg w-full h-full object-cover transition"
                    />
                  </Link>

                  {/* Original: Camo Jacket */}
                  <Link
                    to="/collection/camo-jacket"
                    className="group text-center relative"
                  >
                    <div className="absolute inset-0 flex items-end justify-center p-2 xl:pb-4 2xl:pb-5 rounded-t-lg">
                      <div className="lg:text-2xl font-medium text-white">
                        Camo Jacket
                      </div>
                    </div>
                    <img
                      src="/images/Collection3.png"
                      alt="Camo Jacket"
                      className="rounded-lg w-full h-full object-cover transition"
                    />
                  </Link>

                  {/* Original: Black Dress */}
                  <Link
                    to="/collection/black-dress"
                    className="group text-center relative"
                  >
                    <div className="absolute inset-0 flex items-end justify-center p-2 xl:pb-4 2xl:pb-5 rounded-t-lg">
                      <div className="lg:text-2xl font-medium text-white">
                        Black Dress
                      </div>
                    </div>
                    <img
                      src="/images/Collection4.png"
                      alt="Black Dress"
                      className="rounded-lg w-full h-full object-cover transition"
                    />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/ourstory" className="hover:text-[#527557] font-semibold">
            Our Story
          </Link>
        </div>

        {/* Center logo */}
        <div className="text-center text-green-800 font-bold lg:mr-35">
          <Link to="/">
            <img src="/images/Logo.png" alt="Saint" className="w-full" />
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center space-x-4">
          <button className="hover:text-[#527557] cursor-pointer">
            <LuSearch className="text-[24px] lg:text-[26px]" />
          </button>
          <button className="hover:text-[#527557] cursor-pointer">
            <Link to="/cart">
              <CgShoppingBag className="text-[24px] lg:text-[26px]" />
            </Link>
          </button>
          <button className="hover:text-[#527557] cursor-pointer">
            <Link to="/login">
              <FiUser className="text-[24px] lg:text-[26px]" />
            </Link>
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
          >
            {mobileOpen ? <RxCross1 size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md border-t px-4 py-3 space-y-4 lg:text-xl z-50">
          <Link to="/newarrivals" className="block">
            New Arrivals
          </Link>

          <div>
            <button
              className="w-full flex justify-between items-center"
              onClick={() => toggleDropdown("shop")}
            >
              Shop
              <ChevronDown
                className={`transition-transform duration-200 ${
                  shopOpen ? "rotate-180" : ""
                }`}
                size={16}
              />
            </button>
            {shopOpen && (
              <div className="grid grid-cols-2 gap-2 mt-2 pl-2">
                <Link to="/allproducts" className="block text-gray-600">
                  All Product
                </Link>
                <Link to="/shop/kids" class className="block text-gray-600">
                  Kids
                </Link>
                <Link to="/shop/man" className="block text-gray-600">
                  Man
                </Link>
                <Link to="/shop/accessories" className="block text-gray-600">
                  Accessories
                </Link>
                <Link to="/shop/woman" className="block text-gray-600">
                  Woman
                </Link>
              </div>
            )}
          </div>

          <div>
            <button
              className="w-full flex justify-between items-center"
              onClick={() => toggleDropdown("collection")}
            >
              Collection
              <ChevronDown
                className={`transition-transform duration-200 ${
                  collectionOpen ? "rotate-180" : ""
                }`}
                size={16}
              />
            </button>
            {collectionOpen && (
              <div className="mt-4 grid grid-cols-2 gap-4">
                <Link
                  to="/collection/classic-green-tee"
                  className="relative group"
                >
                  <img
                    src="/images/Collection1.png"
                    alt="Classic Green Tee"
                    className="rounded-lg w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-end justify-center p-2 rounded-lg">
                    <span className="text-white text-sm font-medium">
                      Classic Green Tee
                    </span>
                  </div>
                </Link>

                <Link to="/collection/yellow-dress" className="relative group">
                  <img
                    src="/images/Collection2.png"
                    alt="Yellow Dress"
                    className="rounded-lg w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-end justify-center p-2 rounded-lg">
                    <span className="text-white text-sm font-medium">
                      Yellow Dress
                    </span>
                  </div>
                </Link>

                <Link to="/collection/camo-jacket" className="relative group">
                  <img
                    src="/images/Collection3.png"
                    alt="Camo Jacket"
                    className="rounded-lg w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-end justify-center p-2 rounded-lg">
                    <span className="text-white text-sm font-medium">
                      Camo Jacket
                    </span>
                  </div>
                </Link>

                <Link to="/collection/black-dress" className="relative group">
                  <img
                    src="/images/Collection4.png"
                    alt="Black Dress"
                    className="rounded-lg w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-end justify-center p-2 rounded-lg">
                    <span className="text-white text-sm font-medium">
                      Black Dress
                    </span>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link to="/ourstory" className="block">
            Our Story
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
