import React from "react";
import { Box, Container, Heading, Text, VStack, HStack, Image, Badge, Button } from "@chakra-ui/react";

function ZigBox({ title, description, data, handleNavigation }) {

  return (
    <Box w="full" py={16}>
      <Container maxW="container.xl">
        <VStack spacing={16} align="center">
          {/* Header Section */}
          <VStack spacing={6} textAlign="center" maxW="800px">
            {title && (
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
                fontWeight="900"
                bgGradient="linear(to-r, #667eea, #764ba2)"
                bgClip="text"
                letterSpacing="wide"
              >
                {title}
              </Heading>
            )}
            {description && (
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="gray.600"
                fontWeight="600"
                maxW="600px"
                lineHeight="1.6"
              >
                {description}
              </Text>
            )}
          </VStack>

          {/* Content Sections */}
          <VStack spacing={20} w="full">
            {data?.map(({ title, description, image, extraButton, date, wing, isUpcoming, isClub }, index) => {
              if (!isUpcoming || isClub) {
                return (
                  <Box
                    key={index}
                    w="full"
                    maxW="1200px"
                    p={{ base: 6, md: 8 }}
                    borderRadius="2xl"
                    bg="white"
                    shadow="xl"
                    border="1px solid"
                    borderColor="gray.100"
                    _hover={{
                      shadow: "2xl",
                      transform: "translateY(-5px)",
                      transition: "all 0.3s ease"
                    }}
                    transition="all 0.3s ease"
                  >
                    <HStack
                      spacing={{ base: 8, md: 12 }}
                      align="center"
                      flexDirection={{ 
                        base: "column", 
                        md: index % 2 === 0 ? "row" : "row-reverse" 
                      }}
                    >
                      {/* Text Content */}
                      <VStack
                        spacing={6}
                        align={{ base: "center", md: "flex-start" }}
                        textAlign={{ base: "center", md: "left" }}
                        flex="1"
                      >
                        <VStack spacing={4} align={{ base: "center", md: "flex-start" }} w="full">
                          <HStack spacing={4} align="center" flexWrap="wrap" justify={{ base: "center", md: "flex-start" }}>
                            <Heading
                              as="h3"
                              fontSize={{ base: "2xl", md: "3xl" }}
                              fontWeight="800"
                              color="gray.800"
                              lineHeight="1.2"
                            >
                              {title}
                            </Heading>
                            {wing && (
                              <Badge
                                colorScheme="blue"
                                variant="solid"
                                px={3}
                                py={1}
                                borderRadius="full"
                                fontSize="sm"
                                fontWeight="bold"
                              >
                                {wing}
                              </Badge>
                            )}
                          </HStack>
                          
                          {date && (
                            <HStack spacing={2} color="gray.600">
                              <Text fontSize="sm">📅</Text>
                              <Text fontSize="sm" fontWeight="medium">
                                {typeof date === "string" ? date :
                                  <>
                                    {date.toDate().getDate()}.{date.toDate().getMonth() + 1}.{date.toDate().getFullYear()}
                                  </>
                                }
                              </Text>
                            </HStack>
                          )}
                        </VStack>

                        <Text
                          fontSize={{ base: "md", md: "lg" }}
                          color="gray.700"
                          lineHeight="1.7"
                          maxW="600px"
                        >
                          {description}
                        </Text>

                        {extraButton && (
                          <Button
                            colorScheme="blue"
                            variant="outline"
                            size={{ base: "md", md: "lg" }}
                            borderRadius="full"
                            px={8}
                            py={6}
                            fontWeight="semibold"
                            borderWidth="2px"
                            _hover={{
                              bg: "blue.500",
                              color: "white",
                              transform: "translateY(-2px)",
                              shadow: "lg"
                            }}
                            transition="all 0.3s ease"
                            onClick={() => handleNavigation(title)}
                          >
                            {extraButton.name}
                          </Button>
                        )}
                      </VStack>

                      {/* Image */}
                      <Box flex="1" maxW="500px">
                        <Image
                          src={image}
                          alt={title}
                          w="full"
                          h={{ base: "250px", md: "300px", lg: "350px" }}
                          objectFit="cover"
                          borderRadius="xl"
                          shadow="lg"
                          _hover={{
                            transform: "scale(1.02)",
                            transition: "transform 0.3s ease"
                          }}
                          transition="transform 0.3s ease"
                        />
                      </Box>
                    </HStack>
                  </Box>
                );
              }
              return null;
            })}
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}

export default ZigBox;
