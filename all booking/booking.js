// document.getElementById('showDataBtn').addEventListener('click', function() {
//     document.getElementById('dataContainer').classList.toggle('hidden');
// });


// ~




// script.js

document.addEventListener('DOMContentLoaded', function() {
    const reservations = [
        
        { type: 'restaurant', details: 'تفاصيل الحجز في المطعم' },
        { type: 'car', details: 'تفاصيل حجز السيارة' },
        { type: 'trip', details: 'تفاصيل الرحلة' }
    ];

    const container = document.getElementById('reservations-container');

    if (reservations.length === 0) {
        const noReservationsMessage = document.createElement('p');
        noReservationsMessage.textContent = 'لا يوجد أي حجز';
        container.appendChild(noReservationsMessage);
    } else {
        reservations.forEach(reservation => {
            const card = document.createElement('div');
            card.classList.add('card');
            
            const title = document.createElement('h2');
            title.textContent = `حجز ${reservation.type}`;
            card.appendChild(title);
            
            const details = document.createElement('p');
            details.textContent = reservation.details;
            card.appendChild(details);

            container.appendChild(card);
        });
    }
});
