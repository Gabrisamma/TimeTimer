function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}



function getJsonForm(form){

    var jsonform = $("#" + form.attr('id') + " input").toArray();

    jsondata = new Object;
    for (i=0; i<jsonform.length; i++) {
        key = jsonform[i].id;
        val = jsonform[i].value;
        jsondata[key] = val;
    }

    return jsondata;
}


function secondsToMinutes(seconds) {
    var minutes = Math.floor(seconds / 60);
    var seconds = seconds - (minutes * 60);

    seconds = seconds > 9 ? "" + seconds : "0" + seconds;

    return minutes + ":" + seconds;
}



function saveCookieAuth(username) {
    var d = new Date();
    d.setTime(d.getTime() + (30 * 60 * 1000));

    var expires = "expires=" + d.toUTCString();

    document.cookie = 
        'isAuthenticated=' + true + 
        ';' + expires + 
        ';';

    document.cookie = 
        'username=' + username +
        ';' + expires +
        ';';
}


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}