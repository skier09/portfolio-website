import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.min.js';

const AnimatedBackground = () => {
  const containerRef = useRef(null);
  const shapesRef = useRef([]);

  // Function to generate random pastel color
  const getRandomColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = 70 + Math.random() * 30; // 70-100%
    const lightness = 60 + Math.random() * 20; // 60-80%
    return `hsla(${hue}, ${saturation}%, ${lightness}%, 0.6)`;
  };

  useEffect(() => {
    console.log('AnimatedBackground mounted');
    const container = containerRef.current;
    if (!container) return;

    // Create multiple shapes
    const createShapes = (count) => {
      const shapes = [];

      for (let i = 0; i < count; i++) {
        const shape = document.createElement('div');
        const type = ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)];
        const isOutlined = Math.random() > 0.5;
        const color = getRandomColor();
        
        shape.className = `floating-shape ${type}${isOutlined ? ' outlined' : ''}`;
        
        // Random initial position
        shape.style.position = 'absolute';
        shape.style.left = `${Math.random() * 100}%`;
        shape.style.top = `${Math.random() * 100}%`;
        
        // Apply color
        shape.style.color = color;
        if (type !== 'triangle') {
          if (isOutlined) {
            shape.style.borderColor = color;
          } else {
            shape.style.backgroundColor = color;
          }
        }
        
        container.appendChild(shape);
        shapes.push(shape);
      }

      return shapes;
    };

    // Initialize shapes
    shapesRef.current = createShapes(20);
    console.log('Initial shapes created:', shapesRef.current.length);

    // Animate a single shape
    const animateShape = (shape) => {
      anime({
        targets: shape,
        translateX: {
          value: function() {
            return anime.random(-300, 300);
          },
          duration: function() {
            return anime.random(1000, 3000);
          }
        },
        translateY: {
          value: function() {
            return anime.random(-300, 300);
          },
          duration: function() {
            return anime.random(1000, 3000);
          }
        },
        rotate: {
          value: function() {
            return anime.random(-360, 360);
          },
          duration: function() {
            return anime.random(1000, 3000);
          }
        },
        scale: {
          value: function() {
            return anime.random(0.5, 1.5);
          },
          duration: function() {
            return anime.random(1000, 3000);
          }
        },
        easing: 'easeInOutQuad',
        complete: () => {
          // Check if shape is still in DOM
          if (document.body.contains(shape)) {
            animateShape(shape);
          } else {
            // If shape was removed, create a new one
            const newShapes = createShapes(1);
            shapesRef.current = [...shapesRef.current, ...newShapes];
            animateShape(newShapes[0]);
          }
        }
      });
    };

    // Start animations for all shapes
    shapesRef.current.forEach(shape => {
      animateShape(shape);
    });

    // Periodically check and maintain minimum number of shapes
    const checkShapes = () => {
      const currentShapes = shapesRef.current.filter(shape => document.body.contains(shape));
      if (currentShapes.length < 20) {
        const newShapes = createShapes(20 - currentShapes.length);
        shapesRef.current = [...currentShapes, ...newShapes];
        newShapes.forEach(shape => animateShape(shape));
      }
    };

    const intervalId = setInterval(checkShapes, 1000);

    // Cleanup
    return () => {
      console.log('AnimatedBackground cleanup');
      clearInterval(intervalId);
      shapesRef.current.forEach(shape => {
        anime.remove(shape);
        shape.remove();
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}
    />
  );
};

export default AnimatedBackground; 