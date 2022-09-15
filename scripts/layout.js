$(window).on('load', function() {
    var login = document.getElementById('login');
    var username = document.getElementById('username-span');
    if (getCookie('isAuthenticated')) {
        login.style.display = "none";
        username.innerHTML = "Username: " + getCookie('username');
    } else {
        login.style.display = "block";
        username.innerHTML = '';
    }
});