let name = document.getElementById("name")
let password = document.getElementById("password")
let rePassword = document.getElementById("rePassword")
let btn = document.getElementById("btn")

let nameError = document.getElementById("nameError")
let errorPass = document.getElementById("passwordError")
let reErrorPass = document.getElementById("rePasswordError")



btn.addEventListener("click",function(){
    event.preventDefault()

    const nameRegex = /^[a-zA-Z]+$/
const passwordRegex = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

let validate = true;

if(nameRegex.test(name.value)== false){

        nameError.style.display="block"
        validate=false
    }else{
        nameError.style.display="none"

    }

    if(passwordRegex.test(password.value)== false){

        errorPass.style.display="block"
        validate=false

    }else{
        errorPass.style.display="none"


    }

    if(password.value !== rePassword.value){

        reErrorPass.style.display="block"
        validate=false

    }else{
        reErrorPass.style.display="none"


    }

    if(validate == true){
        alert("Form Submitted Successfully")
        document.getElementById("validateForm").reset()
    }

})
