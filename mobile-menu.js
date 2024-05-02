document.addEventListener("DOMContentLoaded", function() {
    const toggleMenu = document.querySelector('.TogleMenu');
    const dropdownMenu = document.querySelector('.ulist');

    toggleMenu.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });
});
