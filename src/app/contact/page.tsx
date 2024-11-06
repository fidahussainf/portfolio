import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Page() {
  return (
    <div className="container mx-auto p-4 sm:p-6">
      <div className="flex flex-wrap">
        
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Fida Hussain</h2>
          <img
            src="/fida.jpg"
            alt="avatar"
            className="w-full   object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contact Me</h2>
          <hr className="my-4 border-gray-600" />
          <div className="contact-list">
            <ul className="list-none space-y-4">
              <li className="flex items-center my-2">
                <FaWhatsapp className="text-2xl sm:text-3xl mr-2" />
                <a
                  href="https://wa.me/923081844802"
                  className="text-base sm:text-lg hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +923081844802
                </a>
              </li>
              <li className="flex items-center my-2">
                <FaEnvelope className="text-2xl sm:text-3xl mr-2" />
                <a href="mailto:fidahussain9133@gmail.com" className="text-base sm:text-lg hover:underline">
                  fidahussain9133@gmail.com
                </a>
              </li>
              <li className="flex items-center my-2">
                <a
                  href="https://github.com/fidahussainf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 flex items-center"
                >
                  <FaGithub className="text-2xl sm:text-3xl mr-2" />
                  <span className="text-base sm:text-lg">https://github.com/fidahussainf</span>
                </a>
              </li>
              <li className="flex items-center my-2">
                <a
                  href="https://linkedin.com/in/mefidah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 flex items-center"
                >
                  <FaLinkedin className="text-2xl sm:text-3xl mr-2" />
                  <span className="text-base sm:text-lg">https://linkedin.com/in/mefidah</span>
                </a>
              </li>
              <li className="flex items-center my-2">
                <a
                  href="https://instagram.com/fidahussainfd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 flex items-center"
                >
                  <FaInstagram className="text-2xl sm:text-3xl mr-2" />
                  <span className="text-base sm:text-lg">https://instagram.com/fidahussainfd</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
