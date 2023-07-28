import React from 'react';
import { FaEnvelope, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-4">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex items-center">
          <a href="mailto:info@tessbikes.com" className="mr-4">
            <FaEnvelope className="text-white" size={30} />
          </a>
          <a href="https://www.instagram.com/tessbikes/" target="_blank" rel="noreferrer" className="mr-4">
            <FaInstagram className="text-white" size={30} />
          </a>
          <a href="https://youtu.be/Rddgk37mAFQ" target="_blank" rel="noreferrer">
            <FaYoutube className="text-white" size={30} />
          </a>
        </div>
      </div>
      <p className="text-sm text-white-600 mt-2 text-center">© 2023 Tess Meyer. All rights reserved. Website by Tessbikes.</p>
    </footer>
  );
};

export default Footer;
