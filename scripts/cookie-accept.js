document.addEventListener('DOMContentLoaded', () => {
  const notice = document.getElementById('cookieNotice');
  const acceptBtn = document.getElementById('acceptCookies');

  if (!localStorage.getItem('cookieConsent')) {
    setTimeout(() => {
      notice.classList.add('visible');
    }, 800); 
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted'); 
    notice.classList.remove('visible');
    
    setTimeout(() => {
      notice.style.display = 'none';
    }, 500);
  });
});