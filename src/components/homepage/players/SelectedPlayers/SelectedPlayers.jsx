"use client";

import React from 'react';
import Image from 'next/image';
import { FaTrashAlt, FaPlus } from 'react-icons/fa';
import { useCoin } from '@/context/CoinContext';
import { motion, AnimatePresence } from 'framer-motion';

const SelectedPlayers = ({ toggleToAvailable }) => {
  const { selectedPlayers, removePlayer } = useCoin();

  const roleCounts = selectedPlayers.reduce((acc, player) => {
    const role = player.playerType;
    acc[role] = (acc[role] || 0) + 1;
    return acc;
  }, {});

  const totalSpent = selectedPlayers.reduce((acc, player) => acc + player.price, 0);

  return (
    <div className="flex flex-col gap-6">
      {selectedPlayers.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {/* Stats Tool */}
          <div className="glass-card rounded-2xl p-6 text-center border-white/5">
            <span className="text-gray-500 text-xs uppercase tracking-widest block mb-2">Squad</span>
            <span className="text-2xl font-bold text-white font-heading">{selectedPlayers.length} / 11</span>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center border-white/5">
            <span className="text-gray-500 text-xs uppercase tracking-widest block mb-2">Cost</span>
            <span className="text-xl font-bold text-[#E7FE29] font-heading">${(totalSpent / 1000000).toFixed(1)}M</span>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center border-white/5 col-span-2">
            <span className="text-gray-500 text-xs uppercase tracking-widest block mb-2">Composition</span>
            <div className="flex justify-center gap-3">
              {Object.entries(roleCounts).map(([role, count]) => (
                <span key={role} className="text-xs font-bold text-white px-2 py-1 bg-white/5 rounded-lg">
                  {count} {role.split('-')[0].charAt(0)}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      <AnimatePresence mode="popLayout" initial={false}>
        {selectedPlayers.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card rounded-2xl p-12 text-center border-dashed border-white/20"
          >
            <p className="text-gray-500 text-lg mb-6">No players selected yet. Start building your dream team!</p>
            <button 
              onClick={toggleToAvailable}
              className="btn-premium flex items-center gap-2 mx-auto"
            >
              <FaPlus /> Add Player
            </button>
          </motion.div>
        ) : (
          <>
            {selectedPlayers.map((player) => (
              <motion.div 
                layout
                key={player.playerId}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="glass-card rounded-2xl p-4 flex items-center justify-between group hover:border-[#E7FE29]/30 transition-all"
              >
                <div className="flex items-center gap-6">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-white/10">
                    <Image 
                      src={player.playerImg} 
                      alt={player.playerName} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 font-heading">{player.playerName}</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">{player.playerType}</span>
                      <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                      <span className="text-gray-400 text-sm font-medium">${player.price.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => removePlayer(player)}
                  className="p-4 mr-4 text-red-500/50 hover:text-red-500 transition-colors"
                  title="Remove Player"
                >
                  <FaTrashAlt size={20} />
                </button>
              </motion.div>
            ))}

            <motion.div layout className="mt-8">
              <button 
                onClick={toggleToAvailable}
                className="btn-premium flex items-center gap-2"
              >
                <FaPlus /> Add More Players
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SelectedPlayers;
