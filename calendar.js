export class Calendar {
    constructor(container, busyDays = []) {
        this.container = container;
        this.busyDays = busyDays;
        this.selectedDate = selectedDate;
        this.today = new Date();
        this.currentMonth = this.today.getMonth();
        this.currentYear = this.today.getFullYear();
        this.render();
    }

    render() {
        // GENERATE MONTH WITH DATE
        // RESET BEFORE GENERATE
        this.container.innerHTML = '';

        //MONTH'S TITLE
        const header = document.createElement('div');
        header.className = 'calendar-header';
        header.innerHTML = `
            <button class="prev-month">&#8592;</button>
            <span>${this.currentYear} - ${String(this.currentMonth + 1).padStart(2, '0')}</span>
            <button class="next-month">&#8594;</button>
        `;
        this.container.appendChild(header);

        //BUTTON FOR CHANGE MONTH
        header.querySelector('.prev-month').onClick = () => {
            if (this.currentMonth === 0) {
                this.currentMonth = 11;
                this.currentYear--;
            } else {
                this.currentMonth--;
            }
            this.render();
        };

        header.querySelector('.next-month').onClick = () => {
            if (this.currentMonth === 11) {
                this.currentMonth = 0;
                this.currentYear++;
            } else {
                this.currentMonth++;
            }
            this.render();
        };

    }
}