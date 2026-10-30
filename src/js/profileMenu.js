const userEmailKey = 'postItUserEmail';
const profileControl = document.querySelector('.profile-control');
const profileToggle = profileControl.querySelector('.profile-toggle');
const profileDropdown = profileControl.querySelector('.profile-dropdown');
const userEmail = localStorage.getItem(userEmailKey);
const loginForm = document.querySelector('.form-container form');

function getUserName(email) {
    return email.split('@')[0]
        .replace(/[._-]+/g, ' ')
        .replace(/\b\w/g, character => character.toUpperCase());
}

function showProfileMenu(email) {
    profileControl.querySelector('.profile-name').textContent = getUserName(email);
    profileControl.querySelector('.profile-email').textContent = email;
    profileToggle.setAttribute('aria-label', 'Toggle profile menu');
}

if (userEmail) {
    showProfileMenu(userEmail);
}

profileToggle.addEventListener('click', () => {
    if (!localStorage.getItem(userEmailKey)) {
        window.location.href = 'login.html';
        return;
    }

    profileDropdown.hidden = !profileDropdown.hidden;
    profileToggle.setAttribute('aria-expanded', String(!profileDropdown.hidden));
});

profileControl.querySelector('.logout-btn').addEventListener('click', () => {
    localStorage.removeItem(userEmailKey);
    window.location.href = 'index.html';
});

if (loginForm && loginForm.querySelector('input[type="email"]')) {
    loginForm.addEventListener('submit', event => {
        event.preventDefault();
        const email = loginForm.querySelector('input[type="email"]').value.trim();
        localStorage.setItem(userEmailKey, email);
        window.location.href = 'index.html';
    });
}
