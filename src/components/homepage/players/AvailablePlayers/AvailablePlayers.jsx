import React from 'react';
import PlayerCard from './PlayerCard';
import { toast } from 'react-toastify';

const AvailablePlayers = ({ players, setCoin, coin, setSelectedPlayers, selectedPlayers }) => {
  
  const handleSelectPlayer = (player) => {
    // Check if player already selected
    if (selectedPlayers.find(p => p.playerName === player.playerName)) {
      toast.warning(`${player.playerName} is already in your Dream 11!`, {
        position: "top-center",
        theme: "dark"
      });
      return;
    }

    // Check selection limit (max 6)
    if (selectedPlayers.length >= 6) {
      toast.error("Squad Full! You can only select up to 6 players.", {
        position: "top-center",
        theme: "dark"
      });
      return;
    }

    // Check coin balance
    if (coin < player.price) {
      toast.error("Insufficient Coins! Claim more credit or choose a cheaper player.", {
        position: "top-center",
        theme: "dark"
      });
      return;
    }

    // Process selection
    setCoin(prev => prev - player.price);
    setSelectedPlayers(prev => [...prev, player]);
    toast.success(`Success! ${player.playerName} has joined your squad.`, {
      position: "top-center",
      theme: "dark"
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {players.map((player, idx) => (
        <PlayerCard 
          key={idx} 
          player={player} 
          handleSelectPlayer={handleSelectPlayer} 
        />
      ))}
    </div>
  );
};

export default AvailablePlayers;
