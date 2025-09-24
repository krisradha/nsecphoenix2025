import React, { useEffect, useState, useCallback } from "react";
import img1 from "../../static/images/home1.jpg";
import img2 from "../../static/images/phoenix-pic2.JPG";
import img3 from "../../static/images/avenir-21.jpg";
import IntroGroupImage from "../../static/images/avenir-14.JPG";
import "./Home.css";
import "./glitch.css"
import { Button, Box, Container, Heading, Text, VStack, HStack } from "@chakra-ui/react";
import ZigBox from "../../components/ZigBox";
import { db } from "../../firebase-config";
import { getDocs, collection } from "firebase/firestore";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardHome from "../../components/CardHome";



function Home() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1000, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1000, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [yearList, setYearList] = useState([]);
  const membersCollectionRef = collection(db, "core-team");

  const getMemberList = useCallback(async () => {
    try {
      const date = new Date();
      const data = await getDocs(membersCollectionRef);


      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      let newFilteredData = filteredData.filter(
        (e) => parseInt(e.year.split("-")[1]) !== date.getFullYear()
      );



      setYearList(newFilteredData);


    } catch (error) {
      console.error(error);
    }
  }, [membersCollectionRef]);

  useEffect(() => {
    getMemberList();
  }, [getMemberList]);


  const data = [
    {
      image: img1,
      title: "Who are we ?",
      description:
        "PHOENIX is the official tech club of Netaji Subhash Engineering College. A club which looks into the overall development of the students of this college. It was founded by a group of like-minded people in January 2006 with the aim of inculcating values of friendship, teamwork and leadership as well as increases the technical skills like coding and robotics of a student. PHOENIX plays a crucial role in bridging the gap between the college and corporate life. A club which provides each individual a stage to shine.",
    },
<div className="card">
  <img src={img2} alt="Phoenix" className="card-img" />
  <div className="card-content">
    <h3 className="card-title">What Phoenix has to offer?</h3>
    <p className="card-description">
      PHOENIX is instrumental in conducting several weekly forums which helps...
    </p>
  </div>
</div>
    {
      image: img3,
      title: "What else ?",
      description:
        "Apart from these different workshops and seminar for students on a daily basis, in the association with institutions like TIME, Erudite, career launcher, NIIT and organization like TCS etc. are organized for students to enhance their and knowledge and develop their personality. Phoenix also takes credit in organizing the annual inter college and intra college tech fests, namely Avenir and Aavahan and various other events like quizzes and hackathons throughout the year.",
    },
  ];
  return (
    <>
      <style>
        {`
          .intro{
            height: 95vh;
          }
          .gd-carousel-wrapper {
            position:relative;
          }
        
          .gd-carousel {
            position:unset;
            width: 100%;
          }

          .gd-carousel2 {
            position:static;
            height: 400px;
            width: 884px;
            margin-left: 35px;
          }

            .react-multi-carousel-list{
              position: unset !important;
            }

            .react-multiple-carousel__arrow {
                position:absolute;
                font-size: 14px;
                min-width: 40px;
                min-height: 40px;
            }
            
            .react-multiple-carousel__arrow--left {
              left: calc(-3% + 1px) !important;
            }
        
            .react-multiple-carousel__arrow--right {
                right: calc(-3% + 1px) !important;
            }
            .custom-dot-list{
              position: absolute !important;
              bottom: -50px !important;
              display: flex;
              justify-content: center;
              gap: 8px;
            }
            
            .custom-dot-list button {
              background: rgba(255, 255, 255, 0.3) !important;
              border: 2px solid white !important;
              border-radius: 50% !important;
              width: 12px !important;
              height: 12px !important;
              margin: 0 4px !important;
              transition: all 0.3s ease !important;
            }
            
            .custom-dot-list button.active {
              background: white !important;
              transform: scale(1.2) !important;
            }
          @media screen and (max-width: 500px){
              .react-multiple-carousel__arrow {
                min-width: 30px;
                min-height: 30px;
            }
            .react-multiple-carousel__arrow--left {
              left: calc(-16% + 1px) !important;
            }
        
            .react-multiple-carousel__arrow--right {
                right: calc(-16% + 1px) !important;
            }
          
        `}
      </style>
      
      {/* Hero Section */}
      <Box 
        className="intro"
        bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        position="relative"
        overflow="hidden"
      >
        {/* Background Pattern */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="url('/public/intro-bg.png') center bottom no-repeat"
          bgSize="cover"
          opacity="0.1"
          zIndex="1"
        />
        
        <Container maxW="container.xl" position="relative" zIndex="2" h="full">
          <HStack 
            spacing={{ base: 8, md: 16 }} 
            align="center" 
            h="full"
            flexDirection={{ base: "column", md: "row" }}
            py={{ base: 8, md: 0 }}
          >
            {/* Image Carousel */}
            <Box flex="1" maxW={{ base: "full", md: "600px" }}>
              <Carousel
                responsive={responsive2}
                showDots={false}
                arrows={false}
                containerClass="w-full"
                itemClass="flex justify-center items-center px-0"
                infinite={true}
                autoPlay={true}
                focusOnSelect={true}
                autoPlaySpeed={3000}
                customTransition="transform 300ms ease-in-out"
              >
                <Box
                  as="img"
                  src={IntroGroupImage}
                  alt="Phoenix Team"
                  w={{ base: "full", md: "600px" }}
                  h={{ base: "250px", md: "400px" }}
                  borderRadius="2xl"
                  shadow="2xl"
                  objectFit="cover"
                  border="4px solid white"
                />
                <Box
                  as="img"
                  src={IntroGroupImage}
                  alt="Phoenix Team"
                  w={{ base: "full", md: "600px" }}
                  h={{ base: "250px", md: "400px" }}
                  borderRadius="2xl"
                  shadow="2xl"
                  objectFit="cover"
                  border="4px solid white"
                />
                <Box
                  as="img"
                  src={IntroGroupImage}
                  alt="Phoenix Team"
                  w={{ base: "full", md: "600px" }}
                  h={{ base: "250px", md: "400px" }}
                  borderRadius="2xl"
                  shadow="2xl"
                  objectFit="cover"
                  border="4px solid white"
                />
              </Carousel>
            </Box>

            {/* Hero Content */}
            <VStack 
              flex="1" 
              spacing={8} 
              align={{ base: "center", md: "flex-start" }}
              textAlign={{ base: "center", md: "left" }}
              color="white"
            >
              <VStack spacing={4} align={{ base: "center", md: "flex-start" }}>
                <Heading
                  as="h1"
                  fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                  fontWeight="900"
                  bgGradient="linear(to-r, #ffffff, #e2e8f0)"
                  bgClip="text"
                  letterSpacing="wider"
                  textShadow="2px 2px 4px rgba(0,0,0,0.3)"
                >
                  PHOENIX
                </Heading>
                
                <Text
                  fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}
                  fontWeight="600"
                  color="gray.100"
                  letterSpacing="wide"
                >
                  Come Let's Rise
                </Text>
                
                <Text
                  fontSize={{ base: "sm", md: "lg" }}
                  color="gray.200"
                  maxW="500px"
                  lineHeight="1.6"
                >
                  The official tech club of Netaji Subhash Engineering College. 
                  Bridging the gap between college and corporate life.
                </Text>
              </VStack>

              <HStack spacing={4} flexWrap="wrap" justify={{ base: "center", md: "flex-start" }}>
                <Button
                  as="a"
                  href="/register"
                  size={{ base: "md", md: "lg" }}
                  colorScheme="blue"
                  variant="solid"
                  px={8}
                  py={6}
                  borderRadius="full"
                  fontWeight="semibold"
                  shadow="lg"
                  _hover={{
                    transform: "translateY(-2px)",
                    shadow: "xl",
                  }}
                  transition="all 0.3s ease"
                >
                  Register Now →
                </Button>
                
                <Button
                  as="a"
                  href="/events"
                  size={{ base: "md", md: "lg" }}
                  bg="black"
                  color="white"
                  variant="solid"
                  px={8}
                  py={6}
                  borderRadius="full"
                  fontWeight="bold"
                  shadow="lg"
                  _hover={{
                    bg: "gray.800",
                    transform: "translateY(-2px)",
                    shadow: "xl",
                  }}
                  transition="all 0.3s ease"
                >
                  ⭐ Events 2025
                </Button>
              </HStack>
            </VStack>
          </HStack>
        </Container>
      </Box>
      {/* About Section */}
      <Box bg="gray.50">
        <ZigBox
          title="Phoenix"
          id="readmore"
          description="The official Tech club of NSEC"
          data={data}
        />
      </Box>

      {/* Core Members Section */}
      <Box 
        py={20} 
        bg="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
        position="relative"
      >
        {/* Background Pattern */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)"
          opacity="0.3"
        />
        
        <Container maxW="container.xl" position="relative" zIndex="2">
          <VStack spacing={12} align="center">
            <VStack spacing={4} textAlign="center">
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "5xl" }}
                fontWeight="800"
                color="white"
                textShadow="2px 2px 4px rgba(0,0,0,0.3)"
              >
                OUR CORE MEMBERS
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="gray.100"
                maxW="600px"
                lineHeight="1.6"
              >
                Meet the brilliant minds behind Phoenix - our dedicated core team members 
                who make everything possible.
              </Text>
            </VStack>

            <Box w="full" maxW="1200px">
              <Carousel
                responsive={responsive}
                showDots={true}
                containerClass="w-full"
                renderButtonGroupOutside={true}
                itemClass="flex justify-center items-center px-2"
                infinite={true}
                className="gd-carousel"
                dotListClass="custom-dot-list"
                autoPlay={true}
                focusOnSelect={true}
                autoPlaySpeed={3000}
              >
                {yearList.map((element) => {
                  if (element.year === "2024-25") {
                    const cardHomeComponents = [];

                    element.members.forEach((member, index) => {
                      cardHomeComponents.push(
                        <CardHome
                          key={index}
                          name={member.name}
                          designation={member.designation}
                          photo={member.photo}
                          index={index}
                          year={element.year}
                          media={member.socialMedia || {}}
                        />
                      );
                    });

                    return cardHomeComponents;
                  } else {
                    return null;
                  }
                })}
              </Carousel>
            </Box>
          </VStack>
        </Container>
      </Box>
    </>
  );
}

export default Home;
