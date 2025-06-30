// Accessibility and Navigation Enhancement
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu functionality
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mobileMenu = document.querySelector("#mobile-menu");

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", function () {
      const isExpanded = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", !isExpanded);
      mobileMenu.classList.toggle("show");
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    if (mobileMenu && mobileMenu.classList.contains("show")) {
      if (
        !mobileMenu.contains(e.target) &&
        !mobileMenuToggle.contains(e.target)
      ) {
        mobileMenu.classList.remove("show");
        mobileMenuToggle.setAttribute("aria-expanded", "false");
      }
    }
  });

  // Keyboard navigation for mobile menu
  if (mobileMenu) {
    const menuItems = mobileMenu.querySelectorAll("a");
    menuItems.forEach((item, index) => {
      item.addEventListener("keydown", function (e) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          const nextItem = menuItems[index + 1] || menuItems[0];
          nextItem.focus();
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          const prevItem =
            menuItems[index - 1] || menuItems[menuItems.length - 1];
          prevItem.focus();
        } else if (e.key === "Escape") {
          mobileMenu.classList.remove("show");
          mobileMenuToggle.setAttribute("aria-expanded", "false");
          mobileMenuToggle.focus();
        }
      });
    });
  }

  // Portfolio filter functionality
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio .box");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.textContent.toLowerCase();

      // Update ARIA states
      filterButtons.forEach((btn) => {
        btn.setAttribute("aria-selected", "false");
        btn.classList.remove("active");
      });
      this.setAttribute("aria-selected", "true");
      this.classList.add("active");

      // Filter portfolio items
      portfolioItems.forEach((item) => {
        if (
          filter === "all" ||
          item.querySelector("p").textContent.toLowerCase().includes(filter)
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Carousel functionality
  const carouselButtons = document.querySelectorAll(".carousel-btn");
  const carouselBullets = document.querySelectorAll(".landing .bullets li");
  let currentSlide = 1;

  carouselButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.classList.contains("prev")) {
        currentSlide =
          currentSlide > 0 ? currentSlide - 1 : carouselBullets.length - 1;
      } else {
        currentSlide =
          currentSlide < carouselBullets.length - 1 ? currentSlide + 1 : 0;
      }
      updateCarousel();
    });
  });

  carouselBullets.forEach((bullet, index) => {
    bullet.addEventListener("click", function () {
      currentSlide = index;
      updateCarousel();
    });

    bullet.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        currentSlide = index;
        updateCarousel();
      }
    });
  });

  function updateCarousel() {
    carouselBullets.forEach((bullet, index) => {
      bullet.setAttribute("aria-selected", index === currentSlide);
      bullet.classList.toggle("active", index === currentSlide);
    });
  }

  // Initialize carousel
  updateCarousel();
});

// Scroll-based navbar functionality
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const body = document.body;

  if (window.scrollY > 150) {
    navbar.classList.add("scrolled");
    body.classList.add("navbar-scrolled");
    console.log("Navbar scrolled - spacing applied");
  } else {
    navbar.classList.remove("scrolled");
    body.classList.remove("navbar-scrolled");
    console.log("Navbar normal - spacing removed");
  }

  // Update active navigation based on scroll position
  updateActiveNavigation();
});

// Function to update active navigation
function updateActiveNavigation() {
  const sections = document.querySelectorAll("section[id], div[id]");
  const navLinks = document.querySelectorAll(
    "header nav ul a, header nav .scond-menu ul a"
  );

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  // Remove active class from all nav links
  navLinks.forEach((link) => {
    link.classList.remove("active");
    link.removeAttribute("aria-current");
  });

  // Add active class to current section's nav link
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  // Special handling for landing section (when at top)
  if (window.scrollY < 200) {
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === "#landing") {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });
  }
}

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(
    "header nav ul a, header nav .scond-menu ul a"
  );

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 100; // Offset for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });

        // Close mobile menu after navigation
        const mobileMenu = document.querySelector("#mobile-menu");
        if (mobileMenu && mobileMenu.classList.contains("show")) {
          mobileMenu.classList.remove("show");
          const mobileMenuToggle = document.querySelector(
            ".mobile-menu-toggle"
          );
          if (mobileMenuToggle) {
            mobileMenuToggle.setAttribute("aria-expanded", "false");
          }
        }
      }
    });
  });

  // Initialize active navigation on page load
  updateActiveNavigation();
});

