# ✅ Website Deployment Checklist

## 1. Code & Functionality
- [ ] All pages load correctly (no 404s or errors)
- [ ] Forms work and validate correctly
- [ ] No broken links (internal or external)
- [ ] Responsive design (mobile/tablet/desktop)
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge)
- [ ] Console is free of JavaScript errors
- [ ] Third-party services (APIs, payments, embeds) are integrated and tested

## 2. Performance Optimization
- [ ] CSS/JS is minified
- [ ] Images are optimized (compressed without quality loss)
- [ ] Lazy loading is enabled for large assets
- [ ] Code splitting and tree shaking (if using frameworks like React/Vue)
- [ ] CDN is configured for static assets (if needed)
- [ ] Lighthouse or PageSpeed scores are acceptable

## 3. SEO & Metadata
- [ ] H1-H6 hierarchy is logical
- [ ] Title tags and meta descriptions for all pages
- [ ] Open Graph and Twitter meta tags for social sharing
- [ ] Sitemap.xml is generated and linked in robots.txt
- [ ] Robots.txt is present and configured correctly
- [ ] Canonical tags are set to avoid duplicate content
- [ ] [llms.txt](https://llmstxt.org/) is included
- [ ] [carbon.txt](https://carbontxt.org/) is included

## 4. Security
- [ ] HTTPS is enforced (SSL/TLS installed)
- [ ] Environment variables are not exposed
- [ ] Input validation & sanitization is in place
- [ ] Admin/dashboard is secure and requires authentication
- [ ] CORS is configured correctly (especially for APIs)
- [ ] Dependencies are up-to-date (no known vulnerabilities)

## 5. Analytics & Monitoring
- [ ] Google Analytics (or alternative) is installed
- [ ] Error logging (e.g., Sentry) is set up
- [ ] Performance monitoring is in place
- [ ] Uptime monitoring configured

## 6. Accessibility (a11y)
- [ ] Images have alt text
- [ ] Forms have associated labels
- [ ] Keyboard navigation is supported
- [ ] ARIA attributes used where needed
- [ ] Contrast ratios meet WCAG standards

## 7. Backend & Database (if applicable)
- [ ] Database is secured and not publicly accessible
- [ ] Backups are configured
- [ ] API routes are protected and rate-limited
- [ ] Server logs and error handling in place
- [ ] Environment variables set correctly (`NODE_ENV=production`, etc.)

## 8. Deployment Readiness
- [ ] Domain name is pointed to the correct server
- [ ] Hosting configuration (e.g., Nginx, Apache, Vercel, Netlify) is correct
- [ ] Build tools (Webpack, Next.js, etc.) configured for production
- [ ] CI/CD pipeline tested (if used)
- [ ] Fallback 404 page and custom error pages configured

## 9. Legal and Compliance
- [ ] Cookie consent banner (if needed)
- [ ] Privacy policy & terms of service pages
- [ ] GDPR compliance (for EU audiences)
- [ ] License compliance for third-party code/assets
