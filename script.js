// <!-- Structured data: LocalBusiness -->
  
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
 
 //form submission script
    document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('bookingForm');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
    .then(() => {
      status.innerHTML = '<div class="alert alert-success">✅ Thank you! Your request has been received. We will contact you shortly.</div>';
      form.reset();
      form.classList.remove('was-validated');
    })
    .catch((error) => {
      status.innerHTML = '<div class="alert alert-danger">❌ Oops! There was a problem submitting your form.</div>';
      console.error(error);
    });
  });
});

    // Defer custom JS after DOM ready
    document.addEventListener('DOMContentLoaded', function () {
      // Current year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Accessible form validation + confirmation (no backend)
      const form = document.getElementById('bookingForm');
      const status = document.getElementById('formStatus');

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (!form.checkValidity()) {
          form.classList.add('was-validated');
          status.textContent = '';
          return;
        }

        // Simulate submit success (replace with real fetch to your endpoint)
        status.textContent = 'Thank you! Your request has been received. We will contact you shortly.';
        form.reset();
        form.classList.remove('was-validated');

        // Move focus to status for screen readers
        status.focus && status.focus();
      });

      // Prevent stale aria-current on nav
      const links = document.querySelectorAll('.navbar .nav-link[href^="#"]');
      const sections = Array.from(links).map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);

      const setActive = () => {
        const scrollPos = window.scrollY + 120;
        for (const s of sections) {
          const top = s.offsetTop;
          const bottom = top + s.offsetHeight;
          const link = document.querySelector('.nav-link[href="#' + s.id + '"]');
          if (scrollPos >= top && scrollPos < bottom) {
            links.forEach(a => a.removeAttribute('aria-current'));
            link && link.setAttribute('aria-current', 'page');
            break;
          }
        }
      };
      window.addEventListener('scroll', setActive, { passive: true });
      setActive();
    });
