function validation(){
    var username = document.getElementById('username').value;
    var email = document.getElementById('useremail').value;
    var pswd = document.getElementById('userpassword').value;

    var usernamecheck = /^[A-za-z.]{3,30}$/;
    var userpswdcheck = /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*[+@#$%^&*!.()-]).{8,}/;
    var emailcheck = /^[a-zA-Z0-9]{1,}[._+-]?[a-zA-Z0-9]{1,}[@][a-zA-Z0-9]{1,}([.][a-zA-Z]{2,4}){1,3}$/;
    
    if(usernamecheck.test(username)){
        document.getElementById('nameerror').innerHTML = "";
    }else{
        document.getElementById('nameerror').innerHTML = "Username is invalid";
        return false;
    }

    if(emailcheck.test(email)){
        document.getElementById('emailerror').innerHTML = "";
    }else{
        document.getElementById('emailerror').innerHTML = "Email is invalid";
        return false;
    }

    if(userpswdcheck.test(pswd)){
        document.getElementById('passworderror').innerHTML = "";
    }else{
        document.getElementById('passworderror').innerHTML = "Password is invalid";
        return false;
    }
    alert("Form Successfully Submitted");
}