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
  // Lightbox
  var lightbox = document.getElementById("lightbox");
  if (lightbox) {
    var lightboxImg = lightbox.querySelector(".lightbox-img");
    var lightboxClose = lightbox.querySelector(".lightbox-close");

    function openLightbox(src, alt) {
      lightboxImg.src = src;
      lightboxImg.alt = alt || "";
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
      lightboxClose.focus();
    }

    function closeLightbox() {
      lightbox.hidden = true;
      lightboxImg.src = "";
      document.body.style.overflow = "";
    }

    document.querySelectorAll(".gallery-lightbox").forEach(function (item) {
      function activate() {
        var src = item.dataset.src;
        var alt = item.querySelector("img") ? item.querySelector("img").alt : "";
        if (src) openLightbox(src, alt);
      }
      item.addEventListener("click", activate);
      item.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(); }
      });
    });

    lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
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
