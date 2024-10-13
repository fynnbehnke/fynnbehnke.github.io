var slideIndex = 1;
var slideInterval;

showDivs(slideIndex);
startCarousel();  // Start the automatic slideshow

// Manually change slides by increasing or decreasing the index
function plusDivs(n) {
  clearTimeout(slideInterval); // Stop the carousel
  showDivs(slideIndex += n);   // Change the slide
  startCarousel();             // Restart the carousel with the new index
}

// Manually jump to a specific slide
function currentDiv(n) {
  clearTimeout(slideInterval); // Stop the carousel
  showDivs(slideIndex = n);    // Change to the specific slide
  startCarousel();             // Restart the carousel
}

// Show the selected slide
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");

  // Loop back to the first slide if the index exceeds the number of slides
  if (n > x.length) { slideIndex = 1 }
  // Loop back to the last slide if the index goes below 1
  if (n < 1) { slideIndex = x.length }

  // Hide all slides
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  // Remove the active class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-black", "");
  }
  // Show the current slide and add the active class to the corresponding dot
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-black";
}

// Start or restart the automatic carousel
function startCarousel() {
  slideInterval = setTimeout(function() {
    plusDivs(1); // Move to the next slide every 2 seconds
  }, 2000);
}