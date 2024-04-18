import { Box, Button, Container, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";


export default function Home() {
  return (
    <Container maxW='1200px'>
      <HStack spacing="10px" h='50px' align='center' mt='30px'>
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
      <div className="hero-section">

        <Box>
          <Image
            w={{ base: "250px", md: "300px", lg: "320px" }}
            minW="200px"
            h="auto"
            borderRadius="full"
            src="/clinton2.png"
            alt="Clintons Image"
            bgColor='#ffd400'
          />
        </Box>
        <HStack w='600px'>
          <VStack  align={{ md: 'left', lg: 'left' }} spacing={5}>
            <Heading className="heroText" fontSize={{ base: '50px', md: '60px', lg: '65px' }} >
              Clinton Emenari
            </Heading>
            <Text className="devText">
              SOFTWARE DEVELOPER
            </Text>
            <Text className="regularText">
              &#34;I am an enthusiastic software developer driven by a passion for
              problem-solving through innovative software solutions.&#34;
            </Text>
            <Button size='md' borderRadius='full' bgGradient="linear(to-tr, #ffd400, #fcf3cc)" maxW='210px' p='30px'>Download Résumé</Button>
          </VStack>
          <IoIosArrowDropright className="icons" />
        </HStack>


      </div>

    </Container>
  );
}
