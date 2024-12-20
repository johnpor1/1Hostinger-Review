let exitPopup = document.getElementById('exit-popup');
    let closeButton = document.querySelector('.close-button');
    let popupShown = false;

    document.addEventListener('mouseout', function(e) {
        if (e.clientY < 0 && !popupShown) {
            exitPopup.style.display = 'block';
            popupShown = true;
        }
    });

    closeButton.addEventListener('click', function() {
        exitPopup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == exitPopup) {
            exitPopup.style.display = 'none';
        }
    });
