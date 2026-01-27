/* === Sidebar === */
function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("overlay").style.display = "block";
}
function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("overlay").style.display = "none";
}
function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

/* Helper to hide/show menu button */
function hideMenuButton() {
    document.querySelector(".open-btn").style.display = "none";
}
function showMenuButton() {
    document.querySelector(".open-btn").style.display = "block";
}

/* === Individual Popups === */
function showCodeBox() { 
    document.getElementById('codeBox').style.display = 'flex'; 
    closeSidebar(); 
    hideMenuButton(); // hide menu button
}
function hideCodeBox() { 
    document.getElementById('codeBox').style.display = 'none'; 
    showMenuButton(); // show menu button
}

function showInfoBox() { 
    document.getElementById('infoBox').style.display = 'flex'; 
    closeSidebar(); 
    hideMenuButton(); 
}
function hideInfoBox() { 
    document.getElementById('infoBox').style.display = 'none'; 
    showMenuButton(); 
}

function showWifiCodeBox() { 
    document.getElementById('wifiCodeBox').style.display = 'flex'; 
    closeSidebar(); 
    hideMenuButton(); 
}
function hideWifiCodeBox() { 
    document.getElementById('wifiCodeBox').style.display = 'none'; 
    showMenuButton(); 
}

/* === Copy Text === */
function copyText(elementId) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard: ' + text);
    }).catch(err => { console.error('Failed to copy: ', err); });
}

/* === Google Translate === */
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,el,it,pt,ro,es,fr,ka,de,cs,hy,sq,ru',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

/* === Popup Image Zoom (inside popups) === */
/* === Popup Image Zoom Toggle === */
const popupImages = document.querySelectorAll('.popup-box .popup-image');

popupImages.forEach(img => {
    img.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent closing the popup itself
        const isEnlarged = img.classList.contains('enlarged');

        if (isEnlarged) {
            // If already enlarged, remove enlargement
            img.classList.remove('enlarged');
            document.body.classList.remove('image-overlay');
        } else {
            // Otherwise, enlarge it
            img.classList.add('enlarged');
            document.body.classList.add('image-overlay');
        }
    });
});

// Close enlarged image by clicking outside (if clicked outside while enlarged)
document.addEventListener('click', (e) => {
    const enlarged = document.querySelector('.popup-image.enlarged');
    if (enlarged) {
        if (!enlarged.contains(e.target)) {
            enlarged.classList.remove('enlarged');
            document.body.classList.remove('image-overlay');
        }
    }
});

// Close enlarged image with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        const enlarged = document.querySelector('.popup-image.enlarged');
        if (enlarged) {
            enlarged.classList.remove('enlarged');
            document.body.classList.remove('image-overlay');
        }
    }
});
