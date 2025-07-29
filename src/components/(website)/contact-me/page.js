"use client";
import Image from "next/image";
import React, { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Message submitted successfully!");
    // এখানে আপনি EmailJS বা backend API call করতে পারেন
  };

  return (
    <div id="contact-me" className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-12">
      {/* Left - Contact Info */}
      <div className="flex-1 space-y-4">
        <h2 className="text-3xl font-bold">Lets Talk</h2>
        <div className="flex gap-12">
            <div>
          <p className="font-semibold">Email</p>
          <p>roy754712@gmail.com</p>
        </div>
        <div>
          <p className="font-semibold">Phone</p>
          <p>01310391739</p>
        </div>
        </div>
        <div>
          <p className="font-semibold">Follow Me</p>
          <div className="flex space-x-6  mt-2">
            <a href="https://www.facebook.com/sujon.roy.721137" target="_blank">
              <Image src="/assets/fbdownload (1).png" alt="Facebook" width={60} height={60} className="w-[40px] h-[40px] rounded-full" />
            </a>
            <a href="https://github.com" target="_blank">
              <Image src="/assets/gith.png" alt="WhatsApp" width={40} height={40} className="w-[40px] h-[40px] rounded-full" />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <Image src="/assets/linkdin.png" alt="LinkedIn" width={40} height={40} className="w-[40px] h-[40px] rounded-full" />
            </a>
          </div>
        </div>
        
      </div>

      {/* Right - Contact Form */}
      <div className="flex-1 bg-[#0d1321] text-white p-8 rounded-xl shadow-2xl shadow-blue-400 w-full max-w-xl">
        <form onSubmit={handleSubmit} className="space-y-5">
          <h2 className="text-2xl font-bold">Get in Touch</h2>

          <div>
            <label className="block mb-1 font-semibold">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter Your Name ..."
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white opacity-50 text-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter Your Email ..."
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded opacity-50 bg-white text-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="Enter Your Phone Number ..."
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded opacity-50 bg-white text-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              required
              placeholder="Enter Your Message ..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded opacity-50 bg-white text-black"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
