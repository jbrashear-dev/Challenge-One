// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var quoteFromDataFile;

function getRandomQuote(){

  //generate random number to get quote object.
  var randomNum = Math.floor(Math.random() * quotes.length );
  console.log(randomNum);
  //get quote from data file

  quoteFromDataFile = quotes[randomNum];
  console.log(quoteFromDataFile);
  return(quoteFromDataFile);

}

function printQuote(){
  var quoteHTML = '';
  getRandomQuote();
  quoteHTML += '<p class="quote">' + quoteFromDataFile.quote + ' ' + '</p>';
  quoteHTML += '<p class="source">'+ quoteFromDataFile.source;
  if(quoteFromDataFile.citation != ''){
    quoteHTML += '<span class="citation">' + quoteFromDataFile.citation + ' '+'</span>'
  }
  if(quoteFromDataFile.year != '') {
    quoteHTML += '<span class="year">' + quoteFromDataFile.year + '</span';
  }
  quoteHTML += '</p>';
  document.getElementById('quote-box').innerHTML = quoteHTML;
  console.log(quoteHTML);
}
