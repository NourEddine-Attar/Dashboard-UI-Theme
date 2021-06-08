let darkMode = localStorage.getItem('dark');

const darkBtn = document.querySelector('.darkBtn');
const followers = document.querySelector('.followers');

const enableDarkMode = () => {
    document.body.classList.add('dark');
    darkBtn.classList.add('rotation');
    localStorage.setItem('dark','enabled');
}

const disableDarkMode = () => {
    document.body.classList.remove('dark');
    darkBtn.classList.remove('rotation');
    localStorage.setItem('dark', null);
}

if (darkMode === 'enabled') {
    enableDarkMode();
}



darkBtn.addEventListener('click', () => {
    darkMode = localStorage.getItem('dark');

    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});