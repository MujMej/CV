function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    document.querySelectorAll(".dark-toggle").forEach(t => t.innerText = isDark ? "Light" : "Dark");
    localStorage.setItem("darkMode", isDark);
}

// Load saved theme
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
    document.querySelectorAll(".dark-toggle").forEach(t => t.innerText = "Light");
}

// Counter animation for S.AF.E blog
const counter = document.querySelector(".counter");
if (counter) {
    let count = 0;
    const target = 80;
    const interval = setInterval(() => {
        count += 2;
        counter.innerText = count;
        if (count >= target) {
            counter.innerText = target + "+";
            clearInterval(interval);
        }
    }, 30);
}
