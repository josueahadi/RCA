const loader = document.querySelector('#loader-wrapper');

window.addEventListener('load', () => {
    if (!loader) return;

    loader.classList.add('is-hidden');
    loader.addEventListener('transitionend', () => loader.remove(), { once: true });
});
