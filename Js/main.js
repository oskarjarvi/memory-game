let colors = ['#ffce00','#ffce00', '#0099ff','#0099ff','#191995','#191995','#ff0000','#ff0000', '#40a521', '#40a521','#000000','#000000', '#8b009c','#8b009c', '#9c3700','#9c3700', '#746bdf','#746bdf', '#dfc86b', '#dfc86b'];
let matchedCards = [];
let firstCard = null;
let flippedCards = [];


function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
}
function setGame()
{
  flippedTile= 0;
  let output= '';
  shuffle(color);
  color.forEach(function(memory_array_value, index)
  {
 output += '<div id="tile_'+ index +'" onclick="memoryFlipTile(this,\''+ memory_array_value +'\')"></div>';
 });
  document.getElementById('gameBoard').innerHTML = output;
}
function canFlipCard(tile)
 {
 return tile.innerHTML == "" && memory_values.length < 2;
}
function flipCard(tile, value)
{
 tile.style.background = color[i];
 tile.innerHTML = value;
}
function areNoCardsFlipped()
{
 return memoryValues.length == 0;
}
function isOneCardFlipped()
{
 return memoryValues.length == 1
}
function setCardAsFlipped(tile, value){

if(memory_values.length == 0)
{
 memory_values.push(val);
 memory_tile_ids.push(tile.id);
}
function isThereIsAMatch()
{
 return memory_values[0] == memory_values[1];
}

function matchCards()
{
 tiles_flipped += 2;
 memory_values = [];
 memory_tile_ids = [];
}
function memoryFlipTile(tile, value)
{
 if (canFlipCard(tile))
 {
   flipCard(tile, value);
   if (areNoCardsFlipped())
   {
     setCardAsFlipped(tile, value);
   }
   else if(isOneCardFlipped())
   {
     setCardAsFlipped(tile, value);
       if(isThereIsAMatch())
       {
         matchCards();
         if (isGameOver())
         {
           gameIsOver();
         }
       }
       else
       {
         cardsDoNotMatch();
       }
     }
   }
 }

setGame();
