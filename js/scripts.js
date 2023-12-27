const images = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

// Elemento del carosello
const carousel = document.getElementById('carousel');

// Ciclo per le immagini
for (let i = 0; i < images.length; i++) {
    // Creazione di un elemento div
    const item = document.createElement('div');
    item.className = 'carousel-item';

    // Creazione di un elemento img
    const img = document.createElement('img');
    img.className = 'carousel-img';
    img.src = images[i];
    img.alt = `Image ${i + 1}`;

    // Immagine al div
    item.appendChild(img);

    // Div al carosello
    carousel.appendChild(item);
}

// Ottieni la lista
const items = document.querySelectorAll('.carousel-item');

// Mostra solo la prima immagine
items[0].classList.add('visible');

function showImage(index) {
    // Rimuovi la classe 'visible' dagli elementi
    items.forEach(item => item.classList.remove('visible'));
  
    // Aggiungi la classe 'visible' all'elemento
    items[index].classList.add('visible');
  
    // Immagine successiva
    const nextIndex = (index + 1) % items.length;
  
    // Controlla se l'immagine successiva è la prima
    if (nextIndex === 0) {
      // Tempo per l'immagine
      setTimeout(() => {
        showImage(0);
      }, 2000);
    }
}
  
// Click sulla freccia sinistra
document.getElementById('prevBtn').addEventListener('click', function () {
    // Immagine attualmente visibile
    const currentIndex = Array.from(items).findIndex(item => item.classList.contains('visible'));

    // Immagine precedente
    const previousIndex = (currentIndex - 1 + items.length) % items.length;

    // Mostra immagine precedente
    showImage(previousIndex);
  });
  
// Click sulla freccia destra
document.getElementById('nextBtn').addEventListener('click', function () {
    // Immagine attualmente visibile
    const currentIndex = Array.from(items).findIndex(item => item.classList.contains('visible'));

    // Immagine successiva
    const nextIndex = (currentIndex + 1) % items.length;

    // Immagine successiva
    showImage(nextIndex);
});

// Funzione per passare automaticamente all'immagine
function autoPlay() {
    // Immagine attualmente visibile
    const currentIndex = Array.from(items).findIndex(item => item.classList.contains('visible'));
  
    // Immagine successiva
    const nextIndex = (currentIndex + 1) % items.length;
  
    // Immagine successiva
    showImage(nextIndex);
  }

// Imposta un timer per chiamare la funzione autoPlay ogni 3000 millisecondi (3 secondi)
const autoplayInterval = setInterval(autoPlay, 3000);