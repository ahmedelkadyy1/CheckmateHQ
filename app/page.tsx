import React from 'react';
import { Trophy, Medal, Crown, ChevronUp, ChevronDown } from 'lucide-react';

const Leaderboard = () => {
  const players = [
    { rank: 1, name: "Magnus Carlsen", rating: 2853, change: 12, title: "GM" },
    { rank: 2, name: "Hikaru Nakamura", rating: 2802, change: -5, title: "GM" },
    { rank: 3, name: "Fabiano Caruana", rating: 2795, change: 8, title: "GM" },
    { rank: 4, name: "Alireza Firouzja", rating: 2770, change: 2, title: "GM" },
    { rank: 5, name: "Ian Nepomniachtchi", rating: 2758, change: -3, title: "GM" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-100 p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">
              Global Rankings
            </h1>
            <p className="text-slate-400 mt-2">The world's elite chess masters</p>
          </div>
          <div className="text-right text-xs text-slate-500 uppercase tracking-widest">
            Updated: Jan 2026
          </div>
        </div>

        {/* Podium / Top 3 (Visual Highlight) */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {players.slice(0, 3).map((player, idx) => (
            <div key={player.rank} className={`relative p-6 rounded-2xl border flex flex-col items-center ${
              idx === 0 ? 'bg-amber-500/10 border-amber-500/50 scale-105 z-10' : 'bg-slate-900/50 border-slate-800'
            }`}>
              {idx === 0 && <Crown className="text-amber-500 mb-2" size={32} />}
              <span className="text-xs font-bold text-amber-500 mb-1">{player.title}</span>
              <h3 className="font-semibold text-lg">{player.name.split(' ')[1]}</h3>
              <p className="text-2xl font-mono font-bold mt-2">{player.rating}</p>
            </div>
          ))}
        </div>

        {/* The List */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden backdrop-blur-md">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-800 text-slate-500 text-sm uppercase">
                <th className="px-6 py-4 font-medium">Rank</th>
                <th className="px-6 py-4 font-medium">Player</th>
                <th className="px-6 py-4 font-medium text-right">Rating</th>
                <th className="px-6 py-4 font-medium text-right">Change</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {players.map((player) => (
                <tr key={player.rank} className="group hover:bg-white/5 transition-colors cursor-pointer">
                  <td className="px-6 py-4">
                    <span className={`w-8 h-8 flex items-center justify-center rounded-full font-mono ${
                      player.rank <= 3 ? 'text-amber-400' : 'text-slate-500'
                    }`}>
                      #{player.rank}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg" />
                      <div>
                        <div className="font-semibold flex items-center gap-2">
                          {player.name}
                          <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400">{player.title}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right font-mono font-bold text-lg">
                    {player.rating}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className={`flex items-center justify-end gap-1 ${player.change >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {player.change >= 0 ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      <span className="font-mono">{Math.abs(player.change)}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;