const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const date = document.getElementById('date');
const zip = document.getElementById( 'zip');


form.addEventListener('submit',(e) => {
    e.preventDefault();
    
 validate(); 
})
 const sendData = (usernameVal,sRate,count)=>{
    if(sRate === count){
        alert('registration successfull');
        swal("welcome! " + usernameVal , "Registration successfull", "success");
        location.href = `demo.html?username = ${usernameVal}`
    }

}

const successMsg = (usernameVal)=>{
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length - 1;
    for(var i=0; i<formCon.length; i++){
        if(formCon[i].className === "form-control success"){
            var sRate = 0 + i;
            sendData(usernameVal,sRate,count);

        }else{
            return false;
        }
    }
}
// define the validate function

const validate = () =>{
const usernameVal = username.value.trim();
const emailVal = email.value.trim();
const phoneVal = phone.value.trim();
const passwordVal = password.value.trim();
const dateVal = date.value.trim();
const zipVal = zip.value.trim();

// more email validate
const isEmail = (emailVal) =>{
    var atSymbol = emailVal.indexOf("@");
    if(atSymbol<1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 3) return false;
    if(dot === emailVal.length - 1) return false;
    return true;


}
// validate username
    if(usernameVal === ""){
        setErrormsg (username, 'username cannot be blank');
    }else if(usernameVal.length <=2){
        setErrormsg(username, 'username min 3 char');
    }else{
        setSuccessMsg(username);
    }

    if(emailVal === ""){
        setErrormsg(email, 'email cannot be blank');
    }else if(!isEmail(emailVal)){
        setErrormsg(emailVal, 'not a valid email');
    }else{
        setSuccessMsg(email);
    }
        // password validate
    if(passwordVal === ""){
        setErrormsg(password, 'password cannot be blank');
    }else if(passwordVal.length <=5){
        setErrormsg(password, 'password must be 6 char');
    }else{
        setSuccessMsg(password);
    }
        // validate date of birth
    if(dateVal === ""){
        setErrormsg(date, 'date cannot be blank');
    }else if(dateVal.length === date){
        setErrormsg(date, 'please choose date');
    }else{
        setSuccessMsg(date);
    }
    // validate zip code
    if(zipVal === ""){
        setErrormsg(zip, 'code cannot be blank');
    }else if(zipVal.length === zip){
        setErrormsg(zip, 'please enter zip code');
    }else{
        setSuccessMsg(zip);
    }
        // validate phone
    if(phoneVal === ""){
        setErrormsg(phone, 'phone cannot be blank');
    }else if(phoneVal.length != 10){
        setErrormsg(phone, 'not a valid mobile no');
    }else{
        setSuccessMsg(phone);
    }

    successMsg(usernameVal);
} 
function setErrormsg(input,errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className ="form-control error";
    small.innerText = errormsgs;

}
function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className ="form-control success";
}

