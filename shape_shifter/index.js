/*
 * Shape shifting animations
 * Author: Juan Hurtado
 */

let shape = document.querySelector(".square");
const shapes = ['square', 'rectangle', 'circle'];

let nextIndex = 0;
shape.addEventListener('click', () => {
  // Remove styling for current shape
  shape.classList.remove(shapes[nextIndex]);

  // Pick next shape without going out of bounds in the arr
  nextIndex = nextIndex === shapes.length - 1 ? 0 : nextIndex + 1;

  // Create next shape
  shape.classList.add(shapes[nextIndex]);

});
