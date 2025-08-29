document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');
    const allMediaElements = document.querySelectorAll('.carousel-inner img, .carousel-inner video');
  
    function pauseAllMedia() {
      allMediaElements.forEach(media => {
        if (media.tagName === 'VIDEO') {
          media.pause();
          media.currentTime = 0;
        }
      });
    }
  
    carousels.forEach(carousel => {
      const mediaElements = carousel.querySelectorAll('.carousel-inner img, .carousel-inner video');
      const leftNav = carousel.querySelector('.left-nav');
      const rightNav = carousel.querySelector('.right-nav');
      let currentIndex = 0;
  
      function showMedia(index) {
        mediaElements.forEach((media, i) => {
          media.style.display = i === index ? 'block' : 'none';
          if (media.tagName === 'VIDEO') {
            if (i === index) {
              pauseAllMedia(); // Pause all other media before playing the current one
              media.play();
            } else {
              media.pause();
              media.currentTime = 0;
            }
          }
        });
      }
  
      rightNav.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % mediaElements.length;
        showMedia(currentIndex);
      });
  
      leftNav.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + mediaElements.length) % mediaElements.length;
        showMedia(currentIndex);
      });
  
      document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
          currentIndex = (currentIndex + 1) % mediaElements.length;
          showMedia(currentIndex);
        } else if (event.key === 'ArrowLeft') {
          currentIndex = (currentIndex - 1 + mediaElements.length) % mediaElements.length;
          showMedia(currentIndex);
        }
      });
  
      showMedia(currentIndex);
    });
  });

  