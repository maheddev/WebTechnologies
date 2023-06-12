console.log("Connected")
function func(){
    var result = document.getElementById("result");
    result.innerHTML = "Button Clicked"
}
 
function checkName(){
    var input = document.getElementById('name');
    if(input.value){
        input.classList.remove('error')
        input.classList.add("success")
        console.log(input.value)
    }
    else{
        input.classList.remove('success')
        input.classList.add('error')
    }
    var email = document.getElementById('email');
    if(email.value){
        email.classList.remove('error')
        email.classList.add("success")
    }
    else{
        email.classList.remove('success')
        email.classList.add('error')
    }
    var phone = document.getElementById('contact');
    if(phone.value){
        phone.classList.remove('error')
        phone.classList.add("success")
    }
    else{
        phone.classList.remove('success')
        phone.classList.add('error')
    }


    var pass = document.getElementById('pass');
    if(pass.value){
        pass.classList.remove('error')
        pass.classList.add("success")
    }
    else{
        pass.classList.remove('success')
        pass.classList.add('error')
    }


    var confirm = document.getElementById('confirm');
    if(confirm.value){
        confirm.classList.remove('error')
        confirm.classList.add("success")
    }
    else{
        confirm.classList.remove('success')
        confirm.classList.add('error')
    }
}
function gotoLogin(){
    window.open("loginPage.html")
}
function gotoSignUp(){
    window.open("index.html")
}