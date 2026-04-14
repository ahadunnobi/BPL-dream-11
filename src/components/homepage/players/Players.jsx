"use client";

import React, { useState } from "react";
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";
import { useCoin } from "@/context/CoinContext";
import { motion, AnimatePresence } from "framer-motion";

const Players = ({ initialPlayers }) => {
  const [selectedType, setSelectedType] = useState("available");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");
  const { selectedPlayers } = useCoin();

  const filteredPlayers = initialPlayers.filter(player => {
    const matchesSearch = player.playerName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === "All" || player.playerType.includes(selectedRole);
    return matchesSearch && matchesRole;
  });

  const roles = ["All", "Batsman", "Bowler", "All-Rounder", "Wicketkeeper"];

  return (
    <div className="container mx-auto px-6 my-20">
      {/* Tab Switcher Header */}
      <div className="flex flex-col md:flex-row justify-between gap-6 items-center mb-10">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
        >
          {selectedType === "available" ? (
            <h2 className="font-bold text-3xl text-white font-heading">Available Players</h2>
          ) : (
            <div className="flex flex-col">
              <h2 className="font-bold text-3xl text-white font-heading">
                Selected Players
              </h2>
              <span className="text-gray-500 text-sm mt-1">
                Your squad: {selectedPlayers.length} / 11 players
              </span>
            </div>
          )}
        </motion.div>

        {/* Custom Tabs */}
        <div className="flex p-1 bg-white/5 border border-white/10 rounded-2xl">
          <button
            onClick={() => setSelectedType("available")}
            className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
              selectedType === "available" 
              ? "bg-[#E7FE29] text-black shadow-[0_0_20px_rgba(231,254,41,0.2)]" 
              : "text-gray-400 hover:text-white"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
              selectedType === "selected" 
              ? "bg-[#E7FE29] text-black shadow-[0_0_20px_rgba(231,254,41,0.2)]" 
              : "text-gray-400 hover:text-white"
            }`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {/* New Tools Section: Search & Filter */}
      {selectedType === "available" && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row gap-6 mb-12 items-center justify-between"
        >
          {/* Search Tool */}
          <div className="relative w-full lg:max-w-md">
            <input 
              type="text" 
              placeholder="Search players by name..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#E7FE29] transition-all"
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500">
              🔍
            </div>
          </div>

          {/* Role Filter Tool */}
          <div className="flex flex-wrap gap-2 justify-center">
            {roles.map(role => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border ${
                  selectedRole === role 
                  ? "bg-white/10 border-[#E7FE29] text-[#E7FE29]" 
                  : "bg-transparent border-white/5 text-gray-400 hover:text-white hover:border-white/20"
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Content Area with Framer Motion transitions */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          {selectedType === "available" ? (
            <motion.div
              key="available"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {filteredPlayers.length > 0 ? (
                <AvailablePlayers players={filteredPlayers} />
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="text-5xl mb-4">🏜️</div>
                  <h3 className="text-white font-bold text-xl mb-2">No Players Found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter</p>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="selected"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <SelectedPlayers
                toggleToAvailable={() => setSelectedType("available")}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Players;
