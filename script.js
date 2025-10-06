//your JS code here. If required.
// Select all three squares
const squares = document.querySelectorAll('.square');

squares.forEach((square, index) => {
  // When mouse is over a square
  square.addEventListener('mouseover', () => {
    squares.forEach((other, i) => {
      if (i !== index) {
        other.style.backgroundColor = '#6F4E37'; // Coffee
      } else {
        other.style.backgroundColor = '#E6E6FA'; // Keep hovered one Lavender
      }
    });
  });

  // When mouse leaves a square
  square.addEventListener('mouseout', () => {
    squares.forEach((sq) => {
      sq.style.backgroundColor = '#E6E6FA'; // Reset all to Lavender
    });
  });
});
