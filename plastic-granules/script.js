
console.log("Website loaded!");

  document.querySelector('form').addEventListener('submit', handleFormSubmit);
  document.addEventListener('DOMContentLoaded', function () {
    const newsletterForm = document.querySelector('.newsletter-section form');

    newsletterForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

      if (email) {
        alert(`Thank you for subscribing! You will receive updates at ${email}.`);
        emailInput.value = ''; 
      } else {
        alert('Please enter a valid email address.');
      }
    });
  });
function handleFormSubmit(event) {
  event.preventDefault(); 
  alert("Your message has been sent successfully!"); 
  event.target.reset(); 
}
