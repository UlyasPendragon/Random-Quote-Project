/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
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
    quote: `Your time is limited, so don\’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.`,
    source: "Steve Jobs",
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
    quote: "4",
    source: "4",
    citation: "4",
    year: "4",
  },
  {
    quote: "5",
    source: "5",
    citation: "5",
    year: "5",
  },
];

/***
 * `getRandomQuote` function
 ***/

function getRandomQuote() {
  const randomNum = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNum];
  return randomQuote;
}

/***
 * `printQuote` function button to generate new random quote
 ***/
function printQuote() {
  // 1. Create a variable that calls the getRandomQuote()
  // function

  let fetchQuote = getRandomQuote();

  // 2. Create a variable that initiates your HTML string with
  // the first two <p></p> elements, their classNames,
  // and the quote and source properties, but leave off
  // the second closing `</p>` tag for now

  let htmlQuote = `<p class="quote">${fetchQuote.quote}</p> <p class="source">${fetchQuote.source}`;

  // 3. Use an if statement to check if the citation property
  // exists, and if it does, concatenate a <span></span>
  // element, appropriate className, and citation property
  // to the HTML string
  let htmlCitation;
  if (fetchQuote.citation !== undefined) {
    htmlCitation = `<span class="citation">${fetchQuote.citation}</span>`;
  } else {
    htmlCitation = ``;
  }

  // 4. Use an if statement to check of the year property exists,
  // and if it does, concatenate a <span></span> element,
  // appropriate className, and year property to the HTML
  //string

  let htmlYear;
  if (fetchQuote.year !== undefined) {
    htmlYear = `<span class="year">${fetchQuote.year}</span>`;
  }

  // 5. After the two if statements, concatenate the closing </p>
  // tag to the HTML string

  document.getElementById(
    "quote-box"
  ).innerHTML = `${htmlQuote} ${htmlCitation} ${htmlYear} </p>`;

  // 6. set the innerHTML of the quote-box div to equal the
  // complete HTML string
  return fetchQuote;
}

/***
 * click event listener for the print quote button
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
