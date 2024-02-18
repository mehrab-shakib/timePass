document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const footer = document.querySelector('footer');
    
  
    window.addEventListener('scroll', function () {
      const lastSection = sections[sections.length - 1];
      const lastSectionOffset = lastSection.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;
  
      if (scrollPosition >= lastSectionOffset) {
        footer.classList.add('visible');
      } else {
        footer.classList.remove('visible');
      }
    });
  });
  