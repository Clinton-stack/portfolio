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
        <Image
          w={{ base: "250px", md: "300px", lg: "320px" }}
          minW="200px"
          h="auto"
          borderRadius="full"
          src="/clinton2.png"
          alt="Clintons Image"
          bgColor="#ffd400"
        />
      </motion.div>

      <HStack w="600px">
        <AnimatePresence>
          {showAboutMe ? (
            <motion.div
              key="hero-text"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
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
                  SOFTWARE DEVELOPER
                </Heading>
                <p className="regularText">
                  &#34;I am an enthusiastic software developer driven by a
                  passion for problem-solving through innovative software
                  solutions.&#34;
                </p>
                <Button
                  as="a"
                  href="/assets/ClintonEmenariResume.pdf"
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
                  Absolutely love diving into the world of full-stack
                  development. I&apos;ve been working hard to master everything
                  from the front-end (think cool user interfaces) to the
                  back-end (the engine that makes everything tick). Technologies
                  like React, Node.js, and MongoDB have become my go-to tools,
                  and I&apos;m also exploring cloud platforms like AWS to take
                  things to the next level. This journey keeps me on my toes and
                  constantly learning – it&apos;s the best part of being a
                  software developer!
                  <br />
                  <br />
                  Software engineering and data analysis are my true passions. I
                  bring a can-do attitude and a willingness to learn to every
                  project. I&apos;m a big believer in taking initiative and
                  staying curious about new tech. That&apos;s why I&apos;m
                  always looking for ways to expand my skillset and keep up with
                  the latest advancements. New challenges energize me, and I
                  love figuring out how to use the newest tools to get the job
                  done.
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
