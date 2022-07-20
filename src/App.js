import React, {useEffect, useState} from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

let quoteDBUrl ="https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

function App() {

  const [quote, setQuote] = useState("Life is a bla-bla");
  const [author, setAuthor] = useState("Socratus");
  const [randomNubmer, setRandomNumber] = useState(0);
  const [quotesArray, setQuotesArray] = useState(null);

  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJson = await response.json()
    setQuotesArray(parsedJson.quotes)
      }
  useEffect (() => {
    fetchQuotes(quoteDBUrl)
  }, [quoteDBUrl])

  const generateRandomQuote = () => {
    let randInteger = Math.floor(quotesArray.length * Math.random()) 
    setRandomNumber(randInteger)
    setQuote(quotesArray[randInteger].quote)
    setAuthor(quotesArray[randInteger].author)
    };
  

  
  return (
      <div className="App">
      <header className="App-header">
        <div id="quote-box">
        <p className="Quote-mark-top"><FontAwesomeIcon icon={faQuoteLeft}/></p>
        <p id="text">{quote}</p>
        <p className="Quote-mark-bottom"><FontAwesomeIcon icon={faQuoteRight}/></p>
        <p id="author">— {author}</p>
        <div className="button">
        <a id="tweet-quote" href={encodeURI(`http://www.twitter.com/intent/tweet?text=„${quote}“ — ${author}`)} target={"_top"}><FontAwesomeIcon icon={faTwitter}/></a>
                <button onClick={() => generateRandomQuote() } id="new-quote">New quote</button>
                </div>
                
        </div>
      </header>
    </div>
  );
}

export default App;
