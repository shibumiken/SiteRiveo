const str = document.getElementById('infiniteStr');

// Дублируем содержимое для бесшовности
str.innerHTML += str.innerHTML;

let pos = 0;
const speed = 0.3; // px за кадр, уменьшить для медленнее

function animate() {
    pos -= speed;
    // Когда прокрутка дошла до конца первого блока, сбрасываем позицию
    if (Math.abs(pos) >= str.scrollWidth / 2) {
        pos = 0;
    }
    str.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(animate);
}

animate();