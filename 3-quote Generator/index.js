var index = 0;

const QuoteGenerate = () => {
  // const generateNum=Math.random()
  var quotes = {
    "VP Venkaiah Naidu": " Dreams Meeting Delivery",
    "Ex-IPS Prakash Singh": "The Struggle for Police Reforms in India",
    "Usha Uthup": "The Queen of Indian Pop",
    "Sahitya Akademi": "Monsoon",
    "Atal Bihari Vajpayee": "Sagarika Ghose",
  };
  var authors=Object.keys(quotes);
  var author=authors[Math.floor(Math.random()*authors.length)]

  var quote=quotes[author]

  document.getElementById('quote').innerHTML=quote

  document.getElementById('author').innerHTML=author
};
