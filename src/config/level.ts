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
    // Level 1: Basic Reflex Test
    id: 1,
    title: "Quick Tap",
    totalScore: 10,
    blinkDuration: 800,
    interval: 1100,
    penalty: "none",
    lowestScore: 0,
  },
  {
    // Level 2: Speed Increase
    id: 2,
    title: "Faster Reflex",
    totalScore: 10, // Higher target
    blinkDuration: 400, // Shorter blink time
    interval: 1000, // Faster interval
    penalty: "score",
    lowestScore: -10,
  },
  {
    // Level 3: Higher Stakes
    id: 3,
    title: "Sudden Death",
    totalScore: 10,
    blinkDuration: 600,
    interval: 900,
    penalty: "gameover", // Game Over on any miss
    lowestScore: -10,
  },
  // ... and so on for Level 4 (Memory), Level 5 (Time Limit), etc.
];
