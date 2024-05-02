document.addEventListener('DOMContentLoaded', function() {
    var sbButton = document.querySelector('.sb');
    var searchInput = document.querySelector('.searchbar');
    var menuIcon = document.getElementById('menu');
    var leftIcons = document.querySelector('.lefticons');
    var icons = document.querySelector('.icons');
    var mobileLogo = document.querySelector('.mobile-logo');
    var othericons = document.querySelector('.bagacc');
    var logobutton = document.querySelector('.sb');

    sbButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click event from propagating to document

        // Check if the screen width is within the specified range
        if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
            // If so, hide the navbar
            leftIcons.style.display = 'none';
            icons.style.display = 'none';
            mobileLogo.style.display = 'none';
            othericons.style.display = 'none';
     
        }

        searchInput.classList.toggle('show-searchbar');
        menuIcon.classList.toggle('hide-menu');
    });

    // Close search input when clicking anywhere else on the document
    document.addEventListener('click', function(event) {
        if (!searchInput.contains(event.target) && !sbButton.contains(event.target)) {
            searchInput.classList.remove('show-searchbar');
            menuIcon.classList.remove('hide-menu');

            // Check if the screen width is within the specified range
            if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
                // If so, display the navbar
                leftIcons.style.display = '';
                icons.style.display = '';
                mobileLogo.style.display = '';
                othericons.style.display = '';
          
            }
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    var sicon = document.querySelector('.searchicon');
    var searchInput = document.querySelector('.searchbar');
    var menuIcon = document.getElementById('menu');
    var leftIcons = document.querySelector('.lefticons');
    var icons = document.querySelector('.icons');
    var mobileLogo = document.querySelector('.mobile-logo');
    var othericons = document.querySelector('.bagacc');
  
    sicon.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click event from propagating to document

        // Check if the screen width is within the specified range
        if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
            // If so, hide the navbar
            leftIcons.style.display = 'none';
            icons.style.display = 'none';
            mobileLogo.style.display = 'none';
            othericons.style.display = 'none';
     
        }

        searchInput.classList.toggle('show-searchbar');
        menuIcon.classList.toggle('hide-menu');
    });

    // Close search input when clicking anywhere else on the document
    document.addEventListener('click', function(event) {
        if (!searchInput.contains(event.target) && !sicon.contains(event.target)) {
            searchInput.classList.remove('show-searchbar');
            menuIcon.classList.remove('hide-menu');

            // Check if the screen width is within the specified range
            if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
                // If so, display the navbar
                leftIcons.style.display = '';
                icons.style.display = '';
                mobileLogo.style.display = '';
                othericons.style.display = '';
          
            }
        }
    });
});