"use client";

import React from 'react';
import Image from 'next/image';
import { FaFlag, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const PlayerCard = ({ player, onSelect }) => {
  const { playerName, playerCountry, playerImg, playerType, rating, battingStyle, bowlingStyle, price } = player;

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -5 }}
      className="glass-card rounded-[20px] p-5 flex flex-col group"
    >
      {/* Player Image container */}
      <div className="relative h-64 w-full mb-6 rounded-xl overflow-hidden">
        <Image 
          src={playerImg} 
          alt={playerName} 
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-xs font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
            {playerType}
          </span>
        </div>
      </div>

      {/* Name and Rating */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white font-heading">{playerName}</h3>
        <div className="flex items-center gap-1.5 px-2 py-1 bg-[#E7FE29]/10 rounded-lg">
          <FaStar className="text-[#E7FE29] text-xs" />
          <span className="text-[#E7FE29] text-xs font-bold">{rating}</span>
        </div>
      </div>

      {/* Country and Role */}
      <div className="flex items-center justify-between text-gray-400 text-sm mb-4 border-b border-white/5 pb-4">
        <div className="flex items-center gap-2">
          <FaFlag className="text-gray-500" />
          <span>{playerCountry}</span>
        </div>
        <div className="px-3 py-1 bg-white/5 rounded-lg border border-white/5 text-[10px] font-bold uppercase tracking-widest">
          {playerType}
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-3 mb-6 flex-grow">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Batting</span>
          <span className="text-gray-300 font-medium">{battingStyle}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Bowling</span>
          <span className="text-gray-300 font-medium">{bowlingStyle === 'N/A' || bowlingStyle === 'None' ? 'None' : bowlingStyle}</span>
        </div>
      </div>

      {/* Price and Action */}
      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">Price</span>
          <span className="text-lg font-bold text-white">${price.toLocaleString()}</span>
        </div>
        <button 
          onClick={() => onSelect(player)}
          className="px-5 py-2.5 bg-transparent border border-[#E7FE29] text-[#E7FE29] rounded-xl text-sm font-bold transition-all hover:bg-[#E7FE29] hover:text-black hover:shadow-[0_0_15px_rgba(231,254,41,0.3)]"
        >
          Choose Player
        </button>
      </div>
    </motion.div>
  );
};

export default PlayerCard;
