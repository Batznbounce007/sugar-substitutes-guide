import { renderHome } from './components/Home.js?v=11';
import { renderDetail } from './components/Detail.js?v=11';
import { renderGuide } from './components/Guide.js?v=11';
import { renderImpressum } from './components/Impressum.js?v=11';
import { renderAbout } from './components/About.js?v=11';
import { substitutes } from './data/substitutes.js?v=11';
import { getLanguage, setLanguage, t } from './components/translations.js?v=8';

// Simple Client-Side Router
const Router = {
    routes: {},

    init() {
        // Handle language toggle setup
        const langBtn = document.getElementById('lang-toggle');
        if (langBtn) {
            langBtn.addEventListener('click', () => {
                const current = getLanguage();
                setLanguage(current === 'de' ? 'en' : 'de');
                this.handleRoute(); // Re-render
            });
        }

        // Handle initial load
        this.handleRoute();

        // Handle popstate (back/forward buttons)
        window.addEventListener('popstate', () => this.handleRoute());

        // Handle click events on links with data-route
        document.body.addEventListener('click', e => {
            const link = e.target.closest('[data-route]');
            if (link) {
                e.preventDefault();
                const route = link.getAttribute('data-route');
                const id = link.getAttribute('data-id');

                let path = route === 'home' ? '/' : `/${route}`;
                if (id) path += `?id=${id}`;

                this.navigate(path);
            }
        });
    },

    navigate(path) {
        history.pushState(null, '', /*location.origin +*/ '#' + path); // using hash for simple static hosting compatibility
        this.handleRoute();
    },

    handleRoute() {
        const hash = window.location.hash || '#/';
        const path = hash.slice(1).split('?')[0]; // Remove '#' and query strings
        const queryParams = new URLSearchParams(hash.split('?')[1] || '');

        // Update Language & Navigation UI
        const navLinks = document.querySelectorAll('header nav a');
        if (navLinks.length >= 3) {
            navLinks[0].textContent = t('nav.home');
            navLinks[1].textContent = t('nav.guide');
            navLinks[2].textContent = t('nav.about');
        }

        const footerLinks = document.querySelectorAll('footer a');
        if (footerLinks.length >= 2) {
            footerLinks[0].textContent = t('nav.impressum');
            footerLinks[1].textContent = t('nav.privacy');
        }
        const footerText = document.querySelector('footer p');
        if (footerText) footerText.innerHTML = t('footer.text');

        const langBtn = document.getElementById('lang-toggle');
        if (langBtn) {
            const lang = getLanguage();
            langBtn.innerHTML = lang === 'de'
                ? '<span class="opacity-100 font-bold">DE</span> <span class="opacity-40 font-normal">EN</span>'
                : '<span class="opacity-40 font-normal">DE</span> <span class="opacity-100 font-bold">EN</span>';
        }

        const main = document.getElementById('main-content');
        main.innerHTML = ''; // Clear current content

        // Re-initialize lucide icons after render
        const updateIcons = () => {
            if (window.lucide) {
                window.lucide.createIcons();
            }
        };

        if (path === '/') {
            renderHome(main).then(updateIcons);
        } else if (path === '/guide') {
            renderGuide(main).then(updateIcons);
        } else if (path === '/impressum') {
            renderImpressum(main).then(updateIcons);
        } else if (path === '/about') {
            renderAbout(main).then(updateIcons);
        } else if (path === '/detail' && queryParams.has('id')) {
            const id = queryParams.get('id');
            const item = substitutes.find(s => s.id === id);
            if (item) {
                renderDetail(main, item).then(updateIcons);
            } else {
                this.navigate('/');
            }
        } else {
            // 404
            main.innerHTML = `
                <div class="text-center" style="text-align:center; padding: 4rem;">
                    <h2>Seite nicht gefunden</h2>
                    <p style="margin-top:1rem; color: var(--text-muted);">Die gesuchte Seite existiert nicht.</p>
                    <a href="#" class="btn btn-primary" data-route="home" style="margin-top:2rem;">Zurück zur Startseite</a>
                </div>
            `;
            updateIcons();
        }
    }
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    Router.init();
});
