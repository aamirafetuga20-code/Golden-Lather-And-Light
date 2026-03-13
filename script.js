/* ==========================================
   Golden Lather & Light Co. — Static Site JS
   ========================================== */

// ========== DATA ==========
const products = [
  {
    id: 1, type: "product", category: "Natural Soap", name: "Signature Bar Soap",
    description: "Melt-and-pour glycerin base with custom scents and natural colorants. Gentle on all skin types.",
    price: "$8.00", emoji: "\u{1F9FC}", featured: false
  },
  {
    id: 2, type: "product", category: "Soy Candle", name: "Soy Wax Candle",
    description: "Clean-burning soy wax in custom fragrances. Sets the perfect mood for any space in your home.",
    price: "$12.00", emoji: "\u{1F56F}\uFE0F", featured: false
  },
  {
    id: 3, type: "product", category: "Premium Bar", name: "Specialty Soap Bar",
    description: "Elevated formulations with premium botanicals and unique scent blends. A treat for the senses.",
    price: "$10.00", emoji: "\u2728", featured: false
  }
];

const experiences = [
  { id: 4, name: "\u{1F9FC} Soap Making Party", description: "A guided 2-hour experience where guests craft their own custom soap bars to take home. Minimum 6 guests.", price: "$40 \u2013 $50 per person" },
  { id: 5, name: "\u{1F56F}\uFE0F Candle Making Party", description: "Pour, scent, and personalize your own soy candles in a fun, fragrant 2-hour session perfect for any occasion.", price: "$40 \u2013 $50 per person" },
  { id: 6, name: "\u{1F389} Custom Event Favors", description: "Weddings, bridal showers, corporate events \u2014 fully customized soaps and candles as memorable favors.", price: "Custom Pricing" }
];

const gifts = [
  { id: 7, name: "Sweet Start", emoji: "\u{1F338}", includes: "1 Signature Soap Bar\n+ 1 Small Soy Candle (4\u20136 oz)\n+ Gift Wrapping", price: "$22 \u2013 $25", featured: false },
  { id: 8, name: "Golden Set", emoji: "\u2728", includes: "2 Soap Bars\n+ 1 Medium Candle (8\u201310 oz)\n+ Curated Gift Box", price: "$35 \u2013 $40", featured: true },
  { id: 9, name: "Luxury Bundle", emoji: "\u{1F451}", includes: "3 Soap Bars\n+ 2 Soy Candles\n+ Extras & Premium Box", price: "$55 \u2013 $65", featured: false }
];

// ========== RENDER SECTIONS ==========
function renderProducts() {
  var grid = document.getElementById("products-grid");
  grid.innerHTML = products.map(function (p, i) {
    return '<div class="fade-in product-card" data-delay="' + (i * 0.1) + '">' +
      '<div class="product-image">' +
        '<span>' + p.emoji + '</span>' +
        '<div class="product-overlay">' +
          '<button onclick="showToast(\'Added to cart\', \'' + p.name + ' has been added.\')">Quick Add</button>' +
        '</div>' +
      '</div>' +
      '<div class="product-info">' +
        '<div class="product-category">' + p.category + '</div>' +
        '<h3 class="product-name">' + p.name + '</h3>' +
        '<p class="product-desc">' + p.description + '</p>' +
        '<div class="product-price">From ' + p.price + '</div>' +
      '</div>' +
    '</div>';
  }).join("");
}

function renderExperiences() {
  var container = document.getElementById("experience-cards");
  container.innerHTML = experiences.map(function (exp, i) {
    return '<div class="fade-in experience-card" data-delay="' + (i * 0.15) + '" data-direction="left">' +
      '<h3>' + exp.name + '</h3>' +
      '<p>' + exp.description + '</p>' +
      '<div class="price">' + exp.price + '</div>' +
    '</div>';
  }).join("");
}

