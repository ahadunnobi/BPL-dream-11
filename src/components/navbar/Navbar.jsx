"use client";

import React from 'react';
import Image from 'next/image';
import { useCoin } from '@/context/CoinContext';

const Navbar = () => {
  const { coin } = useCoin();

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-white/5 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="BPL Logo" 
            width={48} 
            height={48} 
            className="object-contain"
          />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E7FE29]">
            BPL Dream 11
          </span>
        </div>

        {/* Links & Coin */}
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <li><a href="#" className="hover:text-[#E7FE29] transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-[#E7FE29] transition-colors">Fixtures</a></li>
            <li><a href="#" className="hover:text-[#E7FE29] transition-colors">Teams</a></li>
            <li><a href="#" className="hover:text-[#E7FE29] transition-colors">Schedules</a></li>
          </ul>

          {/* Coin Badge */}
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl glow-neon">
            <span className="font-bold text-[#E7FE29]">{coin.toLocaleString()}</span>
            <span className="text-gray-400 text-sm font-semibold">Coin</span>
            <Image 
              src="/dollar_1.png" 
              alt="Coin" 
              width={20} 
              height={20} 
              className="ml-1"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
