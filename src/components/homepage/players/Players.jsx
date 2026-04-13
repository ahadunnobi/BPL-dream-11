import React, { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";

const Players = ({ playersPromise, setCoin, coin }) => {
  const players = use(playersPromise);
  const [selectedType, setSelectedType] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <div className="container mx-auto px-6 my-20">
      {/* Tab Switcher Header */}
      <div className="flex flex-col md:flex-row justify-between gap-6 items-center mb-10">
        <div>
          {selectedType === "available" ? (
            <h2 className="font-bold text-3xl text-white font-heading">Available Players</h2>
          ) : (
            <div className="flex flex-col">
              <h2 className="font-bold text-3xl text-white font-heading">
                Selected Players
              </h2>
              <span className="text-gray-500 text-sm mt-1">
                Your squad: {selectedPlayers.length} / {players.length} players
              </span>
            </div>
          )}
        </div>

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

      {/* Content Area */}
      <div className="min-h-[400px]">
        {selectedType === "available" ? (
          <AvailablePlayers
            players={players}
            setCoin={setCoin}
            coin={coin}
            setSelectedPlayers={setSelectedPlayers}
            selectedPlayers={selectedPlayers}
          />
        ) : (
          <SelectedPlayers
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            toggleToAvailable={() => setSelectedType("available")}
          />
        )}
      </div>
    </div>
  );
};

export default Players;
