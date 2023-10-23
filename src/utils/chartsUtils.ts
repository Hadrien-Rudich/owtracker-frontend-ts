import { Chart as ChartJS } from 'chart.js';
import type { GameData } from '../types/store/gameTypes';

const filterGamesByMonth = (
  month: number,
  gameData: GameData[]
): GameData[] => {
  if (Number(month) === 0) {
    return gameData;
  }
  return gameData.filter(
    (game) => Number(game.date.slice(3, 5)) === Number(month)
  );
};

const backgroundColors: (string | CanvasGradient)[] = [
  'rgba(75, 192, 128, 0.8)',
  'rgba(255, 99, 132,0.8)',
  'rgba(255, 206, 86,0.8)',
];

function getBackgroundColor(index: number): string | CanvasGradient {
  const backgroundColor = backgroundColors[index];
  if (backgroundColor !== undefined) {
    return backgroundColor;
  }
  return 'gray'; // Return a default value if the index is out of bounds
}

const filterGamesByResult = (gameData: GameData[]): number[] => {
  const wins = gameData.filter((game) => game.result === 'win');
  const losses = gameData.filter((game) => game.result === 'loss');
  const draws = gameData.filter((game) => game.result === 'draw');

  const results = [wins.length, losses.length, draws.length];

  return results;
};

// Define a custom color scale function based on win percentage
function getColorForWinPercentage(winPercentage: number) {
  let color;
  if (winPercentage >= 0 && winPercentage <= 39) {
    // Red for values from 0% to 39%
    color = 'rgba(255, 99, 132,0.8)';
  } else if (winPercentage >= 40 && winPercentage <= 50) {
    // Yellow for values from 40% to 50%
    color = 'rgba(255, 206, 86,0.8)';
  } else {
    // Green for values from 50% to 100%
    color = 'rgba(75, 192, 128, 0.8)';
  }

  return color;
}

function getHeroesByWinRatio(gamesData: GameData[], topCount: number) {
  const heroStatsMap = new Map();

  // Calculate hero stats
  gamesData.forEach((game) => {
    const { result, heroes } = game;
    heroes.forEach((hero) => {
      const heroStats = heroStatsMap.get(hero) || { wins: 0, games: 0 };
      heroStats.games += 1;
      if (result === 'win') {
        heroStats.wins += 1;
      }
      heroStatsMap.set(hero, heroStats);
    });
  });

  // Calculate win ratios and store them in an array of objects
  const heroStatsArray = Array.from(
    heroStatsMap,
    ([hero, { wins, games }]) => ({
      hero,
      gamesPlayed: games, // Add games played
      wins, // Add number of wins
      winRatio: games > 0 ? Math.round((wins / games) * 100) : 0, // Convert to percentage
    })
  );

  // Sort heroes by win ratio in descending order
  heroStatsArray.sort((a, b) => b.winRatio - a.winRatio);

  // Take the top N heroes
  const topHeroes = heroStatsArray.slice(0, topCount);

  return topHeroes;
}

function generateTextCenterCallback(chart: ChartJS<'doughnut'>) {
  const { ctx, data } = chart;
  ctx.save();
  ctx.font = '20px Big Noodle Titling';
  ctx.fillStyle = '#000080'; // Navy Blue
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(
    `${
      data.datasets[0].data[0] +
      data.datasets[0].data[1] +
      data.datasets[0].data[2]
    } Games`,
    chart.getDatasetMeta(0).data[0].x,
    chart.getDatasetMeta(0).data[0].y
  );
}

export {
  filterGamesByMonth,
  filterGamesByResult,
  getHeroesByWinRatio,
  getColorForWinPercentage,
  generateTextCenterCallback,
  getBackgroundColor,
};
