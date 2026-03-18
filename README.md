# PixelForge Digital — Website Setup Guide

## 🚀 What's Included

This is your complete redesigned website. Here's every file:

```
pixelforge/
├── index.html                  ← Homepage
├── 404.html                    ← Error page
├── sitemap.xml                 ← Google sitemap
├── robots.txt                  ← Search engine instructions
├── css/
│   └── style.css               ← All styles (design system)
├── js/
│   ├── nav.js                  ← Navigation & footer injection
│   └── main.js                 ← All interactivity
├── pages/
│   ├── services.html           ← Services page
│   ├── portfolio.html          ← Portfolio page
│   ├── pricing.html            ← Pricing page
│   ├── about.html              ← About page
│   ├── contact.html            ← Contact page
│   ├── quote.html              ← Free quote form
│   └── faq.html                ← FAQ page
└── documents/
    ├── privacy-policy.html     ← Privacy policy (GDPR)
    └── terms.html              ← Terms & conditions
```

---

## ✅ Things You MUST Change Before Going Live

### 1. FORMSPREE — Contact & Quote Forms

**Where:** `index.html`, `pages/contact.html`, `pages/quote.html`

**What to change:**
```html
action="https://formspree.io/f/YOUR_FORMSPREE_ID"
```
Replace `YOUR_FORMSPREE_ID` with your actual Formspree form ID.

**How to get it:**
1. Go to https://formspree.io
2. Create a free account
3. Create a new form
4. Copy the form ID (looks like: `xabc1234`)
5. Replace `YOUR_FORMSPREE_ID` in ALL THREE form pages
6. Set the notification email to your email in Formspree settings

---

### 2. Email Address

Search and replace all instances of:
```
macaulyjparsons@gmail.com
```
...with your actual email address.

Currently appears in: `index.html`, `pages/contact.html`, `js/nav.js`, `documents/privacy-policy.html`, `documents/terms.html`

**Note:** `macaulyjparsons@gmail.com` from the original site has been replaced with `macaulyjparsons@gmail.com` — you can use either or set up a professional email via your domain host.

---

### 3. Phone Number

The phone number `+44 7387 637711` appears throughout the site. If this is still correct, leave it. If not, search and replace it across all files.

---

### 4. Domain / URL References

In `sitemap.xml` and `<link rel="canonical">` tags across all pages, replace:
```
https://pixelforgedigital.co.uk
```
...with your actual domain if it changes.

---

### 5. Google Analytics (Optional but Recommended)

Add your GA4 tracking code to the `<head>` of every page. Replace `G-XXXXXXXXXX` with your measurement ID:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**How to get it:** https://analytics.google.com → Create property → Get Measurement ID

---

### 6. Google Search Console (For SEO)

1. Go to https://search.google.com/search-console
2. Add your domain
3. Verify ownership (HTML meta tag method — add to `<head>`)
4. Submit your sitemap: `https://pixelforgedigital.co.uk/sitemap.xml`

---

## 📣 Recommended: Submit Your Sitemap

Once live, submit your sitemap to Google:
- Search Console → Sitemaps → Enter `sitemap.xml`

This tells Google all your pages exist and speeds up indexing.

---

## 🔍 SEO — What's Already Done For You

✅ Unique, keyword-rich title tags on every page  
✅ Meta descriptions on every page  
✅ Canonical URLs on every page  
✅ Open Graph / social meta tags on homepage  
✅ Schema.org LocalBusiness structured data (index.html)  
✅ FAQ schema markup (faq.html)  
✅ sitemap.xml with all pages  
✅ robots.txt allowing all crawlers  
✅ Semantic HTML headings (H1 > H2 > H3)  
✅ Alt tags ready for images  
✅ Mobile responsive (Google mobile-first indexing)  
✅ Fast, clean code (good Core Web Vitals)  

**Keywords targeted:**
- PixelForge Digital
- PixelForge
- pixelforge digital
- web design UK
- bespoke website design
- website development UK
- affordable websites UK
- web agency UK

---

## 🖼️ Adding Real Images

The site currently uses emoji placeholders in the portfolio section. To add real project screenshots:
1. Add images to an `images/` folder
2. Replace the `<div class="portfolio-thumb">` emoji divs with `<img>` tags

---

## 🌐 Hosting

**Recommended UK hosts:**
- **Cloudflare Pages** (free, very fast) — cloudflare.com/pages
- **Netlify** (free tier, easy drag-and-drop) — netlify.com
- **SiteGround** (paid, UK data centre) — siteground.co.uk
- **Krystal** (UK-based, eco hosting) — krystal.uk

For drag-and-drop deployment: zip this entire folder and upload to Netlify Drop (app.netlify.com/drop).

---

## 💬 WhatsApp Click-to-Chat

To add WhatsApp chat, add this link anywhere:
```html
<a href="https://wa.me/447387637711?text=Hi%2C%20I%27m%20interested%20in%20a%20website">
  WhatsApp Us
</a>
```

---

## ✏️ Updating Content

The nav and footer are injected via `js/nav.js`. To update nav links or footer content, edit that file only — changes apply to all pages.

Page-specific content is in each individual HTML file and is easy to edit in any text editor (VS Code recommended).

---

## 📋 Checklist Before Going Live

- [ ] Replace all `YOUR_FORMSPREE_ID` with real Formspree ID
- [ ] Update email address across all files
- [ ] Confirm phone number is correct
- [ ] Add Google Analytics code to all pages
- [ ] Submit site to Google Search Console
- [ ] Submit sitemap.xml in Search Console
- [ ] Test all forms submit correctly
- [ ] Test on mobile
- [ ] Update Privacy Policy with your registered address if needed

---

Built by PixelForge Digital for PixelForge Digital. 😄
