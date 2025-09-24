import React, { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { getDocs, collection } from "firebase/firestore";

function Coreteam() {
  let d = new Date();
  const [memberList, setMemberList] = useState([]);
  const [yearList, setYearList] = useState([]);
  const [loading, setLoading] = useState(true);
  const membersCollectionRef = collection(db, "core-team");
  const [activeButton, setActiveButton] = useState();

  const onButtonHandle = (id, year) => {
    setActiveButton(year);
    let updatedData = memberList.filter((e) => e.id === id);
    setYearList(updatedData);
  };
  const getMemberList = async () => {
    try {
      setLoading(true);
      const data = await getDocs(membersCollectionRef);

      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      // Sort by the starting year (before the dash)
      filteredData.sort((a, b) => {
        return parseInt(a.year.split("-")[0]) - parseInt(b.year.split("-")[0]);
      });

      // Filter data for the year 2024-25 as default
      let defaultYearData = filteredData.filter(
        (element) => parseInt(element.year.split("-")[0]) === d.getFullYear()
      );

      // If there is no data for 2024-25, fallback to the last year
      if (defaultYearData.length === 0) {
        defaultYearData = filteredData.filter(
          (element) =>
            parseInt(element.year.split("-")[0]) + 1 === d.getFullYear()
        );
      }

      setYearList(defaultYearData);
      setMemberList(filteredData.reverse());

      // Set the default active button to 2024-25
      if (defaultYearData[0]) {
        setActiveButton(defaultYearData[0].year);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMemberList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <span className="text-4xl">👥</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Core Team
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Meet the brilliant minds driving innovation and excellence in our organization
            </p>
            
            <div className="mt-12 flex items-center justify-center gap-4 text-white/60">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-white/40"></div>
              <span className="text-sm font-medium">MEET THE TEAM</span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-white/40"></div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Year Filter Buttons */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {memberList.map((element) => (
            <button
              key={element.id}
              onClick={() => onButtonHandle(element.id, element.year)}
              className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                element.year === activeButton
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl shadow-blue-500/25"
                  : "bg-white/10 backdrop-blur-sm text-gray-700 hover:bg-white/20 border border-gray-200"
              }`}
            >
              {element.year}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-purple-600 rounded-full animate-spin animation-delay-150"></div>
            </div>
          </div>
        ) : (
          /* Team Members Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {yearList.map((element) =>
              element.members.map((member, index) => (
                <div
                  key={`${element.year}-${index}`}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                >
                  {/* Member Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    
                    {/* Social Links (Placeholder) */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <div className="flex gap-2">
                        <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <span className="text-sm">📧</span>
                        </button>
                        <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <span className="text-sm">💼</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Member Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 font-medium mb-4">
                      {member.designation}
                    </p>
                    
                    {/* Year Badge */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800">
                        {element.year}
                      </span>
                      
                      {/* View Profile Button */}
                      {/* <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                        View Profile →
                      </button> */}
                    </div>
                  </div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Empty State */}
        {!loading && yearList.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
              <span className="text-4xl">👥</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No Team Members Found</h3>
            <p className="text-gray-500">Try selecting a different year to see team members.</p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Join Our Team</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Want to be part of our amazing core team? We're always looking for passionate individuals to join us!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Apply Now
            </button>
            <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coreteam;
