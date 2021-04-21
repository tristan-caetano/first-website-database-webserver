'use strict'

const switcher = document.querySelector('.btn');
const login = document.querySelector('.logBtn');

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



login.addEventListener('click', function () {

    console.log("Button Clicked");

    var user = document.getElementById("userName").value;
    var pass = document.getElementById("passWord").value;

    console.log("Username: " + user + "\nPassword: " + pass);

    createCookie("test", user, 10);

});

// Function to create the cookie
function createCookie(name, value, days) {
    var expires;
      
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
      
    document.cookie = escape(name) + "=" + 
        escape(value) + expires + "; path=/";

    console.log("Cookie Created!")
}