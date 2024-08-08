
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    let currentTheme;
    try {
        currentTheme = localStorage.getItem('theme');
    } catch (error) {
        currentTheme = 'light'; // Default theme if no theme is set in local storage
    }

    toggleButtonIcon(sunIcon, moonIcon, currentTheme);
    document.body.setAttribute('data-bs-theme', currentTheme);

    themeToggleButton.addEventListener('click', () => {
        const newTheme = document.body.getAttribute('data-bs-theme') === 'light' ? 'dark' : 'light';
        toggleButtonIcon(sunIcon, moonIcon, newTheme);
        document.body.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});

function toggleButtonIcon(sunIcon, moonIcon, newTheme) {
    if (newTheme === 'dark') {
        document.body.classList.add('dark-mode');
        sunIcon.classList.add('d-none');
        moonIcon.classList.remove('d-none');
    } else {
        document.body.classList.add('light-mode');
        moonIcon.classList.add('d-none');
        sunIcon.classList.remove('d-none');
    }
}