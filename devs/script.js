const cont = document.querySelector('.cont');
const seats = document.querySelectorAll('.seat:not(.occupied)');
const select = document.getElementsbyName('selected');

cont.addEventListener('click', (e) => {
  if(e.target.classList.contains('seat') &&  !e.target.classList.contains('occupied')){
    e.target.classList.toggle('selected');
  }
})
