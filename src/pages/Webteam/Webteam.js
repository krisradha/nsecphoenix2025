import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

function Webteam() {
  const [webTeam, setWebTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getTeam() {
      try {
        setLoading(true);
        const docRef = doc(db, 'web-team', 'uaeOsAP2hWfJ1DOGRqZT');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setWebTeams([...docSnap.data().members]);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching web team:', error);
      } finally {
        setLoading(false);
      }
    }
    getTeam();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <span className="text-4xl">💻</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Web Team
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              The brilliant developers and designers who bring our digital vision to life
            </p>
            
            <div className="mt-12 flex items-center justify-center gap-4 text-white/60">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-white/40"></div>
              <span className="text-sm font-medium">MEET THE DEVELOPERS</span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-white/40"></div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-teal-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Team Members Section */}
      <div className="container mx-auto px-6 py-12">
        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-teal-600 rounded-full animate-spin animation-delay-150"></div>
            </div>
          </div>
        ) : (
          /* Team Members Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {webTeam.map((member, index) => (
              <div
                key={member.name}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Member Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={`${member.name}'s avatar`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                </div>
                
                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                    <a 
                      href={member.portfolio} 
                      target="_blank" 
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      {member.name}
                    </a>
                  </h3>
                  <p className="text-gray-600 font-medium mb-4">
                    {member.designation}
                  </p>
                  
                  {/* Social Links */}
                  <ul className='flex justify-center mt-4 space-x-4'>
                    {member?.facebook && (
                      <li>
                        <a
                          href={member.facebook}
                          target='_blank'
                          rel='noreferrer'
                          className='text-[#39569c] hover:text-gray-900 transition-colors'
                        >
                          <svg className='w-6 h-6' fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </a>
                      </li>
                    )}
                    {member?.instagram && (
                      <li>
                        <a
                          href={member.instagram}
                          target='_blank'
                          rel='noreferrer'
                          className='text-[#39569c] hover:text-gray-900 transition-colors'
                        >
                          <svg className='w-6 h-6' fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                          </svg>
                        </a>
                      </li>
                    )}
                    <li>
                      <a
                        href={member.linkedin}
                        target='_blank'
                        rel='noreferrer'
                        className='text-[#00acee] hover:text-gray-900 transition-colors'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 48 48'
                          className='w-6 h-6'
                        >
                          <path
                            fill='#0078d4'
                            d='M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z'
                          />
                          <path
                            d='M30,35v-9c0-1.103-0.897-2-2-2s-2,0.897-2,2v9h-6V18h6v1.027C27.04,18.359,28.252,18,29.5,18	c3.584,0,6.5,2.916,6.5,6.5V35H30z M13,35V18h2.966C14.247,18,13,16.738,13,14.999C13,13.261,14.267,12,16.011,12	c1.696,0,2.953,1.252,2.989,2.979C19,16.733,17.733,18,15.988,18H19v17H13z'
                            opacity='.05'
                          />
                          <path
                            d='M30.5,34.5V26c0-1.378-1.121-2.5-2.5-2.5s-2.5,1.122-2.5,2.5v8.5h-5v-16h5v1.534	c1.09-0.977,2.512-1.534,4-1.534c3.309,0,6,2.691,6,6v10H30.5z M13.5,34.5v-16h5v16H13.5z M15.966,17.5	c-1.429,0-2.466-1.052-2.466-2.501c0-1.448,1.056-2.499,2.511-2.499c1.436,0,2.459,1.023,2.489,2.489	c0,1.459-1.057,2.511-2.512,2.511H15.966z'
                            opacity='.07'
                          />
                          <path
                            fill='#fff'
                            d='M14,19h4v15h-4V19z M15.988,17h-0.022C14.772,17,14,16.11,14,14.999C14,13.864,14.796,13,16.011,13	c1.217,0,1.966,0.864,1.989,1.999C18,16.11,17.228,17,15.988,17z M35,24.5c0-3.038-2.462-5.5-5.5-5.5	c-1.862,0-3.505,0.928-4.5,2.344V19h-4v15h4v-8c0-1.657,1.343-3,3-3s3,1.343,3,3v8h4C35,34,35,24.921,35,24.5z'
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href={member.github}
                        target='_blank'
                        rel='noreferrer'
                        className='text-gray-900 hover:text-gray-900 transition-colors'
                      >
                        <svg
                          className='w-6 h-6'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path
                            fillRule='evenodd'
                            d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && webTeam.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
              <span className="text-4xl">💻</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No Team Members Found</h3>
            <p className="text-gray-500">Our web team information is being updated.</p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Join Our Web Team</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Passionate about web development? We're always looking for talented developers to join our team!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Apply Now
            </button>
            <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-emerald-600 transition-all duration-300 transform hover:scale-105">
              View Openings
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Webteam;
