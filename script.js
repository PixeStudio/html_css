import { ModalManager } from "./modalManager.js";
import { Calendar } from "./calendar.js";

document.addEventListener('DOMContentLoaded', function() {

    //MODAL MANAGER
    const modalManager = new ModalManager();
    let calendar;

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.tagName.toLowerCase() === 'button') return;

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
    });

    document.querySelectorAll('.card-button').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const card = btn.closest('card');
            const title = card.querySelector('h3').textContent;

            document.getElementById('reservationTitle').textContent = `Book: ${title}`;

            const busyDays = ['2025-08-20', '2025-08-23', '2025-08-26'];
            if (calendar) calendar = null; // ERASE OLD INSTATION
            calendar = new Calendar(document.getElementById('calendarContainer'), busyDays);
        
            modalManager.open('reservationModal');
        });
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