// 1. This wrapper forces the script to wait until the entire HTML tree is ready
document.addEventListener("DOMContentLoaded", () => {
    
    // 2. Put your menu selectors inside the wrapper
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    // 3. Only run the code if the menu elements actually exist on the page
    if (menuBtn && navLinks) {
        
        // Toggle active classes on click
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu panel when clicking any individual nav link
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
    }
});


const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Add animation class when entering screen
        } else {
            entry.target.classList.remove('show'); // 🚀 REMOVES the class when scrolling away!
        }
    });
}, observerOptions);




