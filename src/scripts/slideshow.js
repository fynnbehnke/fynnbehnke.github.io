class Slideshow {
  constructor(slideshowId) {
    this.slideIndex = 1;
    this.slideInterval = null;
    this.slideshowId = slideshowId;
    this.slides = document.querySelectorAll(`#${slideshowId} .mySlides`);
    this.dots = document.querySelectorAll(`#${slideshowId} .demo`);
    this.showDivs(this.slideIndex);
    this.startCarousel();
  }

  // Show specific slide
  showDivs(n) {
    if (n > this.slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = this.slides.length; }

    // Hide all slides
    this.slides.forEach(slide => slide.style.display = "none");

    // Remove active class from all dots
    this.dots.forEach(dot => dot.className = dot.className.replace(" w3-black", ""));

    // Show the current slide and highlight the corresponding dot
    this.slides[this.slideIndex - 1].style.display = "block";
    this.dots[this.slideIndex - 1].className += " w3-black";
  }

  // Change slide index
  plusDivs(n) {
    clearTimeout(this.slideInterval);
    this.showDivs(this.slideIndex += n);
    this.startCarousel();
  }

  // Go to a specific slide
  currentDiv(n) {
    clearTimeout(this.slideInterval);
    this.showDivs(this.slideIndex = n);
    this.startCarousel();
  }

  // Automatic carousel
  startCarousel() {
    this.slideInterval = setTimeout(() => this.plusDivs(1), 5000); // Change slide every 5 seconds
  }
}

// Initialize slideshows
let slideshows = {};
slideshows['slideshow_mreapers'] = new Slideshow('slideshow_mreapers');
slideshows['slideshow_mt'] = new Slideshow('slideshow_mt');