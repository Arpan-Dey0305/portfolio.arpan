document.addEventListener("DOMContentLoaded", function () {
  const darkBtn = document.getElementById("dark");
  const icon = darkBtn.querySelector("i");
  const logo = document.getElementById("logo");

  darkBtn.addEventListener("click", () => {
    // Add rotate class to trigger animation
    icon.classList.add("rotate");

    // Remove the class after animation ends
    setTimeout(() => {
      icon.classList.remove("rotate");
    }, 500);

    // Toggle dark mode
    document.body.classList.toggle("dark-mode");
    document.querySelector("nav").classList.toggle("dark-mode");

    // Change icon
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");

    // Switch logo
    logo.src = document.body.classList.contains("dark-mode")
      ? "images/logo-white.png"
      : "images/logo.png";
  });

  // Typed.js init
  new Typed("#element", {
    strings: ["Web Developer", "Frontend Developer"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
  });
});
const hamburger = document.getElementById("hamburger");
const navItems = document.getElementById("nav-items");

hamburger.addEventListener("click", () => {
  navItems.classList.toggle("active");
});

const navbarWrapper = document.querySelector(".navbar-wrapper");
const homeSection = document.getElementById("home");

function updateNavbarVisibility() {
  const homeRect = homeSection.getBoundingClientRect();

  // On home: keep navbar always visible
  if (homeRect.top <= 0 && homeRect.bottom >= 80) {
    navbarWrapper.classList.add("always-visible");
  } else {
    navbarWrapper.classList.remove("always-visible");
  }
}

// Show navbar on hover (only when NOT on home)
navbarWrapper.addEventListener("mouseenter", () => {
  if (!navbarWrapper.classList.contains("always-visible")) {
    navbarWrapper.classList.add("revealed");
  }
});

// Hide navbar when cursor leaves the hover area
navbarWrapper.addEventListener("mouseleave", () => {
  if (!navbarWrapper.classList.contains("always-visible")) {
    navbarWrapper.classList.remove("revealed");
  }
});

// Also hide on scroll (if not on home)
window.addEventListener("scroll", () => {
  updateNavbarVisibility();

  if (!navbarWrapper.classList.contains("always-visible")) {
    navbarWrapper.classList.remove("revealed");
  }
});

window.addEventListener("load", updateNavbarVisibility);

/* =============== */

const modal = document.getElementById("projectModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");

openBtn.onclick = () => (modal.style.display = "block");
closeBtn.onclick = () => (modal.style.display = "none");

const modal2 = document.getElementById("projectModal2");
const openBtn2 = document.getElementById("openModalBtn2");
const closeBtn2 = document.getElementById("closeModalBtn2");

openBtn2.onclick = () => (modal2.style.display = "block");
closeBtn2.onclick = () => (modal2.style.display = "none");

// ✅ Combine both into one
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
  if (e.target === modal2) modal2.style.display = "none";
};
/* =============contact form================= */
const form = document.querySelector("form");

