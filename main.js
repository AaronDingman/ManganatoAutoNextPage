// ==UserScript==
// @name         Auto Next Page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically presses the next page button on readmananato.com when you scroll to the comment section.
// @author       Patchouli
// @match        https://readmanganato.com/*
// @icon         https://www.google.com/s2/favicons?domain=readmanganato.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    function elementInViewport(el) {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;

        while (el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }

        return (
            top >= window.pageYOffset &&
            left >= window.pageXOffset &&
            (top + height) <= (window.pageYOffset + window.innerHeight) &&
            (left + width) <= (window.pageXOffset + window.innerWidth)
        );
    }

    setInterval(function(){
        if (elementInViewport(document.getElementsByClassName('fb-comment-title fb-comment-title-show')[0])) {
            document.getElementsByClassName("navi-change-chapter-btn-next a-h")[0].click()
        }
    }, 500);
})();