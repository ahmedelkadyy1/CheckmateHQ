"use client";
import React, { useState } from 'react';
import { Trophy, Crown, Flame, TrendingUp, TrendingDown, Minus } from 'lucide-react';

const ChessLeaderboard = () => {
  const [players] = useState([
    { id: 1, name: 'Alexandra Chen', rating: 2156, wins: 48, losses: 12, draws: 5, streak: 7, trend: 'up', avatar: '♛' },
    { id: 2, name: 'Marcus Rodriguez', rating: 2089, wins: 42, losses: 15, draws: 8, streak: 4, trend: 'up', avatar: '♚' },
    { id: 3, name: 'Sofia Petrov', rating: 2034, wins: 39, losses: 18, draws: 6, streak: -2, trend: 'down', avatar: '♜' },
    { id: 4, name: 'James Kumar', rating: 1987, wins: 36, losses: 20, draws: 9, streak: 1, trend: 'up', avatar: '♞' },
    { id: 5, name: 'Emma Thompson', rating: 1945, wins: 33, losses: 22, draws: 7, streak: 0, trend: 'stable', avatar: '♝' },
    { id: 6, name: 'Diego Santos', rating: 1912, wins: 31, losses: 24, draws: 8, streak: -3, trend: 'down', avatar: '♟' },
    { id: 7, name: 'Yuki Tanaka', rating: 1876, wins: 28, losses: 26, draws: 10, streak: 2, trend: 'up', avatar: '♛' },
    { id: 8, name: 'Oliver Schmidt', rating: 1834, wins: 25, losses: 28, draws: 11, streak: -1, trend: 'down', avatar: '♚' },
  ]);

  const getTrendIcon = (trend: string) => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-emerald-400" />;
    if (trend === 'down') return <TrendingDown className="w-4 h-4 text-rose-400" />;
    return <Minus className="w-4 h-4 text-slate-400" />;
  };

  const getRankStyle = (rank: number) => {
    if (rank === 1) return 'from-yellow-500/20 to-amber-600/20 border-yellow-500/30';
    if (rank === 2) return 'from-slate-400/20 to-slate-500/20 border-slate-400/30';
    if (rank === 3) return 'from-orange-600/20 to-orange-700/20 border-orange-600/30';
    return 'from-slate-800/40 to-slate-900/40 border-slate-700/30';
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-6 h-6 text-yellow-400 animate-pulse" />;
    if (rank === 2) return <Trophy className="w-5 h-5 text-slate-300" />;
    if (rank === 3) return <Trophy className="w-5 h-5 text-orange-500" />;
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4 md:p-8">
      {/* Animated background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="text-6xl animate-bounce" style={{animationDuration: '3s'}}>♔</div>
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-300 to-slate-100 mb-4 tracking-tight">
            Chess Arena
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light">Elite Player Rankings</p>
          <div className="flex justify-center gap-6 mt-6 text-sm">
            <div className="text-slate-400">
              <span className="text-2xl font-bold text-white">{players.length}</span> Players
            </div>
            <div className="text-slate-400">
              <span className="text-2xl font-bold text-emerald-400">{players.reduce((a, p) => a + p.wins, 0)}</span> Total Wins
            </div>
            <div className="text-slate-400">
              <span className="text-2xl font-bold text-purple-400">{players.reduce((a, p) => a + p.draws, 0)}</span> Draws
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="space-y-3">
          {players.map((player, index) => {
            const rank = index + 1;
            const winRate = ((player.wins / (player.wins + player.losses + player.draws)) * 100).toFixed(1);
            
            return (
              <div
                key={player.id}
                className={`relative group transition-all duration-500 hover:scale-[1.02] hover:z-20`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                
                <div className={`relative bg-gradient-to-br ${getRankStyle(rank)} backdrop-blur-xl border rounded-2xl p-5 md:p-6 shadow-2xl`}>
                  <div className="flex items-center gap-4 md:gap-6">
                    {/* Rank */}
                    <div className="flex flex-col items-center gap-1 min-w-[60px]">
                      {getRankIcon(rank)}
                      <div className={`text-2xl md:text-3xl font-black ${rank <= 3 ? 'text-white' : 'text-slate-400'}`}>
                        #{rank}
                      </div>
                    </div>

                    {/* Avatar */}
                    <div className="relative">
                      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${rank === 1 ? 'from-yellow-400 to-amber-600' : rank === 2 ? 'from-slate-300 to-slate-500' : rank === 3 ? 'from-orange-500 to-orange-700' : 'from-slate-700 to-slate-800'} flex items-center justify-center text-3xl md:text-4xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                        {player.avatar}
                      </div>
                      {player.streak > 2 && (
                        <div className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-1 shadow-lg animate-pulse">
                          <Flame className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Player Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg md:text-xl font-bold text-white truncate">{player.name}</h3>
                        {getTrendIcon(player.trend)}
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-slate-400">
                        <span className="flex items-center gap-1">
                          <span className="text-emerald-400 font-semibold">{player.wins}W</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="text-rose-400 font-semibold">{player.losses}L</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="text-purple-400 font-semibold">{player.draws}D</span>
                        </span>
                        <span className="hidden md:inline text-slate-500">•</span>
                        <span className="hidden md:inline">{winRate}% Win Rate</span>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        {player.rating}
                      </div>
                      <div className="text-xs text-slate-500 font-medium">ELO RATING</div>
                      {player.streak !== 0 && (
                        <div className={`mt-1 text-xs font-bold ${player.streak > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                          {player.streak > 0 ? '+' : ''}{player.streak} streak
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Progress bar for win rate */}
                  <div className="mt-4 h-1.5 bg-slate-800/50 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${winRate}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-slate-500 text-sm">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ChessLeaderboard;