// Keyboard navigation for the entire page
document.addEventListener("keydown", function (e) {
  // Skip to main content with Alt + M
  if (e.altKey && e.key === "m") {
    e.preventDefault();
    const mainContent = document.querySelector("#main-content");
    if (mainContent) {
      mainContent.focus();
    }
  }

  // Navigate sections with Alt + Arrow keys
  if (e.altKey && (e.key === "ArrowUp" || e.key === "ArrowDown")) {
    e.preventDefault();
    const sections = Array.from(document.querySelectorAll("section[id]"));
    const currentSection = sections.find((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= 100 && rect.bottom >= 100;
    });

    if (currentSection) {
      const currentIndex = sections.indexOf(currentSection);
      let nextIndex;

      if (e.key === "ArrowDown") {
        nextIndex = currentIndex + 1 < sections.length ? currentIndex + 1 : 0;
      } else {
        nextIndex =
          currentIndex - 1 >= 0 ? currentIndex - 1 : sections.length - 1;
      }

      const nextSection = sections[nextIndex];
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
});

// Focus management for better accessibility
document.addEventListener("focusin", function (e) {
  // Add focus indicator for keyboard users
  if (e.target.matches("button, a, input, select, textarea")) {
    e.target.classList.add("keyboard-focus");
  }
});

document.addEventListener("focusout", function (e) {
  // Remove focus indicator
  if (e.target.matches("button, a, input, select, textarea")) {
    e.target.classList.remove("keyboard-focus");
  }
});

// Navbar click event (for debugging)
const navbar = document.getElementById("navbar");
navbar.addEventListener("click", function () {
  console.log("Navbar clicked");
});

// Progress bar animation functionality
let progressBarsAnimated = false; // Flag to ensure animation only runs once

function animateProgressBars() {
  if (progressBarsAnimated) {
    console.log("Animation already completed, skipping...");
    return; // Prevent multiple animations
  }

  const progressBars = document.querySelectorAll(".our-skills .prog span");
  console.log("Found progress bars:", progressBars.length);

  if (progressBars.length === 0) {
    console.log("No progress bars found");
    return;
  }

  progressBarsAnimated = true; // Mark as animated
  console.log("Starting progress bar animation...");

  progressBars.forEach((bar, index) => {
    const progress = bar.getAttribute("data-progress");
    console.log(`Bar ${index + 1}: ${progress}`);

    // Ensure we start at 0%
    bar.style.width = "0%";

    // Animate to target percentage with staggered delay
    setTimeout(() => {
      console.log(`Animating bar ${index + 1} to ${progress}`);
      bar.style.width = progress;
    }, index * 300); // Stagger each bar by 300ms
  });
}

// Intersection Observer to trigger animation when skills section is visible
function setupProgressBarAnimation() {
  const skillsSection = document.querySelector(".our-skills");
  console.log("Setting up progress bar animation for section:", skillsSection);

  if (skillsSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("Intersection observed:", entry.isIntersecting);
          if (entry.isIntersecting && !progressBarsAnimated) {
            console.log(
              "Skills section visible - starting progress bar animation"
            );
            animateProgressBars();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of section is visible
        rootMargin: "0px 0px -100px 0px",
      }
    );

    observer.observe(skillsSection);
    console.log("Observer set up successfully");
  } else {
    console.log("Skills section not found");
  }
}

// Initialize progress bar animation when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded - setting up progress bar animation");
  setupProgressBarAnimation();
});

// Reset animation flag when page is refreshed
window.addEventListener("beforeunload", function () {
  progressBarsAnimated = false;
});

// Back to top button functionality
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("back-to-top");

  if (backToTopButton) {
    // Show/hide button based on scroll position
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        backToTopButton.classList.add("show");
      } else {
        backToTopButton.classList.remove("show");
      }
    });

    // Smooth scroll to top when button is clicked
    backToTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    // Keyboard accessibility
    backToTopButton.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.click();
      }
    });
  }
});
