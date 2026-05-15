(function () {
  "use strict";

  const btn = document.getElementById("menu-btn");
  const nav = document.getElementById("main-nav");

  if (btn && nav) {
    btn.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
        btn.focus();
      }
    });
  }
  // Belief verse expand/collapse
  document.querySelectorAll(".belief-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var wrap = btn.previousElementSibling;
      var expanded = wrap.getAttribute("aria-expanded") === "true";
      wrap.setAttribute("aria-expanded", expanded ? "false" : "true");
      btn.setAttribute("aria-expanded", expanded ? "false" : "true");
      btn.textContent = expanded ? btn.dataset.more : btn.dataset.less;
    });
  });
})();
