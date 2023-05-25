import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer p-10 bg-neutral text-neutral-content">
        <div className="text-center md:pl-40">
          <h3 className="text-3xl uppercase">Contact us</h3>
          <p className="">
            123 ABS Street, Uni 21, Bangladesh <br /> +88 123456789 <br /> Mon -
            Fri: 08:00 -22:00 <br /> Sat - Sun: 10:00 - 23:00
          </p>
        </div>
        <div className="text-white md:pl-40">
          <p className="text-3xl">Follow US</p>
          <p className="mt-6 mb-8">Join us on social media</p>
          <div className="flex gap-5 text-3xl">
            <FaFacebookF></FaFacebookF>
            <FaInstagram></FaInstagram>
            <FaTwitter></FaTwitter>
          </div>
        </div>
      </div>
      <div className="footer footer-center p-4 bg-black text-base-content">
        <div className="text-white">
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;