form.addEventListener("submit", async function (e) {
  e.preventDefault(); // Prevent the default form submission
  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: form.method,
    body: formData,
  });

  if (response.ok) {
    alert("Message sent successfully!");
    form.reset(); // Clear the form fields
  } else {
    alert("Something went wrong. Please try again.");
  }
});
/* =========================================================about animation======================================================= */
document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.getElementById("about");
  const animatedElements = [
    "#about-image",
    "#vertical-line",
    "#about-intro-name",
    "#about-intro-role",
    "#about-desc",
    "#age-details",
    "#address-details",
    "#contact-details",
    "#download-about",
  ].map((selector) => document.querySelector(selector));

  // Initially disable animations
  animatedElements.forEach((el) => {
    if (el) {
      el.style.animation = "none";
      el.style.opacity = "0"; // Keep hidden
    }
  });

  // Intersection Observer to trigger animations on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animatedElements.forEach((el) => {
            if (el) {
              el.style.animation = "none"; // Reset animation
              el.offsetHeight; // Force reflow
              el.style.animation = ""; // Re-apply original CSS animation
            }
          });
        } else {
          // When the section goes out of view, reset opacity for replay
          animatedElements.forEach((el) => {
            if (el) {
              el.style.animation = "none";
              el.style.opacity = "0";
            }
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(aboutSection);
});

/* ==========================================================home animation====================================================== */
document.addEventListener("DOMContentLoaded", function () {
  const homeSection = document.getElementById("home");
  const homeElements = [
    ".text-section",
    ".glow-wrapper",
    ".social-media span",
  ].map((selector) => document.querySelectorAll(selector));

  // Initially disable animations
  homeElements.forEach((nodeList) => {
    nodeList.forEach((el) => {
      el.style.animation = "none";
      el.style.opacity = "0"; // Hide initially
    });
  });

  // Observer to trigger animations
  const homeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          homeElements.forEach((nodeList) => {
            nodeList.forEach((el) => {
              el.style.animation = "none"; // Reset
              el.offsetHeight; // Force reflow
              el.style.animation = ""; // Apply original CSS animation
            });
          });
        } else {
          // Reset when leaving
          homeElements.forEach((nodeList) => {
            nodeList.forEach((el) => {
              el.style.animation = "none";
              el.style.opacity = "0";
            });
          });
        }
      });
    },
    { threshold: 0.1 }
  );

  homeObserver.observe(homeSection);
});
/* =======================Education animation=============================== */
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".section-heading, .edu-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger animation with staggered effect
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add("animate");
            }, index * 200);
          });
        } else {
          // Reset when leaving viewport
          elements.forEach((el) => {
            el.classList.remove("animate");
          });
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe the first heading (or the entire section if you have a wrapper)
  const educationSection = document.getElementById("education"); // Add ID to section
  observer.observe(educationSection);
});

/* ==========================================skill-animation========================================= */
document.addEventListener("DOMContentLoaded", function () {
  const skillSection = document.getElementById("skill"); // Correct ID
  const elements = document.querySelectorAll(".heading, #skill-para, .card");

  if (!skillSection) {
    console.error("Skill section not found!");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger animation with stagger
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add("animate");

              // Animate progress circles inside the card
              const progress = el.querySelector(".progress");
              if (progress) {
                const dasharray = 339.292;
                let percentage =
                  el.querySelector(".percentage")?.textContent || "0%";
                percentage = parseInt(percentage);
                const dashoffset = dasharray - (dasharray * percentage) / 100;
                progress.style.strokeDasharray = dasharray;
                progress.style.strokeDashoffset = dasharray;
                progress.style.setProperty("--dashoffset", dashoffset);
                progress.style.animation =
                  "progressAnimation 1.2s ease forwards";
              }
            }, index * 150);
          });
        } else {
          // Reset animations when leaving viewport
          elements.forEach((el) => {
            el.classList.remove("animate");
            const progress = el.querySelector(".progress");
            if (progress) {
              progress.style.animation = "none";
              progress.style.strokeDashoffset = "339.292";
            }
          });
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(skillSection);
});
/* =========================project animation============================== */
document.addEventListener("DOMContentLoaded", function () {
  const projectSection = document.getElementById("project"); // Ensure your section has this ID
  const projects = document.querySelectorAll(".heading, .main-project-item");
  const buttons = document.querySelectorAll("#proj-btn .btn");

  if (!projectSection) {
    console.error("Project section not found!");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate project items
          projects.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add("animate");
            }, index * 200); // Stagger effect
          });

          // Animate buttons
          buttons.forEach((btn, index) => {
            setTimeout(() => {
              btn.classList.add("animate-btn");
            }, index * 300);
          });
        } else {
          // Reset animations when leaving viewport
          projects.forEach((el) => el.classList.remove("animate"));
          buttons.forEach((btn) => btn.classList.remove("animate-btn"));
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(projectSection);
});
/* ============================contact-me animation======================== */
document.addEventListener("DOMContentLoaded", function () {
  const contactSection = document.getElementById("contact-me"); // Ensure section ID exists
  const heading = document.querySelector("#contact-me .heading");
  const personal = document.querySelector("#personal-details");
  const form = document.querySelector("#contact-field");

  if (!contactSection) {
    console.error("Contact section not found!");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate heading
          heading.classList.add("animate-heading");
          // Animate personal details
          personal.classList.add("animate-left");
          // Animate form
          form.classList.add("animate-right");
        } else {
          // Reset animations
          heading.classList.remove("animate-heading");
          personal.classList.remove("animate-left");
          form.classList.remove("animate-right");
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(contactSection);
});
