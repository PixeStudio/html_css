document.addEventListener('DOMContentLoaded', function() {
    //MODAL MANAGER

    const modalManager = new ModalManager();

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function(e) {
            if(e.target.tagName.toLowerCase() === 'button') return;
        });

        //DOWNLOAD DATE FROM OPENNED CARD
        const imgSrc = card.querySelector('img').getAttribute('src');
        const title = card.querySelector('h3').textContent;
        const desc = card.querySelector('p').innerHTML;

        //SET DATE IN MODAL
        document.getElementById('modalImg').setAttribute('src', imgSrc);
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalDesc').innerHTML = desc;

        modalManager.open('productModal');
    });


    /*COOKIES MODAL*/

    const cookieConsent = document.getElementById('cookieConsent');
    const acceptBtn = document.getElementById('acceptCookies');

    /*if(localStorage.getItem('cookieAccepted') === '1') {
        cookieConsent.classList.add('hide');
    }*/

    acceptBtn.addEventListener('click', function() {
        cookieConsent.classList.add('hide');
        localStorage.setItem('cookieAccepted', '1');
    });
});