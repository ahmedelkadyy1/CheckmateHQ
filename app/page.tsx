"use client";

import React, { useState } from 'react';
import { Trophy, Flame, ChevronRight, User } from 'lucide-react';

const FriendsLeaderboard = () => {
  const initialFriends = [
    { rank: 1, name: "Alex", rating: 1420, wins: 24, losses: 12, streak: 3, isHot: true },
    { rank: 2, name: "Jordan", rating: 1385, wins: 20, losses: 15, streak: 1, isHot: false },
    { rank: 3, name: "Sam", rating: 1210, wins: 15, losses: 18, streak: 0, isHot: false },
    { rank: 4, name: "Chris", rating: 950, wins: 8, losses: 22, streak: 0, isHot: false },
  ];

  const [friends, setFriends] = useState(initialFriends);

  // Random match updater (for testing)
  const addRandomMatch = () => {
    const idx = Math.floor(Math.random() * friends.length);
    const winner = { ...friends[idx] };
    const won = Math.random() > 0.5;

    if (won) {
      winner.wins += 1;
      winner.rating += 10;
      winner.streak += 1;
      winner.isHot = winner.streak >= 3;
    } else {
      winner.losses += 1;
      winner.rating -= 5;
      winner.streak = 0;
      winner.isHot = false;
    }

    const updated = [...friends];
    updated[idx] = winner;
    updated.sort((a, b) => b.rating - a.rating);
    updated.forEach((f, i) => f.rank = i + 1);

    setFriends(updated);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-4 md:p-10 font-sans">
      <div className="max-w-2xl mx-auto">

        {/* Header with Logo */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <img 
              src="/logo.png" 
              alt="CheckmateHQ Logo" 
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-black italic tracking-tighter">THE GAUNTLET</h1>
              <p className="text-neutral-500 text-sm">Our Private Elo Rankings</p>
            </div>
          </div>

          {/* Player count */}
          <div className="bg-neutral-900 px-4 py-2 rounded-full border border-neutral-800 text-xs font-bold text-neutral-400">
            {friends.length} PLAYERS
          </div>
        </div>

        {/* Player List */}
        <div className="space-y-3">
          {friends.map((friend) => (
            <div 
              key={friend.rank}
              className="relative overflow-hidden group bg-neutral-900/50 border border-neutral-800 rounded-2xl p-4 transition-all hover:border-neutral-600 hover:bg-neutral-900"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`text-xl font-black w-8 ${
                    friend.rank === 1 ? 'text-yellow-500' : 'text-neutral-600'
                  }`}>
                    {friend.rank.toString().padStart(2, '0')}
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-neutral-700">
                      {friend.rank === 1 ? <Trophy size={18} className="text-yellow-500" /> : <User size={18} className="text-neutral-500" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg">{friend.name}</span>
                        {friend.isHot && <Flame size={16} className="text-orange-500 animate-pulse" />}
                      </div>
                      <div className="text-xs text-neutral-500 flex gap-2">
                        <span>{friend.wins}W</span>
                        <span>{friend.losses}L</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-right">
                  <div>
                    <div className="text-xl font-mono font-black text-emerald-400">
                      {friend.rating}
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                      ELO RATING
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-neutral-700 group-hover:text-neutral-400 transition-colors" />
                </div>
              </div>

              {friend.rank === 1 && (
                <div className="absolute inset-0 bg-yellow-500/5 pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        {/* Add Match Button */}
        <button
          onClick={addRandomMatch}
          className="fixed bottom-6 right-6 bg-white text-black px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 hover:scale-105 transition-transform active:scale-95"
        >
          <span>Add Match</span>
        </button>
      </div>
    </div>
  );
};

export default FriendsLeaderboard;
