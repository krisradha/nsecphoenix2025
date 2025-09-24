import React, { useEffect, useState } from 'react'
import img1 from '../../static/img/RobotEvolution.jpg'
import img2 from '../../static/img/speaking-e1513074001193.jpeg'
import img3 from '../../static/img/cybernix.jpg'
import img4 from '../../static/img/civil.jpg'
import img5 from '../../static/img/illustro.jpg'
import { wingData } from '../../data/wingData'
import { useNavigate } from 'react-router-dom'

const wingsData = [
  {
    image: img1,
    title: 'Robonix',
    description: 'Robotics is the discipline of emulating our lives, of wondering how we work. We have walked a long path in its advancement. It gives you a platform where you can sustain your ideas of coding, micro controlling and designing.',
    icon: '🤖',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
    borderColor: 'border-blue-200',
    extraButton: {
      name: 'Learn More',
      link: 'robonix'
    },
    isClub: true
  },
  {
    image: img2,
    title: 'Eloquense',
    description: '\'Eloquence\', the official literary club of Netaji Subhash Engineering College Under Phoenix. It is a platform where you get to express your thoughts and perspectives. The aim of the club is to let you grow out of your fears, tie up your thoughts and prove your mettle.',
    icon: '🎤',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
    borderColor: 'border-purple-200',
    extraButton: {
      name: 'Learn More',
      link: 'eloquence'
    },
    isClub: true
  },
  {
    image: img3,
    title: 'Cybernix',
    description: 'Don\'t you feel the time has changed its course over the last two decades? From rolling fingers over 140 keys of piano, the world has now come to rushing them on 108 keys of the keyboard. Cybernix provides you time to unleash the coding beast in you out in the world.',
    icon: '💻',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
    borderColor: 'border-green-200',
    extraButton: {
      name: 'Learn More',
      link: 'cybernix'
    },
    isClub: true
  },
  {
    image: img4,
    title: 'Nirman',
    description: 'Imagine a world without buildings, bridges, skyscrapers or monuments? Not possible right! Nirmaan comes with an opportunity for the Builders of tomorrow to show and sharpen their skills under the guidance of best mentors and experience the best Platform to showcase their talents.',
    icon: '🏗️',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-gradient-to-br from-orange-50 to-red-50',
    borderColor: 'border-orange-200',
    extraButton: {
      name: 'Learn More',
      link: 'nirman'
    },
    isClub: true
  },
  {
    image: img5,
    title: 'Illustro',
    description: 'Illustro is the official photography wing of Phoenix - The official Tech club of Netaji Subhash Engineering College. Capturing moments, creating memories. Explore, learn, and share your passion with Illustro. Join us to unleash your creativity through the lens.',
    icon: '📸',
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-gradient-to-br from-indigo-50 to-purple-50',
    borderColor: 'border-indigo-200',
    extraButton: {
      name: 'Learn More',
      link: 'illustro'
    },
    isClub: true
  }
]

function Clubs() {
  const navigate = useNavigate();
  const [curWing, setCurWing] = useState()
  const [preventFirstRender, setPreventFirstRender] = useState(false)

  const handleNavigation = (title) => {
    const title_lower = title.toLowerCase();
    setPreventFirstRender(true)
    switch (title_lower) {
      case "cybernix":
        setCurWing(wingData.cybernix)
        break;
      case "robonix":
        setCurWing(wingData.robonix)
        break;
      case "nirman":
        setCurWing(wingData.nirman)
        break;
      case "eloquense":
        setCurWing(wingData.eloquense)
        break;
      case "illustro":
        setCurWing(wingData.illustro)
        break;
      default:
        setCurWing()
        break;
    }
  }

  //prevent navigation on first render
  useEffect(() => {
    (preventFirstRender && curWing) ? navigate(`/wings/${curWing.name}`, { state: { ...curWing } }) : navigate("/wings")
  }, [curWing, preventFirstRender, navigate])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-6 py-24">
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <span className="text-3xl">🦅</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Our Wings
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover the diverse wings of Phoenix - each specializing in unique domains of technology and innovation
            </p>
            <div className="mt-12 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Wings Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {wingsData.map((wing, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 hover:shadow-3xl hover:-translate-y-2 ${
                  wing.bgColor
                } border-2 ${wing.borderColor} hover:border-opacity-50`}
              >
                <div className="relative z-10 p-8 md:p-12">
                  <div className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-12 items-center`}>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-8">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className={`p-4 rounded-2xl bg-gradient-to-r ${wing.color} shadow-lg`}>
                            <span className="text-3xl">{wing.icon}</span>
                          </div>
                          <div>
                            <h3 className="text-4xl md:text-5xl font-black text-gray-800 mb-2">
                              {wing.title}
                            </h3>
                            <div className={`w-16 h-1 bg-gradient-to-r ${wing.color} rounded-full`}></div>
                          </div>
                        </div>
                        
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
                          {wing.description}
                        </p>
                      </div>

                      <button
                        onClick={() => handleNavigation(wing.title)}
                        className={`group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${wing.color} text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
                      >
                        <span className="text-lg">{wing.extraButton.name}</span>
                        <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                        <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>

                    {/* Image */}
                    <div className="flex-1 max-w-lg">
                      <div className="relative group/image">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 rounded-2xl"></div>
                        <img
                          src={wing.image}
                          alt={wing.title}
                          className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-2xl group-hover/image:scale-105 transition-transform duration-700"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${wing.color} opacity-0 group-hover/image:opacity-20 transition-opacity duration-700 rounded-2xl`}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Ready to Join?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
              Become part of Phoenix and explore your passion in technology, innovation, and creativity
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Explore All Wings
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300">
                Join Phoenix
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clubs