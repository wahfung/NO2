
const BASE_URL = "https://raw.githubusercontent.com/metabismuth/tarot-json/master/cards/";

export const tarotDeck = [
  // Major Arcana
  { name: "The Fool", img: "m00.jpg", type: "major", val: 0 },
  { name: "The Magician", img: "m01.jpg", type: "major", val: 1 },
  { name: "The High Priestess", img: "m02.jpg", type: "major", val: 2 },
  { name: "The Empress", img: "m03.jpg", type: "major", val: 3 },
  { name: "The Emperor", img: "m04.jpg", type: "major", val: 4 },
  { name: "The Hierophant", img: "m05.jpg", type: "major", val: 5 },
  { name: "The Lovers", img: "m06.jpg", type: "major", val: 6 },
  { name: "The Chariot", img: "m07.jpg", type: "major", val: 7 },
  { name: "Strength", img: "m08.jpg", type: "major", val: 8 },
  { name: "The Hermit", img: "m09.jpg", type: "major", val: 9 },
  { name: "Wheel of Fortune", img: "m10.jpg", type: "major", val: 10 },
  { name: "Justice", img: "m11.jpg", type: "major", val: 11 },
  { name: "The Hanged Man", img: "m12.jpg", type: "major", val: 12 },
  { name: "Death", img: "m13.jpg", type: "major", val: 13 },
  { name: "Temperance", img: "m14.jpg", type: "major", val: 14 },
  { name: "The Devil", img: "m15.jpg", type: "major", val: 15 },
  { name: "The Tower", img: "m16.jpg", type: "major", val: 16 },
  { name: "The Star", img: "m17.jpg", type: "major", val: 17 },
  { name: "The Moon", img: "m18.jpg", type: "major", val: 18 },
  { name: "The Sun", img: "m19.jpg", type: "major", val: 19 },
  { name: "Judgement", img: "m20.jpg", type: "major", val: 20 },
  { name: "The World", img: "m21.jpg", type: "major", val: 21 },
  // Cups
  ...generateSuit("Cups", "c"),
  // Swords
  ...generateSuit("Swords", "s"),
  // Wands
  ...generateSuit("Wands", "w"),
  // Pentacles
  ...generateSuit("Pentacles", "p")
];

function generateSuit(suitName, prefix) {
  const cards = [];
  const names = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Page", "Knight", "Queen", "King"];
  for (let i = 0; i < 14; i++) {
    const num = i + 1;
    const numStr = num < 10 ? `0${num}` : `${num}`;
    cards.push({
      name: `${names[i]} of ${suitName}`,
      img: `${prefix}${numStr}.jpg`,
      type: "minor",
      suit: suitName,
      val: num
    });
  }
  return cards;
}

export function getCardTextureUrl(filename) {
  return `${BASE_URL}${filename}`;
}
