const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const image1 = document.querySelector('.image1 img');
const image2 = document.querySelector('.image2 img');

let isOriginal = true; // Track whether original images are displayed

// Original image sources
const originalImage1Src = image1.src;
const originalImage2Src = image2.src;

// New image sources
const newImage1Src = './images/follow6.png';
const newImage2Src = './images/follow5.png';

// Function to toggle between original and new images
function toggleImages() {
    if (isOriginal) {
        // Change to new images
        image1.src = newImage1Src;
        image2.src = newImage2Src;
    } else {
        // Change back to original images
        image1.src = originalImage1Src;
        image2.src = originalImage2Src;
    }
    isOriginal = !isOriginal; // Toggle the state
}

// Event listener for left arrow
leftArrow.addEventListener('click', () => {
    // Call the function to toggle images
    toggleImages();
});

// Event listener for right arrow
rightArrow.addEventListener('click', () => {
    // Call the function to toggle images
    toggleImages();
});

// Variables to track touch events
let startX = 0;
let startY = 0;

// Function to handle touch start event
function handleTouchStart(event) {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
}

// Function to handle touch end event
function handleTouchEnd(event) {
    const endX = event.changedTouches[0].clientX;
    const endY = event.changedTouches[0].clientY;
    const diffX = endX - startX;
    const diffY = endY - startY;

    // Check if the swipe is horizontal and has a minimum distance
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
            // Swipe right, move to the previous image
            toggleImages();
        } else {
            // Swipe left, move to the next image
            toggleImages();
        }
    }
}

// Add event listeners for touch events
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchend', handleTouchEnd, false);
