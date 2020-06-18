// Sign In
var logIns = []; // holds a login obj of the form {user: username, pass: password}
var notice = document.getElementById('notice');

var createUser = function() {
    notice.innerHTML = "";
    var username = document.getElementById('usernameInput').value;
    var password = document.getElementById('passwordInput').value;

    if (username == '' && password == '') {
        notice.innerHTML = 'Field Empty';
    }
    else {
        window.localStorage.setItem(username,password);
        notice.innerHTML = "User created";
    }
}


var validation = function() {
    notice.innerHTML = "";
    var username = document.getElementById('usernameInput').value;
    var password = document.getElementById('passwordInput').value;
    var login = window.localStorage.getItem(username);
    document.getElementById('usernameInput').value = "";
    document.getElementById('passwordInput').value = "";

    if (username == '' && password == '') {
        notice.innerHTML = 'Field Empty';
    }
    else {
        if(login == password){
            notice.innerHTML = "Hello " + username + ", let's get ROCKIN!";
        }else{
            notice.innerHTML = "Invalid username or password";
        }
        
    }
}

