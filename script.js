<!-- Structured data: LocalBusiness -->
  
  {
    "@context":"https://schema.org",
    "@type":"LocalBusiness",
    "name":"Unity Family Home LLC",
    "image":"https://example.com/assets/logo.png",
    "url":"https://example.com",
    "telephone":"+1-555-123-4567",
    "email":"care@unityfamilyhome.com",
    "address":{
      "@type":"PostalAddress",
      "streetAddress":"123 Harmony Ave",
      "addressLocality":"Springfield",
      "addressRegion":"IL",
      "postalCode":"62701",
      "addressCountry":"US"
    },
    "openingHoursSpecification":[{
      "@type":"OpeningHoursSpecification",
      "dayOfWeek":[ "Monday","Tuesday","Wednesday","Thursday","Friday" ],
      "opens":"08:00",
      "closes":"18:00"
    }],
    "areaServed":"United States",
    "priceRange":"$$",
    "description":"Compassionate, U.S.-based home care focused on dignity, independence, and trustworthy caregivers."
  }
 

    document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('bookingForm');
    const status = document.getElementById('formStatus');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // stop normal form submit

        // Validate with HTML5 first
        if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
        }

        // Prepare form data
        const formData = new FormData(form);

        // Send to Netlify via fetch
        fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
        })
        .then(() => {
        status.textContent = '✅ Thank you! Your request has been received. We will contact you shortly.';
        form.reset();
        form.classList.remove('was-validated');
        })
        .catch((error) => {
        status.textContent = '❌ Oops! There was a problem submitting your form.';
        console.error(error);
        });
    });
    });
