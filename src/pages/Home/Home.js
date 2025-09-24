import React, { useEffect, useState, useCallback } from "react";
import { Box, Container, VStack, HStack, Heading, Text, Button } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import img1 from "../../static/images/home1.jpg";
import img2 from "../../static/images/phoenix-pic2.JPG";
import img3 from "../../static/images/avenir-21.jpg";
import IntroGroupImage from "../../static/images/avenir-14.JPG";

import ZigBox from "../../components/ZigBox";
import CardHome from "../../components/CardHome";
import { db } from "../../firebase-config";
import { getDocs, collection, query, where } from "firebase/firestore";

import "./Home.css";
import "./glitch.css";

function Home() {
  const [yearList, setYearList] = useState([]);
  const membersCollectionRef = collection(db, "core-team");

  // Fetch only the relevant year data
  const getMemberList = useCallback(async () => {
    try {
      const q = query(membersCollectionRef, where("year", "==", "2024-25"));
      const data = await getDocs(q);
      const filteredData = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setYearList(filteredData);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getMemberList();
  }, [getMemberList]);

  const introImages = [IntroGroupImage, img1, img2, img3];

  const responsiveMain = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1000, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const responsiveHero = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1000, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const aboutData = [
    {
      image: img1,
      title: "Who are we ?",
      description:
        "PHOENIX is the official tech club of Netaji Subhash Engineering College. A club which looks into the overall development of the students of this college. It was founded by a group of like-minded people in January 2006 with the aim of inculcating values of friendship, teamwork and leadership as well as increases the technical skills like coding and robotics of a student. PHOENIX plays a crucial role in bridging the gap between the college and corporate life. A club which provides each individual a stage to shine.",
    },
    {
      image: img2,
      title: "What Phoenix has to offer?",
      description:
        "PHOENIX is instrumental in conducting several weekly forums which helps in the overall development of a student. There are domain-specific forums that are free and open to anyone who wants to learn. Various clubs responsible for different activities are functional under PHOENIX. These are:ELOQUENSE: The language club which is responsible for conducting events like debates and open mics.ROBONIX: The robotics club introduces newly made engineers to the world of creating objects from scratch-an RC car, a drone or maybe the next iron man suit.CYBERNIX: Keeping up with the need of the hours, a club solely bases for IT-based aced activities and coding. NIRMAAN: Mainly for the students of the Civil and Mechanical department, As the the name suggests a club which deals with building things.",
    },
    {
      image: img3,
      title: "What else ?",
      description:
        "Apart from these different workshops and seminar for students on a daily basis, in the association with institutions like TIME, Erudite, career launcher, NIIT and organization like TCS etc. are organized for students to enhance their and knowledge and develop their personality. Phoenix also takes credit in organizing the annual inter college and intra college tech fests, namely Avenir and Aavahan and various other events like quizzes and hackathons throughout the year.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Box className="intro">
        <Container maxW="container.xl" h="full">
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
                responsive={responsiveHero}
                showDots={false}
                arrows={false}
                infinite
                autoPlay
                autoPlaySpeed={3000}
                focusOnSelect
              >
                {introImages.map((img, idx) => (
                  <Box
                    key={idx}
                    as="img"
                    src={img}
                    alt={`Phoenix ${idx}`}
                    w={{ base: "full", md: "600px" }}
                    h={{ base: "250px", md: "400px" }}
                    borderRadius="2xl"
                    shadow="2xl"
                    objectFit="cover"
                    border="4px solid white"
                  />
                ))}
              </Carousel>
            </Box>

            {/* Hero Text */}
            <VStack flex="1" spacing={8} align={{ base: "center", md: "flex-start" }} textAlign={{ base: "center", md: "left" }} color="white">
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
                <Text fontSize={{ base: "lg", md: "2xl", lg: "3xl" }} fontWeight="600" color="gray.100" letterSpacing="wide">
                  Come Let's Rise
                </Text>
                <Text fontSize={{ base: "sm", md: "lg" }} color="gray.200" maxW="500px" lineHeight="1.6">
                  The official tech club of Netaji Subhash Engineering College. Bridging the gap between college and corporate life.
                </Text>
              </VStack>

              <HStack spacing={4} flexWrap="wrap" justify={{ base: "center", md: "flex-start" }}>
                <Button
                  as="a"
                  href="/register"
                  size={{ base: "md", md: "lg" }}
                  colorScheme="blue"
                  borderRadius="full"
                  px={8}
                  py={6}
                  fontWeight="semibold"
                  shadow="lg"
                  _hover={{ transform: "translateY(-2px)", shadow: "xl" }}
                >
                  REGISTER NOW →
                </Button>
                <Button
                  as="a"
                  href="/events"
                  size={{ base: "md", md: "lg" }}
                  bg="black"
                  color="white"
                  borderRadius="full"
                  px={8}
                  py={6}
                  fontWeight="bold"
                  shadow="lg"
                  _hover={{ bg: "gray.800", transform: "translateY(-2px)", shadow: "xl" }}
                >
                  Events 2025
                </Button>
              </HStack>
            </VStack>
          </HStack>
        </Container>
      </Box>

      {/* About Section */}
      <Box bg="gray.50">
        <ZigBox title="Phoenix" id="readmore" description="The official Tech club of NSEC" data={aboutData} />
      </Box>

      {/* Core Members Section */}
      <Box py={20} className="core-members-bg">
        <Container maxW="container.xl">
          <VStack spacing={12} align="center">
            <VStack spacing={4} textAlign="center">
              <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} fontWeight="800" color="white" textShadow="2px 2px 4px rgba(0,0,0,0.3)">
                OUR CORE MEMBERS
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="gray.100" maxW="600px" lineHeight="1.6">
                Meet the brilliant minds behind Phoenix - our dedicated core team members who make everything possible.
              </Text>
            </VStack>

            <Box w="full" maxW="1200px">
              <Carousel
                responsive={responsiveMain}
                showDots
                dotListClass="custom-dot-list"
                infinite
                autoPlay
                autoPlaySpeed={3000}
                focusOnSelect
                containerClass="gd-carousel"
              >
                {yearList.flatMap(element =>
                  element.members.map((member, index) => (
                    <CardHome
                      key={index}
                      name={member.name}
                      designation={member.designation}
                      photo={member.photo}
                      index={index}
                      year={element.year}
                      media={member.socialMedia || {}}
                    />
                  ))
                )}
              </Carousel>
            </Box>
          </VStack>
        </Container>
      </Box>
    </>
  );
}

export default Home;
Home.css
css
Copy code
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

/* Intro Sections */
.intro {
  width: 100%;
  height: 85vh;
  background: var(--primary-gradient);
  position: relative;
}

.core-members-bg {
  background: var(--secondary-gradient);
  position: relative;
  overflow: hidden;
}

/* Glowing Shadow */
.glowing-shadow::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  box-shadow: 0 0 10px #1d50c3, 0 0 20px #1d50c3, 0 0 30px #1d50c3, 0 0 40px #00c3ff, 0 0 70px #00c3ff;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.5s;
}
.glowing-shadow:hover::after {
  opacity: 1;
}

/* Card and Button Hover */
.card-hover, .button-hover { transition: all 0.3s ease; }
.card-hover:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
.button-hover:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(0,0,0,0.2); }

/* Custom Carousel Dots */
.custom-dot-list {
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

/* Responsive */
@media (max-width: 1024px) { .intro { height: 70vh; } }
@media (max-width: 768px) {
  .intro { height: 60vh; }
  .card-hover:hover { transform: translateY(-3px); }
  .button-hover:hover { transform: translateY(-1px); }
  h1,h2,h3,h4 { font-size: 90%; }
}
