var quote = document.getElementById('quote');
var author = document.getElementById('author');

var quotesCollection = [
  {quote: '“Since Christ Himself has said, “This is My Body” who shall dare to doubt that It is His Body?”', author:'St. Cyril of Jerusalem'},
  {quote: '“Teach us to give and not count the cost.”', author:'St. Ignatius de Loyola'},
  {quote: '“Pray as though everything depended on God. Work as though everything depended on you.”', author:'St. Augustine'},
  {quote: '“We will either accuse ourselves or excuse ourselves.”', author:'St. John Vianney'},
  {quote: '“For me prayer is a surge of the heart, it is a simple look towards Heaven, it is a cry of recognition and of love, embracing both trial and joy.”', author:'St. Therese of Lisieux'},
  {quote: '“To convert somebody go and take them by the hand and guide them.”', author:'St. Thomas Aquinas'},
  {quote: '“Pray, Hope, and Don’t Worry”', author:'St. Pio of Pietrelcino)'},
  {quote: 'If you are what you should be, you will set the whole world ablaze!”', author:'St. Catherine of Sienna'},
  {quote: '“Our hearts were made for You, O Lord, and they are restless until they rest in you.”', author:'St. Augustine of Hippo'},
  {quote: '“Charity is certainly greater than any rule. Moreover, all rules must lead to charity.”', author:'St. Vincent de Paul'},
  {quote: '“Late have I loved you, O Beauty ever ancient, ever new, late have I loved you!”', author:'St. Augustine'},
  {quote: '“Holy Communion is the shortest and safest way to heaven.”', author:'Pope St. Pius X'},
  {quote: '“The nation doesn’t simply need what we have. It needs what we are.”', author:'St. Teresia Benedicta (Edith Stein)'},
  {quote: '“We are to love God for Himself, because of a twofold reason; nothing is more reasonable, nothing more profitable.”', author:'St. Bernard of Clairvaux'},
  {quote: '“We always find that those who walked closest to Christ were those who had to bear the greatest trials.”', author:'St. Teresa of Avila'},
  {quote: '“If this is the way You treat Your friends, no wonder You have so few!”', author:'St. Theresa of Avila'},
  {quote: '“Christ said, “I am the Truth”; he did not say “I am the custom.”', author:'St. Toribio'},
  {quote: '“All the efforts of the human mind cannot exhaust the essence of a single fly.”', author:'St. Thomas Aquinas'},
  {quote: '“Love God, serve God; everything is in that.”', author:'St. Claire of Assisi'},
  {quote: '“When you approach the tabernacle remember that he has been waiting for you for twenty centuries.”', author:'St. Josemaria Escriva'},
];

var selectQuote = function(){
  return quotesCollection[Math.floor(Math.random() * quotesCollection.length)].quote;
}

var selectAuthor = function(){
  return quotesCollection[Math.floor(Math.random() * quotesCollection.length)].author;
}
  setInterval(function(){
    quote.innerText = selectQuote();
    author.innerText = selectAuthor();
  },5000);
