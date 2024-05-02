document.addEventListener('DOMContentLoaded', function() {
    var smButton = document.querySelector('.sm');
    var ulistMenu = document.querySelector('.ulist');

    smButton.addEventListener('click', function() {
        ulistMenu.classList.toggle('show-menu');
    });
});