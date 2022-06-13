// INTERVAL TEXT

var text = ["trustless", "community-led", "protocol-secured", "decentralized"];
var counter = 0;
var elem = document.getElementById("qlty-random-text");
var inst = setInterval(change, 1000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}