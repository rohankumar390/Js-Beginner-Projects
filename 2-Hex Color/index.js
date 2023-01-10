var index = 0;

const changeColor = () => {
  // const generateNum=Math.random()
  var hex_num = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  var hex_code="";
  for(var i=0;i<6;i++){
    var random_number=Math.floor(Math.random()*hex_num.length)
    hex_code+=hex_num[random_number]
  }
  document.getElementById('hex').innerHTML=hex_code;
  document.getElementsByTagName('body')[0].style.background="#"+hex_code
};
