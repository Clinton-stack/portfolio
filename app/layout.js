import { Epilogue } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from '@chakra-ui/react'
import 'reactflow/dist/style.css';



const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata = {
  title: "Clinton Emenari | Frontend Developer",
  description: "Frontend Developer building React, Next.js, React Native, and AWS-backed user experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
        <ChakraProvider>{children} </ChakraProvider>
      </body>
    </html>
  );
}
