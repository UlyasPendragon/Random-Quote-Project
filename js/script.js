/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * Array of motivation quotes
 ***/

const quotes = [
  {
    quote:
      "Money and success don’t change people; they merely amplify what is already there.",
    source: "Will Smith",
    citation: "parade.com",
    year: "1995",
  },
  {
    quote: `What you get by achieving your goals is not as important as what you become by achieving your goals.`,
    source: "Henry David Thoreau",
    citation: "",
    year: "1966",
  },
  {
    quote: `Never let the fear of striking out keep you from playing the game.`,
    source: "Babe Ruth",
    citation: "MLB",
    year: "",
  },
  {
    quote: `If the plan doesn’t work, change the plan, but never the goal.`,
    source: "Author Unknown",
    citation: "",
    year: "",
  },
  {
    quote: `Life is full of beauty. Notice it. Notice the bumble bee, the small child, and the smiling faces. Smell the rain, and feel the wind. Live your life to the fullest potential, and fight for your dreams.`,
    source: "Ashley Smith",
    citation: "www.positivityblog.com",
    year: "2011",
  },
  {
    quote: `Like success, failure is many things to many people. With positive mental attitude, failure is a learning experience, a rung on the ladder, and a plateau at which to get your thoughts in order to prepare to try again.`,
    source: "W. Clement Stone",
    citation: "www.positivityblog.com",
    year: "2000",
  },
  {
    quote: `Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.`,
    source: "Mae Jemison",
    citation: "www.positivityblog.com",
    year: "1998",
  },
  {
    quote: `Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.`,
    source: "Samuel Beckett",
    citation: "",
    year: "",
  },
];

/***
 *  Generation of a random number that is then used to select a object from the quotes array
 ***/

function getRandomQuote() {
  const randomNum = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNum];
  return randomQuote;
}

/***
 * function button to generate new random quote andd call the get getRandomQuote funtion when show anther quote button is pushed
 ***/
function printQuote() {
  let fetchQuote = getRandomQuote();

  // if statments to control what html is displayed based on data availble in the objects

  let htmlQuote = `<p class="quote">${fetchQuote.quote}</p> <p class="source">${fetchQuote.source}`;

  let htmlCitation;
  if (fetchQuote.citation) {
    htmlCitation = `<span class="citation">${fetchQuote.citation}</span>`;
  }

  let htmlYear;
  if (fetchQuote.year) {
    htmlYear = `<span class="year">${fetchQuote.year}</span>`;
  }

  if (!htmlCitation && !htmlYear) {
    html = `${htmlQuote} </p>`;
  } else if (!htmlCitation) {
    html = `${htmlQuote} ${htmlYear} </p>`;
  } else if (!htmlYear) {
    html = `${htmlQuote} ${htmlCitation}</p>`;
  } else {
    html = `${htmlQuote} ${htmlCitation} ${htmlYear} </p>`;
  }

  // final diplay transposed to the "quote-box" id element on the HTML

  document.getElementById("quote-box").innerHTML = `${html}`;
  return fetchQuote;
}

/***
 * event listener for the print quote button
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
