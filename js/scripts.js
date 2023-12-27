const slides = [
      {
          image: 'img/01.webp',
          title: 'Image 1',
          text: 'Description for Image 1'
      },
      {
          image: 'img/02.webp',
          title: 'Image 2',
          text: 'Description for Image 2'
      },
      {
          image: 'img/03.webp',
          title: 'Image 3',
          text: 'Description for Image 3'
      },
      {
          image: 'img/04.webp',
          title: 'Image 4',
          text: 'Description for Image 4'
      },
      {
          image: 'img/05.webp',
          title: 'Image 5',
          text: 'Description for Image 5'
      }
  ];
  
  const carousel = document.getElementById('carousel');
  const carouselInner = document.querySelector('.carousel-inner');
  const titleElement = document.getElementById('slideTitle');
  const textElement = document.getElementById('slideText');
  
  function createCarousel() {
      for (let i = 0; i < slides.length; i++) {
          const item = document.createElement('div');
          item.className = i === 0 ? 'carousel-item active' : 'carousel-item';
  
          const img = document.createElement('img');
          img.className = 'carousel-img';
          img.src = slides[i].image;
          img.alt = slides[i].title;
  
          item.appendChild(img);
          carouselInner.appendChild(item);
      }
  }
  
  function showSlide(index) {
      const items = document.querySelectorAll('.carousel-item');
      items.forEach(item => item.classList.remove('visible'));
      items[index].classList.add('visible');
  
      titleElement.textContent = slides[index].title;
      textElement.textContent = slides[index].text;
  
      const nextIndex = (index + 1) % items.length;
  
      if (nextIndex === 0) {
          setTimeout(() => {
              showSlide(0);
          }, 2000);
      }
  }
  
  document.getElementById('prevBtn').addEventListener('click', function () {
      const currentIndex = Array.from(document.querySelectorAll('.carousel-item')).findIndex(item => item.classList.contains('visible'));
      const previousIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(previousIndex);
  });
  
  document.getElementById('nextBtn').addEventListener('click', function () {
      const currentIndex = Array.from(document.querySelectorAll('.carousel-item')).findIndex(item => item.classList.contains('visible'));
      const nextIndex = (currentIndex + 1) % slides.length;
      showSlide(nextIndex);
  });
  
  createCarousel();
  showSlide(0);