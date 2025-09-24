import React, { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import moment from "moment/moment";
import img1 from "../../static/img/avenir.jpeg";
import img2 from "../../static/img/brainstormer.jpeg";
import img3 from "../../static/img/aavahan.jpeg";


function Events() {
  const [eventList, setEventList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getEventList = async () => {
    try {
      setLoading(true);
      const eventsRef = collection(db, "events");
      const q = await query(eventsRef, orderBy("date", "desc"));
      const querySnapshot = await getDocs(q);

      let temp = [];

      querySnapshot.forEach((d) => {
        temp.push({ ...d.data(), id: d.id });
      });

      setEventList(temp);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEventList();
  }, []);

  const mainEvents = [
    {
      image: img1,
      title: "Avenir",
      description:
        "Avenir - The Annual Techno-Management Fest of NSEC, stands amongst the top technical fests in the city with enthusiastic participation from students of premier institutes in and around the state. The three day spectacular event yields a footfall of more than 7000+ students, thus making it a perfect platform to explore the realm of technical innovation and to witness the best minds striving for excellence.",
      icon: "🎯",
      color: "from-blue-600 to-purple-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
      borderColor: "border-blue-200",
      isUpcoming: true
    },
    {
      image: img2,
      title: "Brainstormer",
      description:
        "Brain, intellect and wit are the three fundamentals of a quiz warrior. To bring out these abilities from talented students, PHOENIX organizes BRAINSTORMER - an inter-college/school QUIZ competition to help you chase your dreams and showcase your knowledge.",
      icon: "🧠",
      color: "from-green-600 to-teal-600",
      bgColor: "bg-gradient-to-br from-green-50 to-teal-50",
      borderColor: "border-green-200",
      isUpcoming: true
    },
    {
      image: img3,
      title: "Aavahan",
      description:
        "Avaahan stands with society and intends to establish a broader platform for our technology and innovations with the younger generation acting as the tower of strength. Avaahan is an intra-college tech fest organized by PHOENIX to encourage our juniors and enthusiasts.",
      icon: "🚀",
      color: "from-orange-600 to-red-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      borderColor: "border-orange-200",
      isUpcoming: true
    },
  ];

  const upcomingEvents = eventList.filter(event => event.isUpcoming);
  const otherEvents = eventList.filter(event => !event.isUpcoming);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-6 py-24">
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <span className="text-3xl">🎪</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Our Events
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join us for exciting events, competitions, and celebrations throughout the year
            </p>
            <div className="mt-12 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Events */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Featured Events
        </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our flagship events that bring together the best minds and create unforgettable experiences
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="space-y-16">
            {mainEvents.map((event, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 hover:shadow-3xl hover:-translate-y-2 ${
                  event.bgColor
                } border-2 ${event.borderColor} hover:border-opacity-50`}
              >
                <div className="relative z-10 p-8 md:p-12">
                  <div className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-12 items-center`}>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-8">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className={`p-4 rounded-2xl bg-gradient-to-r ${event.color} shadow-lg`}>
                            <span className="text-3xl">{event.icon}</span>
                          </div>
                    <div>
                            <h3 className="text-4xl md:text-5xl font-black text-gray-800 mb-2">
                        {event.title}
                            </h3>
                            <div className={`w-16 h-1 bg-gradient-to-r ${event.color} rounded-full`}></div>
                          </div>
                    </div>
                        
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
                          {event.description}
                        </p>
                      </div>

                      <button
                        className={`group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${event.color} text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
                      >
                        <span className="text-lg">Learn More</span>
                        <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                        <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>

                    {/* Image */}
                    <div className="flex-1 max-w-lg">
                      <div className="relative group/image">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 rounded-2xl"></div>
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-2xl group-hover/image:scale-105 transition-transform duration-700"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-0 group-hover/image:opacity-20 transition-opacity duration-700 rounded-2xl`}></div>
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

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Don't miss out on these exciting upcoming events
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image || img1}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Upcoming
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-black text-gray-800 mb-3">
                      {event.title || 'Untitled Event'}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {event.description || 'No description available'}
                    </p>
                    
                    <div className="flex items-center gap-2 text-gray-500 mb-4">
                      <span className="text-lg">📅</span>
                      <span className="font-medium">
                        {event.date?.toDate ? moment(event.date.toDate()).format('MMM DD, YYYY') : 'Date TBD'}
                        </span>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold py-3 rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:-translate-y-1">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Other Events */}
      {otherEvents.length > 0 && (
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
                Past Events
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Relive the memories from our amazing past events
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherEvents.slice(0, 6).map((event, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image || img1}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {event.title || 'Untitled Event'}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                      {event.description || 'No description available'}
                    </p>
                    
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <span>📅</span>
                      <span>
                        {event.date?.toDate ? moment(event.date.toDate()).format('MMM DD, YYYY') : 'Date TBD'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-3 text-gray-600">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              <span className="text-lg font-medium">Loading events...</span>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Stay Updated
        </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
              Follow us on social media to never miss any exciting events and announcements
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Follow Phoenix
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300">
                Join Our Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;

