import React from 'react';
import { FaTrashAlt, FaPlus } from 'react-icons/fa';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, toggleToAvailable }) => {
  
  const handleRemovePlayer = (player) => {
    setSelectedPlayers(prev => prev.filter(p => p.playerName !== player.playerName));
  };

  return (
    <div className="flex flex-col gap-6">
      {selectedPlayers.length === 0 ? (
        <div className="glass-card rounded-2xl p-12 text-center border-dashed border-white/20">
          <p className="text-gray-500 text-lg mb-6">No players selected yet. Start building your dream team!</p>
          <button 
            onClick={toggleToAvailable}
            className="btn-premium flex items-center gap-2 mx-auto"
          >
            <FaPlus /> Add Player
          </button>
        </div>
      ) : (
        <>
          {selectedPlayers.map((player, idx) => (
            <div 
              key={idx} 
              className="glass-card rounded-2xl p-4 flex items-center justify-between group hover:border-[#E7FE29]/30 transition-all"
            >
              <div className="flex items-center gap-6">
                <img 
                  src={player.playerImg} 
                  alt={player.playerName} 
                  className="w-20 h-20 rounded-xl object-cover border border-white/10"
                />
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
                onClick={() => handleRemovePlayer(player)}
                className="p-4 mr-4 text-red-500/50 hover:text-red-500 transition-colors"
                title="Remove Player"
              >
                <FaTrashAlt size={20} />
              </button>
            </div>
          ))}

          <div className="mt-8">
            <button 
              onClick={toggleToAvailable}
              className="btn-premium flex items-center gap-2"
            >
              <FaPlus /> Add More Players
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SelectedPlayers;
