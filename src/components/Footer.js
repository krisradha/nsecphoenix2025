import React from "react";
import { Link } from "react-router-dom";
import { BsTelegram, BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#00428A] to-[#0072C6] text-white font-medium">
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-3xl font-extrabold">Phoenix</h3>
          <p className="text-sm md:text-base">
            Phoenix encourages overall student growth—from technical to leadership skills.
            Participate in tech events, workshops, and forums to enhance your knowledge,
            collaborate, and showcase your talents.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-xl font-bold mb-4 border-b border-white pb-2">Quick Links</h4>
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
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-xl font-bold mb-4 border-b border-white pb-2">Contact Us</h4>
          <p className="text-sm md:text-base leading-relaxed">
            Netaji Subhash Engineering College, Garia, Panchpota, Kolkata, West Bengal, 700152
            <br />
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@phoenixnsec.in"
              className="underline hover:text-yellow-400 transition-colors duration-300"
            >
              info@phoenixnsec.in
            </a>
          </p>

          <div className="mt-4 flex space-x-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/phoenix_nsec2020"
              className="bg-white text-[#0088cc] p-2 rounded-full hover:scale-110 transition-transform"
            >
              <BsTelegram size={22} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/nsec.phoenix/"
              className="bg-white text-[#3b5998] p-2 rounded-full hover:scale-110 transition-transform"
            >
              <BsFacebook size={22} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/phoenix_nsec/"
              className="bg-white text-[#C13584] p-2 rounded-full hover:scale-110 transition-transform"
            >
              <BsInstagram size={22} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCBy1iIhw34E7YlHQ8tc4rDA"
              className="bg-white text-[#FF0000] p-2 rounded-full hover:scale-110 transition-transform"
            >
              <BsYoutube size={26} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="bg-[#013a77] text-center py-4 text-[0.85rem] md:text-[1rem]">
        &copy; 2025 Phoenix. All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
