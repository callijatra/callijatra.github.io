document.addEventListener("DOMContentLoaded", function() {
    // Determine base path based on current location
    const isPagesDir = window.location.pathname.includes("/pages/");
    const basePath = isPagesDir ? "../" : "";

    const navbarHTML = `
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
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="mainNav">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link" href="${basePath}index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="${basePath}index.html#resources">Resources</a></li>
        <li class="nav-item"><a class="nav-link" href="${basePath}index.html#gallery">Gallery</a></li>
        <li class="nav-item"><a class="nav-link" href="${basePath}pages/about.html">About Us</a></li>
        <li class="nav-item"><a class="nav-link" href="https://www.facebook.com/ranjana-script">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
`;

    const placeholder = document.getElementById("navbar");
    if (placeholder) {
        placeholder.innerHTML = navbarHTML;
    }
});
