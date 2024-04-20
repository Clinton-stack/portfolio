
'use client';
import { useState, useEffect } from 'react';

export default function BackToTopButton() {
    const [showBackToTop, setShowBackToTop] = useState(false); 

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
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
        <div id="backToTopBtn" style={{ display: showBackToTop ? 'block' : 'none' }}>
            <a href="#top" onClick={scrollToTop}>
                &uarr;
            </a>
        </div>
    );
}
