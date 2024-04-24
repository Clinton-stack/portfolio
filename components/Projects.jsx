"use client";

import { Box, Card, CardBody, Heading, Image, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";

export default function Projects() {
  return (
    <div className="projects">
      <Slide direction="left" triggerOnce fraction={0.7}>
        <Card maxW="lg" bgColor="none" className="cards">
          <CardBody>
            <Box
              as={Link}
              href="https://ingenious-technology.org/"
              target="_blank"
              rel="noopener noreferrer"
              passHref
              pos="relative"
            >
              <Image
                src="/ingeniouswebsite.png"
                alt="Ingenious Website"
                w="100%"
                maxH="300px"
              />
              <FaExternalLinkAlt className="link-icon" />
            </Box>

            <VStack mt={3} align={{ base: "center", md: "flex-start" }}>
              <Heading as="h3" size="l" className="headerText">
                PROJECT INFO
              </Heading>
              <p className="regularText">
                An informative website for Ingenious Technologies. Built with
                React, Next.js, Chakra UI and AWS Technologies
              </p>
              <Heading as="h3" size="l" className="headerText">
                CLIENT
              </Heading>
              <p className="regularText">Ingenious Technologies</p>
              <Heading as="h3" size="l" className="headerText">
                TECHNOLOGIES USED
              </Heading>
              <p className="regularText">
                React, Next.js, Chakra UI, Tailwind, AWS Lamba, AWS S3, AWS
                Cloudwatch
              </p>
            </VStack>
          </CardBody>
        </Card>
      </Slide>
      <Slide direction="right" triggerOnce fraction={0.7}>
        <Card maxW="lg" bgColor="none" className="cards">
          <CardBody>
            <Box
              as={Link}
              href="https://food-lovers-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              passHref
              pos="relative"
            >
              <Image
                src="/foodlovers.png"
                alt="Food Lovers Website"
                w="100%"
                maxH="260px"
              />
              <FaExternalLinkAlt className="link-icon" />
            </Box>

            <VStack mt={3} align={{ base: "center", md: "flex-start" }}>
              <Heading as="h3" size="l" className="headerText">
                PROJECT INFO
              </Heading>
              <p className="regularText">
                A website for food lovers to connect and share their favorite
                food recipes. It was built with React, Next.js and Tailwind CSS
              </p>
              <Heading as="h3" size="l" className="headerText">
                CLIENT
              </Heading>
              <p className="regularText">Food Lovers</p>
              <Heading as="h3" size="l" className="headerText">
                TECHNOLOGIES USED
              </Heading>
              <p className="regularText">React, Next.js, Tailwind, AWS S3,</p>
            </VStack>
          </CardBody>
        </Card>
      </Slide>

      <Slide direction="left" triggerOnce fraction={0.7}>
        <Card maxW="lg" bgColor="none" className="cards">
          <CardBody>
            <Box
              as={Link}
              href="https://digitalsocietyschool.org/insight/the-smart-talking-plant-pot/"
              target="_blank"
              rel="noopener noreferrer"
              passHref
              pos="relative"
            >
              <Image
                src="/plantpot.jpeg"
                alt="Smart Plant pot"
                w="100%"
                maxH="260px"
              />
              <FaExternalLinkAlt className="link-icon" />
            </Box>

            <VStack mt={3} align={{ base: "center", md: "flex-start" }}>
              <Heading as="h3" size="l" className="headerText">
                PROJECT INFO
              </Heading>
              <p className="regularText">
                A smart plant pot built to help educate and empower Dutch
                citizen on how to combat night time heat in the Netherlands. The
                prototype was built using C and Arduino
              </p>
              <Heading as="h3" size="l" className="headerText">
                CLIENT
              </Heading>
              <p className="regularText">Digital School Society</p>
              <Heading as="h3" size="l" className="headerText">
                TECHNOLOGIES USED
              </Heading>
              <p className="regularText">C, Arduino</p>
            </VStack>
          </CardBody>
        </Card>
      </Slide>

      <Slide direction="right" triggerOnce fraction={0.7}>
        <Card maxW="lg" bgColor="none" className="cards">
          <CardBody>
            <Box
              as={Link}
              href="https://ingenious-ams.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              passHref
              pos="relative"
            >
              <Image
                src="/ingenious-ams.png"
                alt="Asset Managment System"
                w="100%"
                maxH="260px"
              />
              <FaExternalLinkAlt className="link-icon" />
            </Box>

            <VStack mt={3} align={{ base: "center", md: "flex-start" }}>
              <Heading as="h3" size="l" className="headerText">
                PROJECT INFO
              </Heading>
              <p className="regularText">
                An asset management system for managing various kind of assest
                for Ingenious Technologies. Front-end Built using React, Next.js
                and Chakra UI. Project still in progress
              </p>
              <Heading as="h3" size="l" className="headerText">
                CLIENT
              </Heading>
              <p className="regularText">Ingenious Technologies</p>
              <Heading as="h3" size="l" className="headerText">
                TECHNOLOGIES USED
              </Heading>
              <p className="regularText">React, Next.js, Chakra UI,</p>
            </VStack>
          </CardBody>
        </Card>
      </Slide>

      
    </div>
  );
}
