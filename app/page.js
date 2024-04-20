import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import { Box, Button, Container, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import BackToTopButton from "@/components/BackToTopButton";


export default function Home() {
  return (
    <Container maxW='1200px'>
      <HStack spacing="10px" h='50px' align='center' mt='30px'>
        <Link
          href="tel:+4915216455841"
          target="_blank"
        >
          <FaPhone className="icons" />
        </Link>
        <Link
          href="mailto:clintonemenari1@gmail.com"
          target="_blank"
        >
          <CiMail className="icons" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/clinton-emenari-8aba67108/"
          target="_blank"
        >
          <FaLinkedin className="icons" />
        </Link>
        <Link
          href="https://www.instagram.com/clinton_emenari/"
          target="_blank"
        >
          <FaInstagram className="icons" />
        </Link>
        <Link href="https://github.com/Clinton-stack" target="_blank">
          <FaGithub className="icons" />
        </Link>
      </HStack>

      <HeroSection />

      <div className="experience-section">
        <VStack spacing={5} >
          <Heading as="h3" size="l" className="headerText">
            EXPERIENCE
          </Heading>
          <Experience />
        </VStack>
      </div>

      <div className="projects-section">
        <VStack spacing={5} >
          <Heading as="h3" size="l" className="headerText">
            SOME PAST PROJECTS
          </Heading>
          <Projects />
        </VStack>
      </div>

      <div className="contact-section">
        <VStack spacing={5} >
          <Heading as="h3" size="l" className="headerText">
            CONTACT ME
          </Heading>
          <HStack spacing="10px" h='50px' align='center' mb='30px'>
            <Link
              href="tel:+4915216455841"
              target="_blank"
            >
              <FaPhone className="icons" />
            </Link>
            <Link
              href="mailto:clintonemenari1@gmail.com"
              target="_blank"
            >
              <CiMail className="icons" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/clinton-emenari-8aba67108/"
              target="_blank"
            >
              <FaLinkedin className="icons" />
            </Link>
            <Link
              href="https://www.instagram.com/clinton_emenari/"
              target="_blank"
            >
              <FaInstagram className="icons" />
            </Link>
            <Link href="https://github.com/Clinton-stack" target="_blank">
              <FaGithub className="icons" />
            </Link>
          </HStack>
        </VStack>
      </div>

      <BackToTopButton />
    </Container>
  );
}
