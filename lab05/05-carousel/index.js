
let currentPosition = 0;
const gap = 10;
// when I change to 1, it cuts off some of the photo when clicked 
// rather than having a constent flow form one photo to another
const slideWidth = 400;
// the amount each click moves. 1 photo a click.

const items = document.querySelectorAll('.carousel-item');
// this is selecting the carousel item elements, whihc are all of the src photos
const totalSlides = items.length;
// this is saying that total slides means how many items will be shown at a time


function moveForward() {
  // this is a function for what to do when the move forward button is clicked
  if (currentPosition >= totalSlides - 2) {
    // this is saying that there will be two images shown at a time
    currentPosition = 0;
  } else {
    currentPosition++;
    // The rest is saying that only the carousel items 
// are moving forward and everything else is to stay in its current postion
  }
  updateCarouselPosition();
}
// not sure what this means


function moveBackward() {
  // this is a function for what to do when the move backward button is clicked
  if (currentPosition <= 0) {
    currentPosition = totalSlides - 2;
    // this is saying that the moveBackward button will move to the left by two images at a time
  } else {
    currentPosition--;
  }
  updateCarouselPosition();
}
// not sure what this means

function updateCarouselPosition() {
  const items = document.querySelectorAll('.carousel-item');
  const offset = (slideWidth + gap) * currentPosition;
  //calculates how far to move based on the current position.
  // if each slide is 400px wide with a 10px gap, and we're at position 2
  // we move all slides by (400 + 10) * 2 = 820px to the left.

  for (const item of items) {
    item.style.transform = `translateX(-${offset}px)`;
  }
}

// not sure what this means

