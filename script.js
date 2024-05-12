const cards = Array.from(document.querySelectorAll('.card'));
let currentCardIndex = 0;

function showCard(index) {
  
  cards.forEach(card => card.classList.remove('active'));

  cards[index].classList.add('active');
}

function nextCard() {
  currentCardIndex = (currentCardIndex + 1) % cards.length;
  showCard(currentCardIndex);
}

function prevCard() {
  currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
  showCard(currentCardIndex);
}


showCard(currentCardIndex);

document.querySelector('#nextBtn').addEventListener('click', nextCard);
document.querySelector('#prevBtn').addEventListener('click', prevCard);