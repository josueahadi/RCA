const loader = document.querySelector('#loader-wrapper');

window.addEventListener('load', () => {
    if (!loader) return;

    loader.classList.add('is-hidden');
    loader.addEventListener('transitionend', () => loader.remove(), { once: true });
});

const backToTopButton = document.querySelector('#back-to-top-btn');

if (backToTopButton) {
    let hideTimer;
    let isBackToTopVisible = false;
    let scrollFramePending = false;

    const updateBackToTopButton = () => {
        scrollFramePending = false;
        const shouldBeVisible = window.scrollY > 300;

        if (shouldBeVisible === isBackToTopVisible) return;
        isBackToTopVisible = shouldBeVisible;
        window.clearTimeout(hideTimer);

        if (shouldBeVisible) {
            backToTopButton.classList.remove('btnExit');
            backToTopButton.classList.add('btnEntrance');
            backToTopButton.style.display = 'block';
            return;
        }

        if (backToTopButton.classList.contains('btnEntrance')) {
            backToTopButton.classList.remove('btnEntrance');
            backToTopButton.classList.add('btnExit');
            hideTimer = window.setTimeout(() => {
                backToTopButton.style.display = 'none';
            }, 250);
        }
    };

    const requestBackToTopUpdate = () => {
        if (scrollFramePending) return;
        scrollFramePending = true;
        window.requestAnimationFrame(updateBackToTopButton);
    };

    window.addEventListener('scroll', requestBackToTopUpdate, { passive: true });
    updateBackToTopButton();

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
        });
    });
}

const menuToggle = document.querySelector('.menu-toggle');
const primaryNavigation = document.querySelector('#primary-navigation');

if (menuToggle && primaryNavigation) {
    const closeMenu = (restoreFocus = false) => {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open navigation menu');
        primaryNavigation.classList.remove('is-open');
        if (restoreFocus) menuToggle.focus();
    };

    menuToggle.addEventListener('click', () => {
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', String(!isOpen));
        menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
        primaryNavigation.classList.toggle('is-open', !isOpen);
    });

    primaryNavigation.addEventListener('click', (event) => {
        if (event.target.closest('a')) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && primaryNavigation.classList.contains('is-open')) {
            closeMenu(true);
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) closeMenu();
    });
}
