/* ============================================================
    HELPER FUNCTIONS
   ============================================================ */
function getWhatsAppUrl(message = '') {
    const defaultMsg = `Hi ${CONFIG.brand.name}! Saya berminat dengan servis baiki laptop.`;
    return `https://wa.me/${CONFIG.brand.phone}?text=${encodeURIComponent(message || defaultMsg)}`;
}

function resolveValue(val) {
    if (typeof val === 'string' && CONFIG.brand[val]) return CONFIG.brand[val];
    return val;
}

function buildButton(btn) {
    let href = btn.href;
    if (href === 'wa') href = getWhatsAppUrl();
    else if (href === 'tel') href = `tel:+${CONFIG.brand.phone}`;

    const typeClass = btn.type === 'whatsapp' ? 'btn-whatsapp' :
                      btn.type === 'outline' ? 'btn-outline' :
                      btn.type === 'outline-dark' ? 'btn-outline-dark' : 'btn-primary';

    return `<a href="${href}" class="btn ${typeClass}" ${href.startsWith('http') ? 'target="_blank"' : ''}>
                <i class="${btn.icon}"></i> ${btn.text}
            </a>`;
}

/* ============================================================
   🏗️ RENDER FUNCTIONS - Setiap fungsi bina satu seksyen
   ============================================================ */

function renderNav() {
    const nav = document.getElementById('navLinks');
    nav.innerHTML = CONFIG.navMenu.map(item => {
        const cls = item.isCta ? 'nav-cta' : '';
        return `<li><a href="${item.href}" class="${cls}">${item.label}</a></li>`;
    }).join('');
}

function renderHero() {
    if (!CONFIG.features.hero) return '';
    const h = CONFIG.content.hero;
    const statsHtml = CONFIG.features.heroStats ? `
        <div class="hero-stats">
            ${h.stats.map(s => `
                <div class="hero-stat">
                    <div class="hero-stat-number" data-target="${s.value}" data-suffix="${s.suffix}">0</div>
                    <div class="hero-stat-label">${s.label}</div>
                </div>
            `).join('')}
        </div>` : '';

    const badgeHtml = CONFIG.features.heroBadge ? `
        <div class="hero-badge">
            <i class="fas ${h.badge.icon}"></i> ${h.badge.text}
        </div>` : '';

    const floatingCardsHtml = CONFIG.features.heroFloatingCards ? `
        ${h.floatingCards.map(c => `
            <div class="floating-card ${c.position}">
                <div class="floating-card-icon ${c.color}"><i class="fas ${c.icon}"></i></div>
                <div class="floating-card-text">${c.title}<span>${c.subtitle}</span></div>
            </div>
        `).join('')}` : '';

    return `
    <section class="hero" id="hero">
        <div class="container">
            <div class="hero-grid">
                <div class="hero-content">
                    ${badgeHtml}
                    <h1>
                        <span class="fire">${h.title.before}</span><br>
                        <span class="highlight">${h.title.highlight}</span><br>
                        <span class="fire">${h.title.after}</span>
                    </h1>
                    <p class="hero-subtitle">${h.subtitle}</p>
                    ${statsHtml}
                    <div class="hero-buttons">
                        ${h.buttons.map(buildButton).join('')}
                    </div>
                </div>
                <div class="hero-visual">
                    <div class="hero-laptop">
                        <div class="laptop-mockup">
                            <div class="laptop-screen">
                                <div class="laptop-screen-content">
                                    <i class="${h.laptopScreen.icon}"></i>
                                    <h3>${h.laptopScreen.title}</h3>
                                    <p>${h.laptopScreen.subtitle}</p>
                                </div>
                            </div>
                            <div class="laptop-base"></div>
                        </div>
                        ${floatingCardsHtml}
                    </div>
                </div>
            </div>
        </div>
    </section>`;
}

function renderTrustBar() {
    if (!CONFIG.features.trustBar) return '';
    return `
    <div class="trust-bar">
        <div class="container">
            ${CONFIG.content.trustBar.map(t => `
                <div class="trust-item"><i class="fas ${t.icon}"></i><span>${t.text}</span></div>
            `).join('')}
        </div>
    </div>`;
}

