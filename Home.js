function validateForm() {
    //Email-validation
  
    if (/^\w+([\.-1?\w+)@\w+([\. -]?\w+)(\.\w(2,3))+1/.test(document.getElementById('Email').value)) {}
   else{
    alert("You have entered an invalid email address!")
}
//password-validation.
let pass= document.getElementById("Password").value;
if (pass.lenth = 0) {
    alert("Please fill the password");
}
else if (pass.length < 8) {
    alert("Password must be greater than or equal to length 8");
}
else if (paa.length > 15) {
    alert("Password must be of length less than 15");
}
}