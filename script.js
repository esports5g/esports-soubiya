window.onload = () => {
  document.getElementById('loader').style.display = 'none';
  let index = 0;
  const images = document.querySelectorAll('.carousel-img');
  setInterval(() => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  }, 3000);
};
particlesJS.load('particles-js', 'particles.json');