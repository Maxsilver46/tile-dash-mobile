export interface LevelConfig {
  id: number;
  title: string;
  totalScore: number;
  blinkDuration: number;
  interval: number;
  penalty: "none" | "score" | "gameover";
  lowestScore: number;
}

export const LEVELS: LevelConfig[] = [
  {
    id: 1,
    title: "Quick Tap",
    totalScore: 10,
    blinkDuration: 800,
    interval: 1100,
    penalty: "none",
    lowestScore: 0,
  },
  {
    id: 2,
    title: "Faster Reflex",
    totalScore: 10,
    blinkDuration: 400,
    interval: 1000,
    penalty: "score",
    lowestScore: -10,
  },
  {
    id: 3,
    title: "Sudden Death",
    totalScore: 10,
    blinkDuration: 600,
    interval: 900,
    penalty: "gameover",
    lowestScore: -10,
  },
];
