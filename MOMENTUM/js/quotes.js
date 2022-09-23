const quotes = [
  {
    quote:
      "The way I see it, if you want the rainow, you gotta put up with the rain.",
    author: "DOLLY PARTON",
  },
  {
    quote: "The purpose of our lives is to be happy.",
    author: "DALAI LAMA",
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  {
    quote: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth",
  },
  {
    quote:
      "Money and success don't change peole; they merely amplfy what is already there.",
    author: "Will Smith",
  },
  {
    quote:
      "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
    author: "Steve Jobs",
  },
  {
    quote:
      "The big lesson in life, baby, is never be scared of anyone or anything.",
    author: "Frank Sinatra",
  },
  {
    quote: "The unexamined life is not worth living.",
    author: "Socrates",
  },
  {
    quote:
      "Life is a succession of lessons which must be lived to be understood.",
    author: "Helen Keller",
  },
  {
    quote:
      "Life is ten percent what happens to you and ninety percent how you respond to it.",
    author: "Charles Swindoll",
  },
];

const quote = document.querySelector("#qoute span:first-child");
const author = document.querySelector("#qoute span:last-child");

console.log(quotes[0 - 9]); //Math.round(number) : half drop float & upper.
//Math.ceil(number) : upper float..
//Math.floor(number) : drop float..
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = '"' + todaysQuote.quote + '"\n';
author.innerText = "-" + todaysQuote.author + "-";
