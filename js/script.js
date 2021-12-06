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
  if (fetchQuote.citation) {
    htmlCitation = `<span class="citation">${fetchQuote.citation}</span>`;
  }

  // 4. Use an if statement to check of the year property exists,
  // and if it does, concatenate a <span></span> element,
  // appropriate className, and year property to the HTML
  //string

  let htmlYear;
  if (fetchQuote.year) {
    htmlYear = `<span class="year">${fetchQuote.year}</span>`;
  }

  // 5. After the two if statements, concatenate the closing </p>
  // tag to the HTML string

  if (!htmlCitation && !htmlYear) {
    html = `${htmlQuote} </p>`;
  } else if (!htmlCitation) {
    html = `${htmlQuote} ${htmlYear} </p>`;
  } else if (!htmlYear) {
    html = `${htmlQuote} ${htmlCitation}</p>`;
  } else {
    html = `${htmlQuote} ${htmlCitation} ${htmlYear} </p>`;
  }

  document.getElementById("quote-box").innerHTML = `${html}`;
  console.log(html);

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
