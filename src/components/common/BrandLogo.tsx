import React from 'react';
import parivahanLogo from '../../assets/parivahan-logo-cropped.png';

export interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'white';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'full' }) => {
  const isWhite = variant === 'white';
  const isCompact = variant === 'compact';

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        textDecoration: 'none',
        flexShrink: 0
      }}
    >
      <img
        src={parivahanLogo}
        alt="Parivahan Sewa | Ministry of Road Transport & Highways"
        style={{
          height: isCompact ? '38px' : '46px',
          width: 'auto',
          maxWidth: '180px',
          objectFit: 'contain',
          display: 'block',
          filter: isWhite ? 'brightness(0) invert(1)' : 'none'
        }}
      />
    </div>
  );
};
