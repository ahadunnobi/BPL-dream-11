"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const CoinContext = createContext();

export const CoinProvider = ({ children }) => {
  const [coin, setCoin] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  // Load from local storage on mount
  useEffect(() => {
    const savedCoin = localStorage.getItem('bpl_coin');
    const savedPlayers = localStorage.getItem('bpl_selected_players');
    if (savedCoin) setCoin(parseInt(savedCoin));
    if (savedPlayers) setSelectedPlayers(JSON.parse(savedPlayers));
  }, []);

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('bpl_coin', coin.toString());
    localStorage.setItem('bpl_selected_players', JSON.stringify(selectedPlayers));
  }, [coin, selectedPlayers]);

  const addCoin = (amount = 600000) => {
    setCoin(prev => prev + amount);
    toast.success("Credit Added! Your balance has been updated.", {
      position: "top-center",
      theme: "dark"
    });
  };

  const selectPlayer = (player) => {
    if (selectedPlayers.find(p => p.playerId === player.playerId)) {
      toast.warning(`${player.playerName} is already in your Dream 11!`, {
        position: "top-center",
        theme: "dark"
      });
      return false;
    }

    if (selectedPlayers.length >= 11) {
      toast.error("Squad Full! You can only select up to 11 players.", {
        position: "top-center",
        theme: "dark"
      });
      return false;
    }

    if (coin < player.price) {
      toast.error("Insufficient Coins! Claim more credit or choose a cheaper player.", {
        position: "top-center",
        theme: "dark"
      });
      return false;
    }

    setCoin(prev => prev - player.price);
    setSelectedPlayers(prev => [...prev, player]);
    toast.success(`Success! ${player.playerName} has joined your squad.`, {
      position: "top-center",
      theme: "dark"
    });
    return true;
  };

  const removePlayer = (player) => {
    setCoin(prev => prev + player.price);
    setSelectedPlayers(prev => prev.filter(p => p.playerId !== player.playerId));
    toast.info(`${player.playerName} has been removed. Credits refunded.`, {
      position: "top-center",
      theme: "dark"
    });
  };

  return (
    <CoinContext.Provider value={{ 
      coin, 
      addCoin, 
      selectedPlayers, 
      selectPlayer, 
      removePlayer 
    }}>
      {children}
    </CoinContext.Provider>
  );
};

export const useCoin = () => {
  const context = useContext(CoinContext);
  if (!context) throw new Error('useCoin must be used within CoinProvider');
  return context;
};
