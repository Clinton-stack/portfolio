"use client";

import { Box, Card, CardBody, Heading, Image, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import { projectsData } from "./constants/projectsdata";

export default function Projects() {
  return (
    <div className="projects">
     {projectsData.map((project) => (
      <Slide direction={`${ project.id % 2 === 0 ? 'right': 'left'}`} triggerOnce fraction={0.7} key={project.id}>   
        <Card maxW="lg" bgColor="none" className="cards">
          <CardBody>
            <Box
              as={Link}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              passHref
              pos="relative"
            >
              <Image
                src={project.image}
                alt={project.name}
                w="100%"
                maxH="260px"
              />
              <FaExternalLinkAlt className="link-icon" />
            </Box>
            <VStack mt={3} align={{ base: "center", md: "flex-start" }}>
              <Heading as="h3" size="l" className="headerText">
                PROJECT INFO
              </Heading>
              <p className="regularText">{project.description}</p>
              <Heading as="h3" size="l" className="headerText">
                CLIENT
              </Heading>
              <p className="regularText">{project.client}</p>
              <Heading as="h3" size="l" className="headerText">
                TECHNOLOGIES USED
              </Heading>
              <p className="regularText">{project.technologies}</p>
            </VStack>
          </CardBody>
        </Card>
        </Slide>
     ))} 
    </div>
  );
}
