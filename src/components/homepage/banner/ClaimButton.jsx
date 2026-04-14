"use client";

import React from 'react';
import { useCoin } from '@/context/CoinContext';

const ClaimButton = () => {
  const { addCoin } = useCoin();

  return (
    <button 
      onClick={() => addCoin()}
      className="btn-premium group relative overflow-hidden"
    >
      <span className="relative z-10">Claim Free Credit</span>
      <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
    </button>
  );
};

export default ClaimButton;