function renderGifts() {
  var grid = document.getElementById("gifts-grid");
  grid.innerHTML = gifts.map(function (g, i) {
    var cls = g.featured ? "fade-in gift-card featured" : "fade-in gift-card";
    var badge = g.featured ? '<div class="gift-badge">Most Popular</div>' : "";
    return '<div class="' + cls + '" data-delay="' + (i * 0.1) + '">' +
      badge +
      '<div>' +
        '<div class="gift-emoji">' + g.emoji + '</div>' +
        '<h3 class="gift-name">' + g.name + '</h3>' +
        '<div class="gift-includes">' + g.includes + '</div>' +
      '</div>' +
      '<div style="width:100%">' +
        '<div class="gift-price">' + g.price + '</div>' +
        '<a href="#contact" class="gift-cta">Order Now</a>' +
      '</div>' +
    '</div>';
  }).join("");
}

// ========== TOAST ==========
function showToast(title, message) {
  var existing = document.querySelector(".toast");
  if (existing) existing.remove();

  var toast = document.createElement("div");
  toast.className = "toast";
  toast.style.cssText = "position:fixed;bottom:2rem;right:2rem;background:#fff;border:1px solid #eae3d5;padding:1rem 1.5rem;box-shadow:0 10px 30px rgba(0,0,0,0.12);z-index:100;max-width:320px;animation:slideUp .3s ease-out;font-family:'Jost',sans-serif;";
  toast.innerHTML = '<strong style="display:block;font-size:.875rem;margin-bottom:.25rem;">' + title + '</strong><span style="font-size:.8rem;color:#6b6862;">' + message + '</span>';
  document.body.appendChild(toast);

  setTimeout(function () {
    toast.style.opacity = "0";
    toast.style.transition = "opacity .3s";
    setTimeout(function () { toast.remove(); }, 300);
  }, 3000);
}

// ========== NAVBAR SCROLL ==========
function initNavbar() {
  var navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// ========== MOBILE MENU ==========
function initMobileMenu() {
  var toggle = document.getElementById("mobile-toggle");
  var menu = document.getElementById("mobile-menu");
  var iconMenu = toggle.querySelector(".icon-menu");
  var iconClose = toggle.querySelector(".icon-close");
  var open = false;

  toggle.addEventListener("click", function () {
    open = !open;
    if (open) {
      menu.style.display = "block";
      requestAnimationFrame(function () { menu.classList.add("open"); });
      iconMenu.style.display = "none";
      iconClose.style.display = "block";
    } else {
      menu.classList.remove("open");
      iconMenu.style.display = "block";
      iconClose.style.display = "none";
      setTimeout(function () { menu.style.display = "none"; }, 300);
    }
  });

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      open = false;
      menu.classList.remove("open");
      iconMenu.style.display = "block";
      iconClose.style.display = "none";
      setTimeout(function () { menu.style.display = "none"; }, 300);
    });
  });
}

// ========== FADE-IN ON SCROLL ==========
function initFadeIn() {
  var elements = document.querySelectorAll(".fade-in");
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var delay = parseFloat(entry.target.getAttribute("data-delay")) || 0;
        setTimeout(function () {
          entry.target.classList.add("visible");
        }, delay * 1000);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "-10% 0px" });

  elements.forEach(function (el) { observer.observe(el); });
}

// ========== NEWSLETTER FORM ==========
function initNewsletter() {
  var form = document.getElementById("newsletter-form");
  var input = document.getElementById("email-input");
  var errorEl = document.getElementById("form-error");
  var successEl = document.getElementById("form-success");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    errorEl.textContent = "";
    successEl.textContent = "";

    var email = input.value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errorEl.textContent = "Please enter a valid email address.";
      return;
    }

    var btn = form.querySelector("button");
    btn.textContent = "Joining...";
    btn.disabled = true;

    // Simulate a brief delay then show success (no backend on GitHub Pages)
    setTimeout(function () {
      successEl.textContent = "Welcome to the family! You\u2019ve successfully subscribed.";
      input.value = "";
      btn.textContent = "Subscribe";
      btn.disabled = false;
    }, 800);
  });
}

// ========== YEAR IN FOOTER ==========
function setYear() {
  var el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

// ========== TOAST SLIDE-UP ANIMATION ==========
var style = document.createElement("style");
style.textContent = "@keyframes slideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}";
document.head.appendChild(style);

// ========== INIT ==========
document.addEventListener("DOMContentLoaded", function () {
  renderProducts();
  renderExperiences();
  renderGifts();
  initNavbar();
  initMobileMenu();
  initFadeIn();
  initNewsletter();
  setYear();
});
