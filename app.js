'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    document.body.classList.toggle('light-theme')

    var className = document.body.className;
    if (className == "dark-theme") {
        this.textContent = "Light";
    }
    else{
        this.textContent = "Dark";
    }
    console.log("Current Theme: " + className);

});

