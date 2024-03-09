// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Show/hide back-to-top button based on scroll position
    window.addEventListener('scroll', function() {
        scrollFunction();
    });

    function scrollFunction() {
        var backToTopButton = document.getElementById("backToTop");

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    }

    // Scroll to the top when the button is clicked
    document.getElementById("backToTop").addEventListener("click", function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
});
