
document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname.split("/").pop();
    document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    
    const loginForm = document.querySelector("form[action='MLogin.html']");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (!email || !password) {
                alert("Please fill out all fields.");
            } else {
                alert("Login successful!"); 
            }
        });
    }

 
    const signupForm = document.querySelector("form[action='MSignin.html']");
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
            } else {
                alert("Signup successful!"); 
            }
        });
    }

 
    document.querySelectorAll(".venue button").forEach(button => {
        button.addEventListener("click", () => {
            const details = button.nextElementSibling;
            const isActive = button.classList.contains("active");

            document.querySelectorAll(".venue button").forEach(btn => btn.classList.remove("active"));
            document.querySelectorAll(".venue-details").forEach(detail => detail.style.display = "none");

            if (!isActive) {
                button.classList.add("active");
                details.style.display = "block";
            }
        });
    });

    const carouselElement = document.querySelector('#mainCarousel');
    if (carouselElement) {
        const carousel = new bootstrap.Carousel(carouselElement, {
            interval: 5000,
            pause: 'hover',
        });
    }

   
    document.querySelectorAll(".btn-primary").forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            alert(`Navigating to ${button.href}`); 
        });
    });
});
