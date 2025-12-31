const str = document.getElementById('infiniteStr');

str.innerHTML += str.innerHTML;

let pos = 0;
const speed = 0.3; 

function animate() {
    pos -= speed;
     if (Math.abs(pos) >= str.scrollWidth / 2) {
        pos = 0;
    }
    str.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(animate);
}

animate();