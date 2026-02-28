
import React from 'react';

const GrainOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.05]">
      <svg width="100%" height="100%">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
};

export default GrainOverlay;