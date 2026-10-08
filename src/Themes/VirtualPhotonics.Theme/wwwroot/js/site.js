/**
 * site.js — VirtualPhotonics Orchard Core Theme
 *
 * Requires: jQuery (loaded via CDN in Layout.liquid)
 */

$(function() {

    // ---------------------------------------------------------
    // Navigation toggle
    // ---------------------------------------------------------

    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.menu');

    if (navToggle && nav) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('expanded');
            nav.classList.toggle('expanded');
        });
    }


    // ---------------------------------------------------------
    // Privacy consent banner
    // ---------------------------------------------------------

    const banner = document.getElementById('privacy-consent-banner');

    if (banner) {
        const acceptButton = document.getElementById('privacy-consent-accept-button');
        const deniedButton = document.getElementById('privacy-consent-denied-button');
        const authenticatedForm = document.getElementById('privacy-consent-submit-form');

        const hideBanner = () => banner.remove();

        const setCookie = (cookieString) => {
            if (cookieString) {
                document.cookie = cookieString;
            }
        };

        const acceptConsentForAuthenticatedUser = async () => {
            if (!authenticatedForm) return;

            const response = await fetch(authenticatedForm.action, {
                method: 'POST',
                credentials: 'same-origin',
                body: new URLSearchParams(new FormData(authenticatedForm)),
            });

            if (!response.ok) {
                throw new Error('Failed to submit privacy consent.');
            }
        };

        acceptButton?.addEventListener('click', async () => {
            setCookie(acceptButton.dataset.cookieString ?? '');

            try {
                if (authenticatedForm) {
                    await acceptConsentForAuthenticatedUser();
                }
            }
            catch (error) {
                // Keep UX resilient; consent cookie is still persisted
                // for anonymous visitors.
                console.error(error);
            }

            hideBanner();
        });

        deniedButton?.addEventListener('click', () => {
            setCookie(deniedButton.dataset.cookieString ?? '');
            hideBanner();
        });
    }
});
