document.addEventListener('DOMContentLoaded', function() {
    
    /*COOKIES MODAL*/
    
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptBtn = document.getElementById('acceptCookies');

    if(localStorage.getItem('cookieAccepted') === '1') {
        cookieConsent.classList.add('hide');
    }

    acceptBtn.addEventListener('click', function() {
        cookieConsent.classList.add('hide');
        localStorage.setItem('cookieAccepted', '1');
    });
});