"use strict";


// Variables
const goBackLink = document.querySelector(`.go-back`);


// Functions
const goBack = function () {
    window.history.back();
}


// Functionality
goBackLink.addEventListener(`click`, goBack);