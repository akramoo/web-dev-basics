// script.js — small interactions: greeting modal, theme toggle, visit counter
(function () {
  const greetBtn = document.getElementById("greetBtn");
  const themeBtn = document.getElementById("themeBtn");
  const greetCountEl = document.getElementById("greetCount");
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("closeModal");
  const modalMessage = document.getElementById("modalMessage");

  // Initialize greet count from localStorage
  const storageKey = "demo.greetCount";
  let count = Number(localStorage.getItem(storageKey) || 0);
  greetCountEl.textContent = String(count);

  greetBtn.addEventListener("click", () => {
    count += 1;
    localStorage.setItem(storageKey, String(count));
    greetCountEl.textContent = String(count);
    // show modal with a custom message
    modalMessage.textContent = `Hello 👋 — you've clicked ${count} ${
      count === 1 ? "time" : "times"
    }!`;
    openModal();
  });

  function openModal() {
    modal.setAttribute("aria-hidden", "false");
    // set focus to close for keyboard users
    closeModal.focus();
  }
  function closeModalFn() {
    modal.setAttribute("aria-hidden", "true");
    // return focus to greet button
    greetBtn.focus();
  }
  closeModal.addEventListener("click", closeModalFn);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModalFn();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false")
      closeModalFn();
  });

  // Theme toggle persisted in localStorage
  const themeKey = "demo.theme";
  const currentTheme =
    localStorage.getItem(themeKey) ||
    (window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
  setTheme(currentTheme);

  themeBtn.addEventListener("click", () => {
    const next =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";
    setTheme(next);
  });

  function setTheme(t) {
    if (t === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem(themeKey, t);
  }

  // Small demonstration of a "fake" API call using setTimeout
  // (This code is only here to show how async fetches would integrate)
  function fakeFetchProfile() {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: "ok", data: { visitors: 123 } }), 700);
    });
  }
  fakeFetchProfile().then((res) => {
    // append info to notes (non-blocking)
    const notes = document.querySelector(".notes");
    if (res && res.data) {
      const p = document.createElement("p");
      p.className = "info";
      p.textContent = `Demo API: approx ${res.data.visitors} visitors (fake)`;
      notes.appendChild(p);
    }
  });
})();
