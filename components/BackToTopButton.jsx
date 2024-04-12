
'use client'
import  { useState, useEffect } from 'react'

export default function BackToTopButton() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 500) {
            console.log('scrolling')
          setShowBackToTop(true);
        } else {
          setShowBackToTop(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  

  return (
    <div id="backToTopBtn" onClick={scrollToTop} >
    <a href="#" aria-label="Back to Top">&#8593;</a>
  </div>
  )
}
