
    // Back-to-Top Button Functionality
    const backToTop = document.getElementById('backToTop');

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    };

    backToTop.onclick = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    // Form Validation
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const fullName = document.getElementById('fullName').value;
        const phoneNumber = document.getElementById('phoneNumber').value;

        if (!fullName || !phoneNumber) {
            alert('Please fill in all required fields.');
            return;
        }

        alert('Thank you for contacting us, ' + fullName + '! We will call you soon.');
        form.reset();
    });

    // Testimonials Carousel
    let currentSlide = 0;
    const testimonials = document.querySelectorAll('.testimonial');

    function showSlide(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('active');
            if (i === index) testimonial.classList.add('active');
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonials.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds
    showSlide(currentSlide);

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('fullName').value;
        const mobile = document.getElementById('mobile').value;
        const course = document.getElementById('course').value;

        if (name && mobile && course) {
            alert(`Thank you, ${name}! We'll get back to you soon.`);
            this.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });


