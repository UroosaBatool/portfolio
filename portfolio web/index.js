var typed = new Typed(".text" , {
    strings: ["UI/UX Designer","Frontend Developer", "Graphic Designer" , "social media manager"],
    typeSpeed: 90,   //removing speed
    backSpeed:60,    //typing-speed
    loop:true
});


//   LEAFLET CODE FOR MAP...................
document.addEventListener('DOMContentLoaded', function () {
    // Initialize the map
    const map = L.map('map').setView([51.505, -0.09], 13);
    
    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Add a marker to the map
    L.marker([30.3753, 69.3451]).addTo(map)
        .bindPopup('Pakistan')
        .openPopup();
     // Add a marker for Karachi's location
     L.marker([24.8607, 67.0011]).addTo(map)
     .bindPopup('Karachi')
     .openPopup();

    // Handle form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        
        // You can use AJAX or other methods to submit the form data to the server
        
        // Example alert to show form data (replace this with your actual submission code)
        alert(`Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\nMessage: ${formData.get('message')}`);
    });
});