function renderServices() {
    if (!CONFIG.features.services) return '';
    const s = CONFIG.content.services;
    return `
    <section class="services" id="services">
        <div class="container">
            <div class="section-header reveal">
                <div class="section-tag"><i class="fas ${s.tag.icon}"></i> ${s.tag.text}</div>
                <h2>${s.title}</h2>
                <p>${s.subtitle}</p>
            </div>
            <div class="services-grid">
                ${s.items.map(item => `
                    <div class="service-card reveal">
                        <div class="service-icon ${item.color}"><i class="fas ${item.icon}"></i></div>
                        <h3>${item.title}</h3>
                        <p>${item.desc}</p>
                        <a href="#contact" class="service-link">Maklumat Lanjut <i class="fas fa-arrow-right"></i></a>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>`;
}

function renderHowItWorks() {
    if (!CONFIG.features.howItWorks) return '';
    const s = CONFIG.content.howItWorks;
    return `
    <section class="how-it-works" id="how-it-works">
        <div class="container">
            <div class="section-header reveal">
                <div class="section-tag"><i class="fas ${s.tag.icon}"></i> ${s.tag.text}</div>
                <h2>${s.title}</h2>
                <p>${s.subtitle}</p>
            </div>
            <div class="steps-grid">
                ${s.steps.map(step => `
                    <div class="step-card reveal">
                        <div class="step-number">${step.number}</div>
                        <h3>${step.title}</h3>
                        <p>${step.desc}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>`;
}

function renderWhyUs() {
    if (!CONFIG.features.whyUs) return '';
    const s = CONFIG.content.whyUs;
    return `
    <section class="why-us" id="why-us">
        <div class="container">
            <div class="section-header reveal">
                <div class="section-tag"><i class="fas ${s.tag.icon}"></i> ${s.tag.text}</div>
                <h2>${s.title}</h2>
                <p>${s.subtitle}</p>
            </div>
            <div class="features-grid">
                ${s.features.map(f => `
                    <div class="feature-card reveal">
                        <div class="feature-icon"><i class="fas ${f.icon}"></i></div>
                        <div class="feature-content">
                            <h3>${f.title}</h3>
                            <p>${f.desc}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>`;
}

function renderOffers() {
    if (!CONFIG.features.offers) return '';
    const s = CONFIG.content.offers;
    return `
    <section class="offers" id="offers">
        <div class="container">
            <div class="section-header reveal">
                <div class="section-tag"><i class="fas ${s.tag.icon}"></i> ${s.tag.text}</div>
                <h2>${s.title}</h2>
                <p>${s.subtitle}</p>
            </div>
            <div class="offers-grid">
                ${s.plans.map(plan => `
                    <div class="offer-card ${plan.featured ? 'featured' : ''} reveal">
                        ${plan.badge ? `<div class="offer-badge">${plan.badge}</div>` : ''}
                        <div class="offer-icon"><i class="fas ${plan.icon}"></i></div>
                        <h3>${plan.title}</h3>
                        <div class="offer-price">${plan.price} <span>${plan.priceNote}</span></div>
                        <p class="offer-desc">${plan.desc}</p>
                        <ul class="offer-features">
                            ${plan.features.map(f => `
                                <li class="${f.enabled ? '' : 'disabled'}">
                                    <i class="fas ${f.enabled ? 'fa-check' : 'fa-times'}"></i> ${f.text}
                                </li>
                            `).join('')}
                        </ul>
                        <a href="#contact" class="btn btn-${plan.buttonType} btn-offer">${plan.buttonText}</a>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>`;
}

function renderTestimonials() {
    if (!CONFIG.features.testimonials) return '';
    const s = CONFIG.content.testimonials;
    return `
    <section class="testimonials" id="testimonials">
        <div class="container">
            <div class="section-header reveal">
                <div class="section-tag"><i class="fas ${s.tag.icon}"></i> ${s.tag.text}</div>
                <h2>${s.title}</h2>
                <p>${s.subtitle}</p>
            </div>
            <div class="testimonials-grid">
                ${s.items.map(t => `
                    <div class="testimonial-card reveal">
                        <div class="testimonial-stars">
                            ${'<i class="fas fa-star"></i>'.repeat(t.stars)}
                        </div>
                        <p class="testimonial-text">"${t.text}"</p>
                        <div class="testimonial-author">
                            <div class="testimonial-avatar">${t.initial}</div>
                            <div>
                                <div class="testimonial-name">${t.name}</div>
                                <div class="testimonial-role">${t.role}</div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>`;
}

function renderFaq() {
    if (!CONFIG.features.faq) return '';
    const s = CONFIG.content.faq;
    return `
    <section class="faq" id="faq">
        <div class="container">
            <div class="section-header reveal">
                <div class="section-tag"><i class="fas ${s.tag.icon}"></i> ${s.tag.text}</div>
                <h2>${s.title}</h2>
                <p>${s.subtitle}</p>
            </div>
            <div class="faq-grid">
                ${s.items.map((item, i) => `
                    <div class="faq-item reveal">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>${item.q}</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="faq-answer">
                            <div class="faq-answer-content">${item.a}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>`;
}

function renderCta() {
    if (!CONFIG.features.cta) return '';
    const s = CONFIG.content.cta;
    return `
    <section class="cta">
        <div class="container">
            <div class="cta-content reveal">
                <h2>${s.title}</h2>
                <p>${s.subtitle}</p>
                <div class="cta-buttons">
                    ${s.buttons.map(buildButton).join('')}
                </div>
                <div class="cta-trust">
                    ${s.trustItems.map(t => `
                        <div class="cta-trust-item"><i class="fas ${t.icon}"></i><span>${t.text}</span></div>
                    `).join('')}
                </div>
            </div>
        </div>
    </section>`;
}

function renderContact() {
    if (!CONFIG.features.contact) return '';
    const s = CONFIG.content.contact;
    return `
    <section class="contact" id="contact">
        <div class="container">
            <div class="section-header reveal">
                <div class="section-tag"><i class="fas ${s.tag.icon}"></i> ${s.tag.text}</div>
                <h2>${s.title}</h2>
                <p>${s.subtitle}</p>
            </div>
            <div class="contact-grid">
                <div class="contact-info reveal">
                    <h3>${s.infoTitle}</h3>
                    <p>${s.infoDesc}</p>
                    <ul class="contact-details">
                        ${s.details.map(d => `
                            <li>
                                <i class="${d.icon}"></i>
                                <div>
                                    <strong>${d.label}</strong>
                                    ${resolveValue(d.value)}
                                </div>
                            </li>
                        `).join('')}
                    </ul>
                    <div class="contact-social">
                        ${s.social.map(so => `
                            <a href="${so.href}" aria-label="${so.label}"><i class="${so.icon}"></i></a>
                        `).join('')}
                    </div>
                </div>
                <div class="contact-form reveal">
                    <h3>${s.formTitle}</h3>
                    <form id="contactForm" onsubmit="handleSubmit(event)">
                        ${s.formFields.map(group => {
                            if (group.type === 'row') {
                                return `<div class="form-row">
                                    ${group.fields.map(f => renderField(f)).join('')}
                                </div>`;
                            }
                            return renderField(group.field);
                        }).join('')}
                        <button type="submit" class="btn-submit">
                            <i class="fas fa-paper-plane"></i> ${s.submitText}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>`;
}

function renderField(f) {
    const req = f.required ? 'required' : '';
    if (f.type === 'textarea') {
        return `<div class="form-group">
            <label>${f.label}</label>
            <textarea placeholder="${f.placeholder}" ${req}></textarea>
        </div>`;
    }
    if (f.type === 'select') {
        return `<div class="form-group">
            <label>${f.label}</label>
            <select ${req}>
                ${f.options.map((o, i) => `<option ${i===0?'selected disabled':''}>${o}</option>`).join('')}
            </select>
        </div>`;
    }
    return `<div class="form-group">
        <label>${f.label}</label>
        <input type="${f.type}" placeholder="${f.placeholder}" ${req}>
    </div>`;
}

function renderFooter() {
    if (!CONFIG.features.footer) return '';
    const f = CONFIG.content.footer;
    return `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="#" class="logo">
                        <i class="fas fa-laptop-code"></i>
                        SWAP<span>FIX</span>
                    </a>
                    <p>${f.brandDesc}</p>
                    <div class="contact-social">
                        ${CONFIG.content.contact.social.map(so => `
                            <a href="${so.href}" aria-label="${so.label}"><i class="${so.icon}"></i></a>
                        `).join('')}
                    </div>
                </div>
                ${f.columns.map(col => `
                    <div>
                        <h4>${col.title}</h4>
                        <ul class="footer-links">
                            ${col.links.map(l => {
                                let href = l.href;
                                if (href === 'wa') href = getWhatsAppUrl();
                                else if (href === 'tel') href = `tel:+${CONFIG.brand.phone}`;
                                else if (href === 'email') href = `mailto:${CONFIG.brand.email}`;
                                return `<li><a href="${href}" ${l.external ? 'target="_blank"' : ''}>${resolveValue(l.text)}</a></li>`;
                            }).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 ${CONFIG.brand.name}. Hak Cipta Terpelihara. ${CONFIG.brand.hashtags}</p>
                <div class="footer-bottom-links">
                    ${f.bottomLinks.map(l => `<a href="${l.href}">${l.text}</a>`).join('')}
                </div>
            </div>
        </div>
    </footer>`;
}

function renderWhatsAppFloat() {
    if (!CONFIG.features.showWhatsAppFloat) return;
    document.getElementById('whatsappFloat').innerHTML = `
        <div class="whatsapp-pulse"></div>
        <a href="${getWhatsAppUrl()}" target="_blank">
            <i class="fab fa-whatsapp"></i>
            <span>WhatsApp Kami</span>
        </a>
    `;
}

/* ============================================================
   🚀 MAIN RENDER - Jalankan semua
   ============================================================ */
function renderAll() {
    renderNav();
    document.getElementById('mainContent').innerHTML = `
        ${renderHero()}
        ${renderTrustBar()}
        ${renderServices()}
        ${renderHowItWorks()}
        ${renderWhyUs()}
        ${renderOffers()}
        ${renderTestimonials()}
        ${renderFaq()}
        ${renderCta()}
        ${renderContact()}
    `;
    document.getElementById('footerSection').innerHTML = renderFooter();
    renderWhatsAppFloat();
}

/* ============================================================
   🎯 EVENT HANDLERS & INTERACTIVITY
   ============================================================ */

// Preloader
window.addEventListener('load', () => {
    if (CONFIG.theme.showPreloader) {
        setTimeout(() => {
            document.getElementById('preloader').classList.add('hidden');
        }, CONFIG.theme.preloaderDuration);
    } else {
        document.getElementById('preloader').classList.add('hidden');
    }
});

// Navbar scroll
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');

    if (CONFIG.theme.showScrollTop) {
        if (window.scrollY > 500) scrollTopBtn.classList.add('visible');
        else scrollTopBtn.classList.remove('visible');
    }
});

// Mobile nav
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navOverlay.classList.toggle('active');
    const icon = mobileToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

navOverlay.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navOverlay.classList.remove('active');
    const icon = mobileToggle.querySelector('i');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-times');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navOverlay.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// Counter animation
function animateCounter(el, target, suffix) {
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = Math.floor(current) + suffix;
    }, 30);
}

let countersStarted = false;
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !countersStarted && CONFIG.features.heroStats) {
            countersStarted = true;
            setTimeout(() => {
                document.querySelectorAll('.hero-stat-number').forEach(el => {
                    animateCounter(el, parseInt(el.dataset.target), el.dataset.suffix);
                });
            }, 500);
        }
    });
}, { threshold: 0.5 });

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

// FAQ toggle
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const isActive = faqItem.classList.contains('active');

    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-answer').style.maxHeight = null;
    });

    if (!isActive) {
        faqItem.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
    }
}

// Form submit
function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.btn-submit');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Mesej Dihantar!';
    btn.style.background = 'var(--secondary)';
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        e.target.reset();
    }, 3000);
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Smooth scroll for anchor links
document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (anchor) {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) current = section.getAttribute('id');
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + current && !link.classList.contains('nav-cta')) {
            link.style.color = navbar.classList.contains('scrolled') ? 'var(--primary)' : 'var(--secondary)';
        }
    });
});

/* ============================================================
   🎬 INIT - Mula render selepas DOM ready
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    renderAll();

    // Observe hero for counters
    const hero = document.getElementById('hero');
    if (hero) heroObserver.observe(hero);

    // Observe all reveal elements
    setTimeout(() => {
        document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    }, 100);
});
