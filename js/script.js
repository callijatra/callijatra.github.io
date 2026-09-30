(function () {
  const isPagesDir = window.location.pathname.includes("/pages/");
  const basePath = isPagesDir ? "../" : "";

  function renderNavbar() {
    const placeholder = document.getElementById("navbar");
    if (placeholder && !placeholder.innerHTML.trim()) {
      placeholder.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
  <div class="container">
    <a class="navbar-brand d-flex align-items-center" href="${basePath}index.html">
      <img src="${basePath}images/logos/callijatra_logo.svg" alt="Logo" class="me-3" height="60px" />
    </a>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mainNav"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="mainNav">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link" href="${basePath}index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="${basePath}index.html#resources">Resources</a></li>
        <li class="nav-item"><a class="nav-link" href="${basePath}index.html#gallery">Gallery</a></li>
        <li class="nav-item"><a class="nav-link" href="${basePath}pages/about.html">About Us</a></li>
        <li class="nav-item"><a class="nav-link" href="https://www.instagram.com/callijatra">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
`;
    }
  }

  function renderFooter() {
    const placeholder = document.getElementById("footer");
    if (placeholder && !placeholder.innerHTML.trim()) {
      placeholder.innerHTML = `
<footer class="bg-dark text-light py-4">
  <div class="container">
    <div class="row">
      <div class="col-md-6 mb-3 mb-md-0">
        <h6 class="fw-bold">Callijatra Foundation</h6>
        <p class="small mb-0">
          Promoting indigenous scripts through technology, education, and design.
        </p>
      </div>

      <div class="col-md-6 text-md-end">
        <ul class="list-inline mb-2">
          <li class="list-inline-item">
            <a href="${basePath}index.html" class="text-light text-decoration-none">Home</a>
          </li>
          <li class="list-inline-item">
            <a href="${basePath}index.html#resources" class="text-light text-decoration-none">Resources</a>
          </li>
          <li class="list-inline-item">
            <a href="${basePath}index.html#gallery" class="text-light text-decoration-none">Gallery</a>
          </li>
          <li class="list-inline-item">
            <a href="${basePath}pages/about.html" class="text-light text-decoration-none">About Us</a>
          </li>
        </ul>
        <p class="small mb-0">
          © 2026 Callijatra Foundation. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>
`;
    }
  }

  function init() {
    renderNavbar();
    renderFooter();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
