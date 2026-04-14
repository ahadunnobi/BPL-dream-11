"use client";

import React from 'react';
import PlayerCard from './PlayerCard';
import { useCoin } from '@/context/CoinContext';
import { motion, AnimatePresence } from 'framer-motion';

const AvailablePlayers = ({ players }) => {
  const { selectPlayer } = useCoin();

  return (
    <motion.div 
      layout
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <AnimatePresence mode="popLayout">
        {players.map((player) => (
          <PlayerCard 
            key={player.playerName} 
            player={player} 
            onSelect={selectPlayer} 
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default AvailablePlayers;
