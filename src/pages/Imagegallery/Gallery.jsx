import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FaRegEye, FaTimes, FaChevronLeft, FaChevronRight, FaDownload } from "react-icons/fa";

function Imagegallary() {
  const [tag, setTag] = useState([]);
  const [image, setImage] = useState([]);
  const [tagLoading, setTagLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");

  const { isOpen, onOpen, onClose } = useDisclosure();

  async function getTag() {
    const docRef = collection(db, "tags");
    const docSnap = await getDocs(docRef);

    let temp = [];

    docSnap.forEach((d) => {
      temp.push(d.data());
    });

    setTag(temp);
    setTagLoading(false);
  }

  async function getImage() {
    const docRef = collection(db, "images");
    const docSnap = await getDocs(docRef);

    let temp = [];

    docSnap.forEach((d) => {
      temp.push(d.data());
    });

    setImage(temp);
    setImageLoading(false);
  }

  // Helper functions for modal navigation
  const getFilteredImages = () => {
    if (activeFilter === "All") {
      return image;
    }
    return image.filter((img) => img.tag === activeFilter);
  };

  const openImageModal = (img, index) => {
    setCurrentImage(img);
    setCurrentImageIndex(index);
    onOpen();
  };

  const navigateImage = (direction) => {
    const filteredImages = getFilteredImages();
    if (direction === 'next') {
      const nextIndex = (currentImageIndex + 1) % filteredImages.length;
      setCurrentImageIndex(nextIndex);
      setCurrentImage(filteredImages[nextIndex]);
    } else {
      const prevIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1;
      setCurrentImageIndex(prevIndex);
      setCurrentImage(filteredImages[prevIndex]);
    }
  };

  useEffect(() => {
    setTagLoading(true);
    getTag();
    getImage();
  }, []);
  // console.log(image);

  return (
    <>
      {/* Enhanced Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay bg="blackAlpha.800" />
        <ModalContent 
          bg="white" 
          borderRadius="2xl" 
          maxW="90vw" 
          maxH="90vh"
          className="overflow-hidden"
        >
          <ModalHeader 
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white"
            borderTopRadius="2xl"
            fontSize="xl"
            fontWeight="bold"
          >
            <div className="flex items-center justify-between">
              <span>{currentImage?.tag || 'Gallery Image'}</span>
              <div className="flex items-center gap-4">
                <span className="text-sm font-normal">
                  {currentImageIndex + 1} of {getFilteredImages().length}
                </span>
                <button
                  onClick={() => window.open(currentImage?.url, '_blank')}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  title="Download"
                >
                  <FaDownload size={16} />
                </button>
              </div>
            </div>
          </ModalHeader>
          <ModalCloseButton color="white" />
          
          <ModalBody p={0} className="relative">
            {currentImage && (
              <div className="relative">
                <img
                  src={currentImage.url}
                  alt={currentImage.tag}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                
                {/* Navigation arrows */}
                {getFilteredImages().length > 1 && (
                  <>
                    <button
                      onClick={() => navigateImage('prev')}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
                    >
                      <FaChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() => navigateImage('next')}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
                    >
                      <FaChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Hero Section */}
      <div className="relative min-h-[60vh] bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <span className="text-4xl">📸</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Explore our collection of memories, events, and moments captured in time
            </p>
            
            <div className="mt-12 flex items-center justify-center gap-4 text-white/60">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-white/40"></div>
              <span className="text-sm font-medium">SCROLL TO EXPLORE</span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-white/40"></div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Filter Tabs */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveFilter("All")}
            className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
              activeFilter === "All"
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-xl shadow-purple-500/25"
                : "bg-white/10 backdrop-blur-sm text-gray-700 hover:bg-white/20 border border-gray-200"
            }`}
          >
            All Photos
          </button>
          
          {tag.map((t, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(t.name)}
              className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                activeFilter === t.name
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-xl shadow-purple-500/25"
                  : "bg-white/10 backdrop-blur-sm text-gray-700 hover:bg-white/20 border border-gray-200"
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {imageLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-blue-600 rounded-full animate-spin animation-delay-150"></div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getFilteredImages().map((img, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={img.url}
                    alt={img.tag}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{img.tag}</h3>
                    <button
                      onClick={() => openImageModal(img, index)}
                      className="flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                      <FaRegEye size={16} />
                      <span className="font-medium">View Full Size</span>
                    </button>
                  </div>
                </div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!imageLoading && getFilteredImages().length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
              <span className="text-4xl">📷</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No Images Found</h3>
            <p className="text-gray-500">Try selecting a different filter to see more images.</p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Share Your Moments</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Have photos from our events? We'd love to see them and add them to our gallery!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Submit Photos
            </button>
            <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
              Follow Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Imagegallary;
