/* THEME TOGGLE */
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");

  document.querySelectorAll(".dark-toggle").forEach((btn) => {
    btn.innerText = isDark ? "Light mode" : "Dark mode";
  });

  localStorage.setItem("darkMode", String(isDark));
}

/* COUNTER ANIMATION */
function animateCounter(id, target, duration = 1800) {
  const el = document.getElementById(id);
  if (!el) return;

  let current = 0;
  const intervalMs = 50;
  const steps = Math.max(1, Math.floor(duration / intervalMs));
  const step = Math.max(1, Math.ceil(target / steps));

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = current;
  }, intervalMs);
}

/* HERO IMAGE ROTATION (2-frame swap) */
function rotateHeroImages(mainId, topId, imgA, imgB, intervalMs = 3500) {
  const main = document.getElementById(mainId);
  const top = document.getElementById(topId);
  if (!main || !top) return;

  // start state: main = A, top = B (already set in HTML)
  const pairs = [
    { main: imgA, top: imgB },
    { main: imgB, top: imgA },
  ];

  let index = 0;

  setInterval(() => {
    main.classList.add("fade-out");
    top.classList.add("fade-out");

    setTimeout(() => {
      index = (index + 1) % pairs.length;
      main.src = pairs[index].main;
      top.src = pairs[index].top;

      main.classList.remove("fade-out");
      top.classList.remove("fade-out");
    }, 650);
  }, intervalMs);
}

/* ON LOAD */
document.addEventListener("DOMContentLoaded", () => {
  // restore theme
  const saved = localStorage.getItem("darkMode");
  const isDark = saved === "true";

  if (isDark) document.body.classList.add("dark-mode");

  document.querySelectorAll(".dark-toggle").forEach((btn) => {
    btn.innerText = isDark ? "Light mode" : "Dark mode";
  });

  // counter (set your real number here)
  animateCounter("postCounter", 80);

  // two-image swap
  rotateHeroImages(
    "heroImageMain",
    "heroImageTop",
    "assets/profile-pic.jpg",
    "assets/profile-pic-2.jpg",
    3500
  );
});
