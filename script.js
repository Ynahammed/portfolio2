/* =========================================================
   Yadiki Naveed Ahammed — Portfolio interactions
   ========================================================= */
(function () {
  "use strict";

  /* ---------- year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- sticky nav ---------- */
  var nav = document.getElementById("nav");
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- mobile menu ---------- */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      toggle.classList.toggle("open");
      links.classList.toggle("open");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        toggle.classList.remove("open");
        links.classList.remove("open");
      });
    });
  }

  /* ---------- scroll reveal ---------- */
  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll("[data-reveal]").forEach(function (el, i) {
    el.style.transitionDelay = Math.min(i % 4, 3) * 60 + "ms";
    revealObserver.observe(el);
  });

  /* ---------- skill bars ---------- */
  var barObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          barObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  document.querySelectorAll(".bar").forEach(function (b) { barObserver.observe(b); });

  /* ---------- animated counters ---------- */
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    var duration = 1400;
    var start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(step);
  }
  var countObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  document.querySelectorAll("[data-count]").forEach(function (el) { countObserver.observe(el); });

  /* ---------- typewriter roles ---------- */
  var typeEl = document.getElementById("typewriter");
  var roles = [
    "Software Engineer",
    "AI / ML Developer",
    "Salesforce Developer",
    "Full-Stack Builder",
    "Critical Game Analyst"
  ];
  if (typeEl) {
    var rIndex = 0, cIndex = 0, deleting = false;
    function type() {
      var current = roles[rIndex];
      if (!deleting) {
        cIndex++;
        typeEl.textContent = current.slice(0, cIndex);
        if (cIndex === current.length) {
          deleting = true;
          return setTimeout(type, 1500);
        }
        return setTimeout(type, 62);
      }
      cIndex--;
      typeEl.textContent = current.slice(0, cIndex);
      if (cIndex === 0) {
        deleting = false;
        rIndex = (rIndex + 1) % roles.length;
        return setTimeout(type, 320);
      }
      setTimeout(type, 28);
    }
    type();
  }

  /* ---------- profile links ---------- */
  var profiles = {
    github: "https://github.com/Ynahammed"
  };
  document.querySelectorAll("[data-link]").forEach(function (el) {
    var key = el.getAttribute("data-link");
    var url = profiles[key];
    if (url) {
      el.setAttribute("href", url);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    } else {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        el.textContent = "↳ add your " + key + " URL in script.js";
        el.style.color = "#fbbf24";
      });
    }
  });
})();
