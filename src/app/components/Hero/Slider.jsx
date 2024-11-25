import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

const images = [
  '/images/kashi-os.png',
  '/images/discord_clone.png',
  '/images/hero_section.png'
];

const VerticalSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  const controls = useAnimation();
  const containerRef = useRef(null);

  const startInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
  };

  useEffect(() => {
    startInterval();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(intervalRef.current);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        startInterval();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleDragEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    clearInterval(intervalRef.current);
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      startInterval()
    }, 1000)
  };

  return (
    <div className='cursor-pointer select-none' ref={containerRef}>
      <AnimatePresence initial={false}>
        {images.map((image, index) => (
          index === currentIndex && (
            <motion.img
              key={image}
              src={image}
              alt={`Slide ${index}`}
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.5 }}
              // drag="y"
              // onDragStart={() => {
              //   clearInterval(intervalRef.current)
              // }}
              // dragConstraints={containerRef}
              // onDragEnd={handleDragEnd}
              onClick={handleDragEnd}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'left'
              }}
            />
          )
        ))}
      </AnimatePresence>
    </div>
  );
};

export default VerticalSlideshow;
