// 1. Clock Function
function updateClock() {
    const now = new Date();
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        clockElement.innerText = now.toLocaleTimeString();
    }
}
// Run immediately and then every second
updateClock();
setInterval(updateClock, 1000);

// 2. Year Update
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.innerText = new Date().getFullYear();
}

// 3. Theme Toggle Logic
const themeBtn = document.getElementById('themeToggle');
const html = document.documentElement;

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        
        // Change icon based on theme
        if (next === 'dark') {
            themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
}