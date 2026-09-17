const container = document.querySelector('.container');

function createGrid(size) {
  const boxSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const box = document.createElement('div');
    box.style.width = boxSize + 'px';
    box.style.height = boxSize + 'px';
    box.addEventListener('mouseover', function() {
      box.style.backgroundColor = 'black';
    });
    container.appendChild(box);
  }
}
const resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', function() {
  const input = prompt('How many squares per side? (max 100)');
  const size = Number(input);

  if (!input || size <= 0 || size > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }

  container.innerHTML = '';
  createGrid(size);
});


createGrid(16);