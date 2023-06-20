// JavaScript para el carrito de compras
// Actualizar el contador del carrito cuando se agrega un producto
function updateCartCount(count) {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = count;
  }
  
  // Ejemplo de cómo utilizar la función updateCartCount
  // Aquí se utiliza un evento click en el botón "Ver último drop" para aumentar el contador del carrito en 1
  const verUltimoDropButton = document.querySelector('.orange-button');
  let cartCount = 0;
  
  verUltimoDropButton.addEventListener('click', function() {
    cartCount++;
    updateCartCount(cartCount);
  });


  /* carrousel */

const carouselContainer = document.querySelector('.carousel-container');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.carousel-btn-prev');
const nextBtn = document.querySelector('.carousel-btn-next');

let slideIndex = 0;
const slideWidth = 100 / 2; 

function updateCarousel() {
  carouselContainer.style.transform = `translateX(-${slideIndex * slideWidth}%)`;
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === slideIndex);
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slideIndex = index;
    updateCarousel();
  });
});

prevBtn.addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = 1;
  }
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  slideIndex++;
  if (slideIndex > 1) {
    slideIndex = 0;
  }
  updateCarousel();
});
 
/* */

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
