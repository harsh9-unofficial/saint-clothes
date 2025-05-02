import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="px-4 py-10 lg:px-20 max-w-5xl mx-auto text-center">
      <div className="flex flex-col gap-6">
        {/* Contact Emails */}
        <p className="text-gray-700 mb-2 text-xl xl:text-2xl 2xl:text-3xl">
          for Customer Service, please email: <br />
          <a href="mailto:info@saint-thestore.com">
            info@saint-thestore.com
          </a>
        </p>
        <p className="text-gray-700 mb-4 text-xl xl:text-2xl 2xl:text-3xl">
          for Stockist Enquiries, PR and Collaboration, please email: <br />
          <a href="mailto:laura@saint-thestore.com">
            laura@saint-thestore.com
          </a>
          <br />
          alternatively, please fill out the form below
        </p>
      </div>

      {/* Icons */}
      <div className="flex justify-center space-x-6 py-10">
        <div className="bg-[#527557] text-white p-4 xl:p-5 rounded-full">
          <Phone />
        </div>
        <div className="bg-[#527557] text-white p-4 xl:p-5 rounded-full">
          <Mail />
        </div>
        <div className="bg-[#527557] text-white p-4 xl:p-5 rounded-full">
          <MapPin />
        </div>
      </div>

      {/* Contact Form */}
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 p-4 w-full rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-4 w-full rounded"
          />
        </div>
        <textarea
          placeholder="Message"
          rows="6"
          className="border border-gray-300 p-4 w-full resize-none rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-[#527557] cursor-pointer text-white py-4 px-6 rounded w-full"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default Contact;
