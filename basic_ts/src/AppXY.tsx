import { useState } from 'react';
import './AppXY.css'

function AppXY() {
  const[location, setLocation] = useState({x: -15, y: -15});
  
  const mouseHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const x = event.clientX - 15;
    const y = event.clientY - 15;
    setLocation((prev) => ({...prev, x, y}));
  }

  return (
    <div className="container" onMouseMove={mouseHandler}>
      <div className="pointer" style={{left: `${location.x}px`, top: `${location.y}px`}}></div>
    </div>
  );
}

export default AppXY;