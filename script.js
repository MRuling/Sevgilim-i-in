const starsContainer = document.getElementById('stars');

function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  const size = Math.random() * 2 + 1 + 'px';
  star.style.width = size;
  star.style.height = size;
  star.style.top = Math.random() * 100 + 'vh';
  star.style.left = Math.random() * 100 + 'vw';
  star.style.animationDuration = 2 + Math.random() * 3 + 's';
  star.style.animationDelay = Math.random() * 5 + 's';
  return star;
}

// 100 tane yıldız oluştur
for(let i = 0; i < 100; i++) {
  const star = createStar();
  starsContainer.appendChild(star);
}
