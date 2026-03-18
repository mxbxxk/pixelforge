/* nav.js — injects nav and footer into every page */

// Robust root detection — works with file://, http://, subfolders, HMD browsers
(function() {
  const path = window.location.pathname;
  // If we're inside /pages/ or /documents/, we need ../
  const inSubfolder = path.includes('/pages/') || path.includes('/documents/');
  const root = inSubfolder ? '../' : '';

  const navHTML = `
<div class="notice-bar" id="notice-bar">
  🇬🇧 UK-Based · Fast 48–72hr Turnaround · No Hidden Fees
</div>
<nav class="nav" id="nav">
  <div class="nav-inner">
    <a href="${root}index.html" class="nav-logo">
      <img
        src="${root}images/logo.png"
        alt="PixelForge Digital"
        class="nav-logo-img"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
      />
      <span class="nav-logo-fallback" style="display:none;align-items:center;gap:0.5rem;font-family:'Syne',sans-serif;font-size:1.2rem;font-weight:800;color:#F5F8FA;">
        <span style="background:#3EE8B5;color:#080B0F;width:30px;height:30px;border-radius:6px;display:inline-flex;align-items:center;justify-content:center;font-size:0.9rem;">⚡</span>
        Pixel<span style="color:#3EE8B5;">Forge</span>
      </span>
    </a>
    <ul class="nav-links" id="nav-links">
      <li><a href="${root}pages/services.html">Services</a></li>
      <li><a href="${root}pages/portfolio.html">Portfolio</a></li>
      <li><a href="${root}pages/pricing.html">Pricing</a></li>
      <li><a href="${root}pages/about.html">About</a></li>
      <li><a href="${root}pages/contact.html">Contact</a></li>
      <li><a href="${root}pages/quote.html" class="nav-cta">Free Quote</a></li>
    </ul>
    <div class="nav-toggle" id="nav-toggle">
      <span></span><span></span><span></span>
    </div>
  </div>
</nav>`;

  const footerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="${root}index.html" style="display:inline-block;margin-bottom:1rem;">
          <img
            src="${root}images/logo.png"
            alt="PixelForge Digital"
            style="height:52px;width:auto;display:block;"
            onerror="this.outerHTML='<span style=\\'font-family:Syne,sans-serif;font-size:1.4rem;font-weight:800;color:#F5F8FA;\\'>Pixel<span style=\\'color:#3EE8B5;\\'>Forge</span> Digital</span>'"
          />
        </a>
        <p>Bespoke websites for UK businesses — built by Macauly Parsons, founder of PixelForge Digital. Fast, honest, and fairly priced.</p>
        <div class="footer-badges" style="margin-top:1.25rem;">
          <span class="badge">🇬🇧 UK Registered</span>
          <span class="badge">🔒 UK GDPR Compliant</span>
          <span class="badge">📋 Contract Protected</span>
        </div>
      </div>
      <div class="footer-col">
        <h5>Services</h5>
        <ul>
          <li><a href="${root}pages/services.html#brochure">Business Sites</a></li>
          <li><a href="${root}pages/services.html#ecommerce">E-Commerce</a></li>
          <li><a href="${root}pages/services.html#landing">Landing Pages</a></li>
          <li><a href="${root}pages/services.html#healthcare">Healthcare</a></li>
          <li><a href="${root}pages/services.html#trades">Trades Sites</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Company</h5>
        <ul>
          <li><a href="${root}pages/about.html">About</a></li>
          <li><a href="${root}pages/portfolio.html">Portfolio</a></li>
          <li><a href="${root}pages/pricing.html">Pricing</a></li>
          <li><a href="${root}pages/faq.html">FAQ</a></li>
          <li><a href="${root}documents/privacy-policy.html">Privacy Policy</a></li>
          <li><a href="${root}documents/terms.html">Terms</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Contact</h5>
        <ul>
          <li><a href="tel:+447387637711">+44 7387 637711</a></li>
          <li><a href="mailto:macaulyjparsons@gmail.com">macaulyjparsons@gmail.com</a></li>
          <li><a href="${root}pages/quote.html">Get a Free Quote</a></li>
          <li><a href="${root}pages/contact.html">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 PixelForge Digital. All rights reserved. Registered in England & Wales.</p>
      <p>UK GDPR Compliant · Professional Indemnity Covered · Contract Protected</p>
    </div>
  </div>
</footer>`;

  // Inject
  const noticeEl = document.getElementById('nav-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  if (noticeEl) noticeEl.innerHTML = navHTML;
  if (footerEl) footerEl.innerHTML = footerHTML;
})();
