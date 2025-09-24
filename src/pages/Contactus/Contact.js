import { useState } from "react";
import { BsFacebook, BsInstagram, BsTelegram, BsYoutube } from "react-icons/bs";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

function Contact() {

  const [data,setData] = useState({name: "",email: "", message: ""});

  const getName = (e)=>{
    setData({
      name: e.target.value,
      email: data.email,
      message: data.message
    })
  }

  const getEmail = (e)=>{
    setData({
      name: data.name,
      email: e.target.value,
      message: data.message
    })
  }

  const getMessage = (e)=>{
    setData({
      name: data.name,
      email: data.email,
      message: e.target.value
    })
  }

  /**submit form function */
  const sendContactInfo = (e)=>{
    e.preventDefault();
    console.log(data);
    setData({name: "",email: "", message: ""});


  }


  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <span className="text-4xl">📞</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Get in touch with us. We'd love to hear from you!
            </p>
            
            <div className="mt-12 flex items-center justify-center gap-4 text-white/60">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-white/40"></div>
              <span className="text-sm font-medium">LET'S CONNECT</span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-white/40"></div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Main Contact Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We're here to help and answer any question you might have. We look forward to hearing from you!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <FiMapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Netaji Subhash Engineering College<br />
                    Garia, Panchpota, Kolkata<br />
                    West Bengal, 700152
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <FiMail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                  <p className="text-gray-600">info@phoenixnsec.in</p>
                </div>
              </div>

              {/* <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                  <FiPhone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
                  <p className="text-gray-600">+91 (Call for details)</p>
                </div>
              </div> */}
            </div>

            {/* Social Media Links */}
            <div className="p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://t.me/phoenix_nsec2020" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                >
                  <BsTelegram size={20} />
                </a>
                <a 
                  href="https://www.facebook.com/nsec.phoenix/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-110 shadow-lg"
                >
                  <BsFacebook size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/phoenix_nsec/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                >
                  <BsInstagram size={20} />
                </a>
                <a 
                  href="https://www.youtube.com/channel/UCBy1iIhw34E7YlHQ8tc4rDA" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                >
                  <BsYoutube size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            
            <form className="space-y-6" onSubmit={sendContactInfo}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 outline-none"
                  onChange={getName}
                  value={data.name}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 outline-none"
                  onChange={getEmail}
                  value={data.email}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  placeholder="Tell us what's on your mind..."
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 outline-none resize-none"
                  onChange={getMessage}
                  value={data.message}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Find Us</h2>
            <p className="text-gray-600 text-lg">Visit us at our campus location</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.7431676891883!2d88.41275651534781!3d22.476283742162487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02722b05a38e87%3A0x276c0d30e6be12ea!2sNetaji%20Subhash%20Engineering%20College!5e0!3m2!1sen!2sin!4v1676026510888!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Netaji Subhash Engineering College Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
