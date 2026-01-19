export default function Home() {
  const dummyPlayers = [
    { name: 'Ahmed', points: 3, wins: 3, losses: 0, draws: 0 },
    { name: 'Liam', points: 2, wins: 2, losses: 1, draws: 0 },
    { name: 'Sophia', points: 1.5, wins: 1, losses: 1, draws: 1 },
    { name: 'Noah', points: 0, wins: 0, losses: 3, draws: 0 },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-10 bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-10">Chess League</h1>
      <table className="table-auto border-collapse border border-white text-center">
        <thead>
          <tr>
            <th className="border border-white px-4 py-2">Rank</th>
            <th className="border border-white px-4 py-2">Name</th>
            <th className="border border-white px-4 py-2">Points</th>
            <th className="border border-white px-4 py-2">W-L-D</th>
          </tr>
        </thead>
        <tbody>
          {dummyPlayers.map((player, i) => (
            <tr key={i}>
              <td className="border border-white px-4 py-2">{i + 1}</td>
              <td className="border border-white px-4 py-2">{player.name}</td>
              <td className="border border-white px-4 py-2">{player.points}</td>
              <td className="border border-white px-4 py-2">
                {player.wins}-{player.losses}-{player.draws}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
