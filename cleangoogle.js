// ==UserScript==
// @name         Block Google Elements and Change Background
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Block specified elements on Google homepage and change the background image using CSS
// @author       Laurie
// @match        https://www.google.com/*
// @exclude      https://www.google.com/search*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Block elements
    const blockedElements = [
        '.lJ9FBc.FPdoLc > center',
        '.szppmdbYutt__middle-slot-promo',
        '.Ne6nSd.n1xJcf.o3j99',
        '.qarstb.o3j99',
        '.SSwjIe.KxwPGc',
        '.uU7dJb'
    ];

    // Block elements
    blockedElements.forEach((selector) => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.display = 'none';
        }
    });

    // Change background image
    GM_addStyle(`
        body {
            background-image: url('https://images7.alphacoders.com/427/427688.jpg');
        }
    `);
})();