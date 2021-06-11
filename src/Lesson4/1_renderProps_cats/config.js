import { randomInt } from "./randomInt";

export const icons = [
  "🐱",
  "😺",
  "😸",
  "😹",
  "😼",
  "🙀",
  "😾",
];

const defaultPosPadding = 50;

export const cats = Array(30).fill("").map((_, i) => ({
  id: i,
  icon: icons[randomInt(0, icons.length - 1)],
  speed: randomInt(1000, 2000),
  delay: randomInt(0, 1200),
  startX: randomInt(defaultPosPadding, window.innerWidth - defaultPosPadding),
  startY: randomInt(defaultPosPadding, window.innerHeight - defaultPosPadding),
}));
