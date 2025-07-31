export class ModalManager {
    constructor() {
        this.modals = document.querySelectorAll('.modal');
        this.init();
    }

    init() {
        this.modals.forEach(modal => {
            //close modal using x
            const closeBtn = modal.querySelector('.modal-close');
            if(closeBtn) {
                closeBtn.addEventListener('click', () => this.close(modal));
            }
        
            //click far from modal content
            modal.addEventListener('click', (e) => {
                if(e.target === modal) this.close(modal);
            }); 
            
            //close modal using ESC
            document.addEventListener('keydown', (e) => {
                if(e.key === "Escape") {
                    this.modal.forEach(modal => this.close(modal));
                }
            });


        });
    }

    open(modalId) {
        document.getElementById(modalId).classList.add('active');
    }

    close(modal) {
        modal.classList.remove('active');
    }
}