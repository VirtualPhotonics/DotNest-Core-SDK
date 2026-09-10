/**
 * site.js — VirtualPhotonics Orchard Core Theme
 *
 * Requires: jQuery (loaded via CDN in Layout.liquid)
 */

$(function () {
    var navToggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.menu');

    if (!navToggle || !nav) return;

    navToggle.addEventListener('click', function (e) {
        e.preventDefault();
        navToggle.classList.toggle('expanded');
        nav.classList.toggle('expanded');
    });
});
