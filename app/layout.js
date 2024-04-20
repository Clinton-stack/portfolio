import { Epilogue } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from '@chakra-ui/react'
import 'reactflow/dist/style.css';



const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata = {
  title: "Clintons Portfolio",
  description: "Clinton is a software engineer who loves to code.",
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
