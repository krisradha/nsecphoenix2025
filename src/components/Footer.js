import React from "react";
import { Link } from "react-router-dom";
import { BsTelegram, BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <footer className="text-white font-medium text-sm">
      <div className="bg-[#00428A] p-8 flex flex-col lg:flex-row lg:justify-between gap-8">
        
        {/* About Section */}
        <div className="lg:w-5/12">
          <h3 className="font-extrabold text-3xl py-2">Phoenix</h3>
          <p className="text-justify">
            Phoenix strives for the overall development of students, from technical
            skills to communication. We conduct domain-specific forums, tech fests,
            and team activities to help students showcase their skills and develop
            leadership qualities.
          </p>
        </div>

        {/* Useful Links */}
        <div className="lg:w-3/12">
          <h4 className="font-bold text-xl py-2">Useful Links</h4>
          <ul className="space-y-2">
            {[
              { name: "Home", path: "/home" },
              { name: "Wings", path: "/wings" },
              { name: "Events", path: "/events" },
              { name: "Core 2022-23", path: "/core" },
              { name: "Web Team", path: "/webteam" },
              { name: "Contact Us", path: "/contactus" },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  className="hover:text-slate-50 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:w-4/12">
          <h4 className="font-bold text-xl py-2">Contact Us</h4>
          <p className="leading-relaxed">
            Netaji Subhash Engineering College, Garia, Panchpota, Kolkata, West Bengal, 700152
            <br />
            <strong>Email:</strong> <a href="mailto:info@phoenixnsec.in" className="underline hover:text-slate-50">info@phoenixnsec.in</a>
          </p>
          <div className="mt-4 flex space-x-3">
            <a target="_blank" rel="noopener noreferrer" href="https://t.me/phoenix_nsec2020" className="hover:text-blue-300">
              <BsTelegram size={22} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/nsec.phoenix/" className="hover:text-blue-600">
              <BsFacebook size={22} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/phoenix_nsec/" className="hover:text-pink-400">
              <BsInstagram size={22} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCBy1iIhw34E7YlHQ8tc4rDA" className="hover:text-red-600">
              <BsYoutube size={26} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-[#013a77] p-3 text-center text-[0.85rem] md:text-[1rem]">
        &copy; 2025 Phoenix. All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
