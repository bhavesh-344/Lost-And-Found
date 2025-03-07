const formContainer = document.querySelector(".form-container");
const signUpBtn = document.getElementById("to-signup");
const signInBtn = document.getElementById("to-signin");
const forgotPassBtn = document.getElementById("to-forgotpass")
const sendMailBtn = document.getElementById("to-mailverification")

    signUpBtn.addEventListener("click", function (event) {
        event.preventDefault();
        formContainer.style.transform = "translateY(-525px)";
    });

    signInBtn.addEventListener("click", function (event) {
        event.preventDefault();
        formContainer.style.transform = "translateY(0px)";
    });

    forgotPassBtn.addEventListener("click" , function(event){
        event.preventDefault();
        console.log("clicked")
        formContainer.style.transform= "translateY(-1100px)"
    });

    sendMailBtn.addEventListener("click" , function(event){
        event.preventDefault();
        formContainer.style.transform= "translateY(-1600px)"
    });

