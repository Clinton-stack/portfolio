"use client";
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export default function HeroSection() {
  const [showAboutMe, setShowAboutMe] = useState(true);

  const toggleAboutMe = () => {
    setShowAboutMe(!showAboutMe);
  };
  return (
    <div className="hero-section">
      <motion.div
        key="hero-image"
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Box
          h={{base:'200px', md:'300px', lg:'400px'}}
          w={{base:'200px', md:'300px', lg:'400px'}}
          borderRadius="full" 
          overflow="hidden" 
          bgColor="#ffd400"
        >
          <Image
            w="100%"
            h="100%"
            src="/profile2.jpeg"
            alt="Clintons Image"
            objectFit="cover" 
          />
        </Box>
      </motion.div>

      <HStack w="600px">
        <AnimatePresence>
          {showAboutMe ? (
            <motion.div
              key="hero-text"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.5 }}
            >
              <VStack
                className="textAlignment"
                spacing={5}
                align="flex-start"
                overflow="hidden"
              >
                <Heading
                  className="heroText"
                  fontSize={{ base: "50px", md: "60px", lg: "65px" }}
                >
                  Clinton Emenari
                </Heading>
                <Heading as="h3" size="l" className="headerText">
                  FRONTEND DEVELOPER
                </Heading>
                <p className="regularText">
                  &#34;Frontend Developer building responsive, accessible web and mobile
                  interfaces with React, Next.js, React Native, and AWS-backed
                  services.&#34;
                </p>
                <Button
                  as="a"
                  href="/assets/Clinton_Emenari_CV.pdf"
                  download
                  target="_blank"
                  size="md"
                  borderRadius="full"
                  bgGradient="linear(to-tr, #ffd400, #fcf3cc)"
                  maxW="210px"
                  p="30px"
                >
                  Download Résumé
                </Button>
              </VStack>
            </motion.div>
          ) : (
            <motion.div
              key="about-me-text"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <VStack className="textAlignment" spacing={5} align="flex-start">
                <Heading as="h3" size="l" className="headerText">
                  About Me
                </Heading>
                <Text className="regularText">
                  I build responsive, accessible interfaces across web and mobile,
                  with a strong focus on React, Next.js, React Native, Tailwind
                  CSS, and Chakra UI. My work connects clean user experiences
                  with REST APIs and cloud services such as AWS Lambda, Amazon
                  S3, and CloudWatch.
                  <br />
                  <br />
                  I&apos;m currently part of a small startup team at Ingenious
                  Technology, where I translate product ideas into reusable
                  frontend components and practical user flows. Recent work
                  includes iRides, a luxury vehicle rental platform for
                  discovering premium vehicles, viewing vehicle details, and
                  managing bookings.
                </Text>
              </VStack>
            </motion.div>
          )}
        </AnimatePresence>
        {showAboutMe ? (
          <IoIosArrowDropright
            className="arrow-icons"
            onClick={toggleAboutMe}
          />
        ) : (
          <IoIosArrowDropleft className="arrow-icons" onClick={toggleAboutMe} />
        )}
      </HStack>
    </div>
  );
}
