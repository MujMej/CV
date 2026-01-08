/* THEME TOGGLE */
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    document.querySelectorAll(".dark-toggle")
        .forEach(btn => btn.innerText = isDark ? "Light mode" : "Dark mode";);

    localStorage.setItem("darkMode", isDark);
}

// Load saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("darkMode");

    if (saved === "true") {
        document.body.classList.add("dark-mode");
        document.querySelectorAll(".dark-toggle")
            .forEach(btn => btn.innerText = "Light");
    }

    animateCounter("postCounter", 80);
    
    // Profile image rotate (optional)
  rotateProfileImages([
    "assets/profile-pic.jpg",
    "assets/profile-pic-2.jpg"
  ], 3500);
});

function rotateProfileImages(images, intervalMs = 3500) {
  const img = document.getElementById("profileImage");
  if (!img || !images || images.length < 2) return;

  let index = 0;

  setInterval(() => {
    img.classList.add("fade-out");

    setTimeout(() => {
      index = (index + 1) % images.length;
      img.src = images[index];
      img.classList.remove("fade-out");
    }, 650);

  }, intervalMs);
}
});


/* COUNTER ANIMATION */
function animateCounter(id, target, duration = 1800) {
    const el = document.getElementById(id);
    if (!el) return;

    let current = 0;
    const step = Math.ceil(target / (duration / 50));

    const interval = setInterval(() => {
        current += step;

        if (current >= target) {
            current = target;
            clearInterval(interval);
        }

        el.textContent = current;
    }, 50);
}
