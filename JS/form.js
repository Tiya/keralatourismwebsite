let username= document.getElementById("username");
let email= document.getElementById("email");
let pwd= document.getElementById("pwd");
let repeatpwd= document.getElementById("repeatpwd");
let phno= document.getElementById("phno");
let checkbox= document.getElementById("checkbox");

    

let error_e= document.getElementById("error_e");
let error_p= document.getElementById("error_p");
let error_n= document.getElementById("error_n");
let error_rp= document.getElementById("error_rp");
let error_ph= document.getElementById("error_ph");

 
var regname = /^[a-zA-Z ]{2,30}$/;
let regemail= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
let regpwd= /^(?=.*[A-Z])(?=.*[!@#$&.*])(?=.*[0-9])(?=.*[a-z]).{8,}$/
let regphone= /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
let strengthBadge = document.getElementById('StrengthDisp');
let phonevalidate = /^(\d{10})|(\d{3}[ ]\d{3}[ ]\d{4})|(\d{3}[-]\d{3}[-]\d{4})|(\d{3}[.]\d{3}[.]\d{4})$/

let strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?.&]{8,}$/
let mediumPassword1 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
function validate_login(){
    


    if(email.value==""){
        error_e.innerHTML="Please enter your email id";
        error_e.style.color="red";
        return false;
    }else if(!regemail.test(email.value)){
        error_e.innerHTML="Please enter valid email id";
        error_e.style.color="red";
        return false;
    }else if(pwd.value==""){
        error_e.innerHTML="";
        error_p.innerHTML="Please enter your password";
        error_p.style.color="red";
        return false;
    }else if(!regpwd.test(pwd.value)){
        error_e.innerHTML="";
        error_p.innerHTML="Password should be of minimum 8 characters, atleast one uppercase and one lowercase, must contain at least one number";
        error_p.style.color="red";
        return false;
    }else{
        
        return true;
         }

}

function validate_signup(){
   
if(username.value==""){
    error_n.innerHTML="Please enter your name";
    error_n.style.color="red";
    return false;
}else if(!regname.test(username.value)){
    error_n.innerHTML="Name should contain only alphabets with minimum 2 characters";
    error_n.style.color="red";
    return false;
}else if(phno.value==""){
    error_n.innerHTML="";
    error_ph.innerHTML="Please enter your phone number";
    error_ph.style.color="red";
    return false;
}else if(!phonevalidate.test(phno.value)){
    error_n.innerHTML="";
    error_ph.innerHTML="Please enter your 10 digits phone number";
    error_ph.style.color="red";
    return false;
}else if(email.value==""){
    error_ph.innerHTML="";
    error_e.innerHTML="Please enter your email id";
    error_e.style.color="red";
    return false;
}else if(!regemail.test(email.value)){
    error_ph.innerHTML="";
    error_e.innerHTML="Please enter valid email id";
    error_e.style.color="red";
    return false;
}else if(pwd.value.length == 0){
    error_e.innerHTML="";
    error_p.innerHTML = 'Please enter your password';
    error_p.style.color="red";
    return false;
}else if(!strongPassword.test(pwd.value)) {
    error_p.innerHTML = '<span style="color:red">Weak Password!</span>';
    return false;    
}else if(repeatpwd.value==""){
    error_p.innerHTML='<span style="color:green">Strong Password!</span>';
    error_rp.innerHTML="Please confirm your passwords";
    error_rp.style.color="red";
    return false;
}else if(repeatpwd.value!=pwd.value){
    error_p.innerHTML="";
    error_rp.innerHTML="Password not matched";
    error_rp.style.color="red";
    return false;
// }else if(!checkbox.checked){
//     console.log(checkbox);
//     alert("not checked");
}else{
    alert(""+username.value+" registered successfully!!!")
    return true;
}
}