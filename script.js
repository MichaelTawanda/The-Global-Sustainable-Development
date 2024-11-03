document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the values of the input fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple validation
        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields.');
            return;
        }

        // If validation passes, you can process the form (e.g., send data to a server)
        alert('Thank you for your message, ' + name + '! We will get back to you soon.');

        // Reset the form
        form.reset();
    });
});