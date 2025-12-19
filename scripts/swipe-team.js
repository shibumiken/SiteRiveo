const teamCarousel = document.getElementById('teamCarousel');
let isDownTeam = false;
let startXTeam;
let scrollLeftTeam;

teamCarousel.addEventListener('mousedown', (e) => {
  isDownTeam = true;
  teamCarousel.classList.add('active');
  startXTeam = e.pageX - teamCarousel.getBoundingClientRect().left;
  scrollLeftTeam = teamCarousel.scrollLeft;
});

teamCarousel.addEventListener('mouseleave', () => {
  isDownTeam = false;
  teamCarousel.classList.remove('active');
});

teamCarousel.addEventListener('mouseup', () => {
  isDownTeam = false;
  teamCarousel.classList.remove('active');
});

teamCarousel.addEventListener('mousemove', (e) => {
  if (!isDownTeam) return;
  e.preventDefault();
  const x = e.pageX - teamCarousel.getBoundingClientRect().left;
  const walk = (x - startXTeam) * 1.1;
  teamCarousel.scrollLeft = scrollLeftTeam - walk;
});