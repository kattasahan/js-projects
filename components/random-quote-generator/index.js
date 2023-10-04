const quote = document.querySelector(".quote");
const nameA = document.querySelector(".name");
const btn = document.querySelector(".btn");

const quotes = [
  { quote: "The purpose of our lives is to be happy.", name: " — Dalai Lama" },
  {
    quote: "Life is what happens when you're busy making other plans.",
    name: " — John Lennon",
  },
  { quote: "Get busy living or get busy dying.", name: " — Stephen King" },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    name: " — Mae West",
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    name: " — Thomas A. Edison",
  },
  {
    quote:
      "If you want to live a happy life, tie it to a goal, not to people or things.",
    name: " — Albert Einstein",
  },
  {
    quote: "Never const the fear of striking out keep you from playing the game.",
    name: " — Babe Ruth",
  },
  {
    quote:
      "Money and success don't change people; they merely amplify what is already there.",
    name: " — Will Smith",
  },
];

btn.addEventListener("click", function () {
  const random = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[random].quote;
  nameA.innerHTML = quotes[random].name;
});
