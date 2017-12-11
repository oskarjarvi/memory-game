
const color = ['#ffce00','#ffce00', '#0099ff','#0099ff','#191995','#191995','#ff0000', '#ff0000','#40a521','#40a521', '#001a9c','#001a9c', '#8b009c', '#8b009c','#9c3700','#9c3700', '#746bdf','#746bdf', '#dfc86b','#dfc86b'];
let memoryValues = [];
let memoryId = [];
let flippedTile= 0;

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
}
