document.querySelectorAll('.buttonService').forEach(btn => {
    btn.addEventListener('mouseenter', function (e) {
        const ripple = this.querySelector('.ripple');
        if (!ripple) return;

        const rect = this.getBoundingClientRect();
        
        // Диаметр волны — примерно 2.2–2.5 × размер кнопки
        const diameter = Math.max(rect.width, rect.height) * 2.3;
        const radius = diameter / 2;

        const x = e.clientX - rect.left - radius;
        const y = e.clientY - rect.top  - radius;

        ripple.style.width  = diameter + 'px';
        ripple.style.height = diameter + 'px';
        ripple.style.left   = x + 'px';
        ripple.style.top    = y + 'px';

        // Запускаем анимацию
        ripple.classList.remove('active');
        void ripple.offsetWidth;           // принудительный reflow
        ripple.classList.add('active');
    });

    // Убираем анимацию при уходе курсора (важно для повторных наведений)
    btn.addEventListener('mouseleave', function () {
        const ripple = this.querySelector('.ripple');
        if (ripple) {
            ripple.classList.remove('active');
        }
    });
});