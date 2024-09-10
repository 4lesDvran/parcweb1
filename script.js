// Busqueda de vehiculos
document.getElementById('searchBar').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const vehicleCategories = document.querySelectorAll('.vehicle-category');

    vehicleCategories.forEach(function(category) {
        const cards = category.querySelectorAll('.card');
        let matchFound = false;

        cards.forEach(function(card) {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            if (title.includes(filter)) {
                card.style.display = 'block';
                matchFound = true;
            } else {
                card.style.display = 'none';
            }
        });

        // Esconder segun no encuentra
        category.style.display = matchFound ? 'block' : 'none';
    });
});

const form = document.getElementById('testDriveForm');
const emailUsageCount = {};

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;
    const bloodType = document.getElementById('bloodType').value;
    const birthDate = document.getElementById('birthDate').value;
    const testDriveDate = document.getElementById('testDriveDate').value;

    const nameRegex = /^[A-Za-zÀ-ÿ\s]+$/;
    const phoneRegex = /^3\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
        alert('Invalid name or surname. Only letters are allowed.');
        return;
    }

    if (!emailRegex.test(email)) {
        alert('Invalid email address.');
        return;
    }

    if (!phoneRegex.test(phone)) {
        alert('Phone number must start with 3 and have 10 digits.');
        return;
    }

    // Contador de email
    emailUsageCount[email] = (emailUsageCount[email] || 0) + 1;

    // Alert y consola, la informacion se almacena en la consola
    alert('Information submitted successfully!');
    console.log(`Submitted Data: 
        First Name: ${firstName}, 
        Last Name: ${lastName}, 
        Email: ${email} (used ${emailUsageCount[email]} times), 
        Phone: ${phone}, 
        Gender: ${gender}, 
        Blood Type: ${bloodType}, 
        Birth Date: ${birthDate}, 
        Test Drive Date: ${testDriveDate}`);
});
