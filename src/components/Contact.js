
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Your Message" className="w-full p-3 border rounded" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Send Message</button>
        </form>
        <div className="mt-8">
          <p className="text-xl">Follow me on</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://linkedin.com/in/abirdhar" className="text-blue-500 hover:text-blue-700">LinkedIn</a>
            <a href="https://github.com/abirdhar" className="text-gray-800 hover:text-gray-900">GitHub</a>
            {/* Add more social media links as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
