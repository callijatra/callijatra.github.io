// Load navbar.js
(function() {
    const isPagesDir = window.location.pathname.includes("/pages/");
    const basePath = isPagesDir ? "../" : "";
    
    const script = document.createElement('script');
    script.src = basePath + 'js/navbar.js';
    document.head.appendChild(script);
})();

// Footer
document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
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
            <a href="#" class="text-light text-decoration-none">Home</a>
          </li>
          <li class="list-inline-item">
            <a href="#" class="text-light text-decoration-none">Resources</a>
          </li>
          <li class="list-inline-item">
            <a href="#" class="text-light text-decoration-none">Gallery</a>
          </li>
        </ul>
        <p class="small mb-0">
          © 2026 Calllijatra Foundation. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>
`;

    const placeholder = document.getElementById("footer");
    if (placeholder) {
        placeholder.innerHTML = footerHTML;
    }
});
