function showPopup() {
    const popup = document.getElementById('mc-download');
    const overlay = document.getElementById('overlay');
    if (popup && overlay) {
        overlay.classList.add('visible');
        popup.style.display = 'block';
        requestAnimationFrame(() => {
            popup.classList.add('scale-in');
        });
    }
}

function hidePopup() {
    const popup = document.getElementById('mc-download');
    const overlay = document.getElementById('overlay');
    if (popup && overlay) {
        overlay.classList.remove('visible');
        popup.classList.remove('scale-in');
        popup.classList.add('scale-out');
        popup.addEventListener(
            'animationend',
            function onAnimationEnd() {
                popup.style.display = 'none';
                popup.classList.remove('scale-out');
                popup.removeEventListener('animationend', onAnimationEnd);
            }
        );
    }
}

// COOKIE CLICKER POPUP

function showPopup1() {
    const popup = document.getElementById('cc-download');
    const overlay = document.getElementById('overlay');
    if (popup && overlay) {
        overlay.classList.add('visible');
        popup.style.display = 'block';
        requestAnimationFrame(() => {
            popup.classList.add('scale-in');
        });
    }
}

function hidePopup1() {
    const popup = document.getElementById('cc-download');
    const overlay = document.getElementById('overlay');
    if (popup && overlay) {
        overlay.classList.remove('visible');
        popup.classList.remove('scale-in');
        popup.classList.add('scale-out');
        popup.addEventListener(
            'animationend',
            function onAnimationEnd() {
                popup.style.display = 'none';
                popup.classList.remove('scale-out');
                popup.removeEventListener('animationend', onAnimationEnd);
            }
        );
    }
}