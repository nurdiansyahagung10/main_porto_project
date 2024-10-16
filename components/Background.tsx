// components/VantaFog.tsx

import React, { useEffect, useRef } from 'react';
import Vanta from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three';

const Background: React.FC = () => {
  const vantaRef = useRef<any>(null);
  const myRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!vantaRef.current && myRef.current) {
      vantaRef.current = Vanta({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x7f66c0,
        midtoneColor: 0x8b25cf,
        lowlightColor: 0x7f3ac3,
        baseColor: 0x0,
        blurFactor: 0.58,
        speed: 1.40,
        zoom: 1.10,
        THREE: THREE,
      });
    }

    return () => {
      if (vantaRef.current) {
        vantaRef.current.destroy();
        vantaRef.current = null;
      }
    };
  }, []);

  return <div ref={myRef} style={{ width: '100%', height: '100vh' }} />;
};

export default Background;
