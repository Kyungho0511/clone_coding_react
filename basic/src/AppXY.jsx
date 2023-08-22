import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handlePointer = (event) => {
    // Move pointer on X,Y axis
    // setPosition({x: event.clientX, y: event.clientY});

    //  Move pointer on X axis only
    // setPosition(prev => ({x: event.clientX, y: prev.y}));

    // Move pointer on X axis only, using spread syntax
    setPosition(prev => ({...prev, x: event.clientX}));
  }
  return (
    <div className="container" onPointerMove={handlePointer}>
      <div className="pointer" style={{transform: `translate(${position.x}px, ${position.y}px)`}} />
    </div>
  );
}