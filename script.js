const container = document.querySelector('.container');

function createGrid(size) {
  const boxSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const box = document.createElement('div');
    box.style.width = boxSize + 'px';
    box.style.height = boxSize + 'px';
    box.addEventListener('mouseover', function() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
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

document.addEventListener('keydown', function(event) {
  if (event.key === 'Backspace') {
    const boxes = container.querySelectorAll('div');
    boxes.forEach(function(box) {
      box.style.backgroundColor = '';
    });
  }
});
createGrid(16);