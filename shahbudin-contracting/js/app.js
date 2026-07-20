/* ============================================================
   Shahbudin Contracting — interactions
   Custom cursor · inertial smooth scroll · reveals · counters
   parallax · tilt · magnetic buttons · filters · nav · form
   No dependencies.
   ============================================================ */
(() => {
  "use strict";

  document.documentElement.classList.remove("no-js");

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

  /* ---------- Preloader ---------- */
  const preloader = document.querySelector(".preloader");
  const countEl = document.querySelector(".preloader-count");
  {
    const start = performance.now();
    const DURATION = 900;
    const tick = (now) => {
      const p = clamp((now - start) / DURATION, 0, 1);
      if (countEl) countEl.textContent = Math.round(p * 100);
      if (p < 1) {
        requestAnimationFrame(tick);
      } else {
        preloader.classList.add("is-done");
        document.body.classList.add("is-loaded");
        setTimeout(() => preloader.remove(), 1000);
      }
    };
    if (reducedMotion) {
      preloader.remove();
      document.body.classList.add("is-loaded");
    } else {
      requestAnimationFrame(tick);
    }
  }

  /* ---------- Custom cursor ---------- */
  if (finePointer && !reducedMotion) {
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    const label = ring.querySelector(".cursor-label");
    const pos = { x: innerWidth / 2, y: innerHeight / 2 };
    const ringPos = { x: pos.x, y: pos.y };
    let raf = null;

    const render = () => {
      ringPos.x = lerp(ringPos.x, pos.x, 0.16);
      ringPos.y = lerp(ringPos.y, pos.y, 0.16);
      dot.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;
      raf = requestAnimationFrame(render);
    };

    addEventListener("pointermove", (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (!raf) {
        document.body.classList.add("has-custom-cursor");
        ringPos.x = pos.x;
        ringPos.y = pos.y;
        raf = requestAnimationFrame(render);
      }
    }, { passive: true });

    addEventListener("pointerdown", () => ring.classList.add("is-down"));
    addEventListener("pointerup", () => ring.classList.remove("is-down"));

    // Grow on interactive elements; show a label on [data-cursor] targets
    document.addEventListener("pointerover", (e) => {
      const labelled = e.target.closest("[data-cursor]");
      const interactive = e.target.closest("a, button, input, textarea, .filter-btn");
      if (labelled) {
        label.textContent = labelled.dataset.cursor;
        ring.classList.add("has-label");
      } else {
        ring.classList.remove("has-label");
      }
      ring.classList.toggle("is-hover", !!interactive && !labelled);
    });

    document.addEventListener("mouseleave", () => document.body.classList.remove("has-custom-cursor"));
    document.addEventListener("mouseenter", () => document.body.classList.add("has-custom-cursor"));
  }

  /* ---------- Inertial smooth scroll (desktop wheel only) ---------- */
  const smooth = { target: scrollY, current: scrollY, active: false };
  if (finePointer && !reducedMotion) {
    document.documentElement.style.scrollBehavior = "auto";
    const maxScroll = () => document.documentElement.scrollHeight - innerHeight;

    const animate = () => {
      smooth.current = lerp(smooth.current, smooth.target, 0.095);
      if (Math.abs(smooth.target - smooth.current) < 0.5) {
        smooth.current = smooth.target;
        smooth.active = false;
      }
      scrollTo(0, smooth.current);
      if (smooth.active) requestAnimationFrame(animate);
    };

    const kick = () => {
      if (!smooth.active) {
        smooth.active = true;
        requestAnimationFrame(animate);
      }
    };

    addEventListener("wheel", (e) => {
      if (e.ctrlKey) return; // don't hijack pinch-zoom
      e.preventDefault();
      if (!smooth.active) smooth.current = scrollY;
      smooth.target = clamp(smooth.target + e.deltaY, 0, maxScroll());
      kick();
    }, { passive: false });

    // Keep in sync when scrolling via keyboard / scrollbar / anchors
    addEventListener("scroll", () => {
      if (!smooth.active) smooth.target = smooth.current = scrollY;
    }, { passive: true });

    // Smooth-animate in-page anchor links through the same engine
    document.addEventListener("click", (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      smooth.current = scrollY;
      smooth.target = clamp(target.getBoundingClientRect().top + scrollY - 70, 0, maxScroll());
      kick();
      history.pushState(null, "", link.getAttribute("href"));
    });
  }

  /* ---------- Header: solid after hero, hide on scroll down ---------- */
  const header = document.querySelector("[data-header]");
  let lastY = scrollY;
  addEventListener("scroll", () => {
    const y = scrollY;
    header.classList.toggle("is-solid", y > 40);
    header.classList.toggle("is-hidden", y > 500 && y > lastY);
    lastY = y;
  }, { passive: true });

  /* ---------- Mobile nav ---------- */
  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector(".menu-toggle");
  nav.querySelectorAll(".nav-link").forEach((a, n) => a.style.setProperty("--n", n));
  const closeNav = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  });
  nav.addEventListener("click", (e) => e.target.closest("a") && closeNav());
  addEventListener("keydown", (e) => e.key === "Escape" && closeNav());

  /* ---------- Active nav link ---------- */
  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
  const setActive = (id) => navLinks.forEach((a) =>
    a.classList.toggle("is-active", a.getAttribute("href") === `#${id}` && !a.matches(".nav-cta, .nav-whatsapp")));
  const sectionSpy = new IntersectionObserver((entries) => {
    entries.forEach((en) => en.isIntersecting && setActive(en.target.id));
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach((s) => sectionSpy.observe(s));

  /* ---------- Reveal on scroll ---------- */
  const revealables = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !reducedMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("is-visible");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    revealables.forEach((el) => io.observe(el));
  } else {
    revealables.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll("[data-count]");
  const easeOut = (t) => 1 - Math.pow(1 - t, 4);
  const runCounter = (el) => {
    const end = +el.dataset.count;
    const start = performance.now();
    const DURATION = 1800;
    const step = (now) => {
      const p = clamp((now - start) / DURATION, 0, 1);
      el.textContent = Math.round(easeOut(p) * end);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window && !reducedMotion) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          runCounter(en.target);
          cio.unobserve(en.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach((el) => cio.observe(el));
  } else {
    counters.forEach((el) => (el.textContent = el.dataset.count));
  }

  /* ---------- Parallax ---------- */
  const parallaxEls = [...document.querySelectorAll("[data-parallax]")];
  if (parallaxEls.length && !reducedMotion) {
    let ticking = false;
    const apply = () => {
      parallaxEls.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax);
        const rect = el.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > innerHeight) return;
        const offset = (rect.top + rect.height / 2 - innerHeight / 2) * speed;
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      });
      ticking = false;
    };
    addEventListener("scroll", () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(apply);
      }
    }, { passive: true });
    apply();
  }

  /* ---------- 3D tilt on cards ---------- */
  if (finePointer && !reducedMotion) {
    document.querySelectorAll("[data-tilt]").forEach((card) => {
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        const rx = ((e.clientY - r.top) / r.height - 0.5) * -7;
        const ry = ((e.clientX - r.left) / r.width - 0.5) * 7;
        card.style.transform = `perspective(800px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-6px)`;
      });
      card.addEventListener("pointerleave", () => {
        card.style.transform = "";
      });
    });
  }

  /* ---------- Magnetic buttons ---------- */
  if (finePointer && !reducedMotion) {
    document.querySelectorAll("[data-magnetic]").forEach((el) => {
      const strength = 0.3;
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * strength;
        const y = (e.clientY - r.top - r.height / 2) * strength;
        el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
      });
      el.addEventListener("pointerleave", () => {
        el.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
        el.style.transform = "";
        setTimeout(() => (el.style.transition = ""), 500);
      });
    });
  }

  /* ---------- Project filters ---------- */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.toggle("is-active", b === btn));
      const f = btn.dataset.filter;
      projectCards.forEach((card) => {
        card.classList.toggle("is-filtered", f !== "all" && card.dataset.category !== f);
      });
    });
  });

  /* ---------- Contact form → WhatsApp ---------- */
  const form = document.querySelector(".contact-form");
  const WHATSAPP_NUMBER = "97300000000"; // TODO: replace with the real number
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll("[required]").forEach((field) => {
      const ok = field.value.trim().length > 1;
      field.classList.toggle("is-invalid", !ok);
      if (!ok) valid = false;
    });
    if (!valid) return;
    const data = new FormData(form);
    const text = [
      "New project inquiry — Shahbudin Contracting website",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      data.get("email") ? `Email: ${data.get("email")}` : "",
      `Details: ${data.get("message")}`,
    ].filter(Boolean).join("\n");
    open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  });

  /* ---------- Footer year ---------- */
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
