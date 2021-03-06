let colors = ['#ffce00','#ffce00', '#0099ff','#0099ff','#191995','#191995','#ff0000','#ff0000', '#40a521', '#40a521','#000000','#000000', '#8b009c','#8b009c', '#9c3700','#9c3700', '#746bdf','#746bdf', '#dfc86b', '#dfc86b'];
let matchedCards = [];
let firstCard = null;
let flippedCards = [];

let gameboard = document.createElement('div');
gameboard.classList.add('Board');
let output = document.createElement('ol');
const reset = document.querySelector('.reset');

function shuffle(a)
{
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
}

color = shuffle(colors);

function findAncestor (el, cls) {
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
}

function createAllCards(){
  colors.forEach(function (color, index)
  {
    createCard(color, index);
  });
}
function createCard(color,index){

  let li = document.createElement('li');
  li.classList.add('flip-container');


  let flipper = document.createElement('div');
  flipper.classList.add('flipper');

  li.appendChild(flipper);

  let front = document.createElement('div');
  front.classList.add('front');

  flipper.appendChild(front);

  let back = document.createElement('div');
  back.classList.add('back');

  back.style.backgroundColor = colors[index];

  flipper.appendChild(back);

  li.addEventListener('click', onClick);

  output.appendChild(li);
  let cards = document.querySelectorAll('.flip-container');
}
gameboard.appendChild(output);
document.body.appendChild(gameboard);

function onClick(event)
{
  let target = event.target;
  if(!target.classList.contains('flip'))
  {
    if (flippedCards.length < 2)
    {
      let target =   findAncestor(event.target, 'flip-container');
      target.classList.add('flip');
      flippedCards.push(target);
      checkCard(target);
    }
  }
}
function checkCard(card)
{

  if(firstCard == null)
  {
    firstCard = card;
  }
  else
  {
    if(card.querySelector('.back').style.backgroundColor == firstCard.querySelector('.back').style.backgroundColor)
    {
      matchedCards.push(card);
      matchedCards.push(firstCard);
      card.removeEventListener('click', onClick);
      firstCard.removeEventListener('click', onClick);
      firstCard = null;
      flippedCards = [];
    }
    else
    {
      setTimeout(() => {
        card.classList.remove('flip');
        firstCard.classList.remove('flip');
        firstCard = null;
        flippedCards = [];
      },500 );
    }
  }
}
reset.addEventListener('click', e =>
{
  restart();
});

function restart()
{
  document.querySelectorAll('.flip-container').forEach(elmnt => { elmnt.remove() });
  matchedCards = [];
  flippedCards = [];
  color = shuffle(colors);
  createAllCards();
}
createAllCards();
