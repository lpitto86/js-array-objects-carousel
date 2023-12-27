const images = [
      {
          url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
          title: 'Svezia',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
      },
      {
          url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
          title: 'Perù',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
      },
      {
          url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
          title: 'Chile',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
      },
      {
          url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
          title: 'Argentina',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
      },
      {
          url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
          title: 'Colombia',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
      },
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
    img.src = slides[i].url;
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
  textElement.textContent = slides[index].description;

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