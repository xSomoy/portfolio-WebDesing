// Assigning Variables

var NAME = document.getElementById('name');
var EMAIL = document.getElementById('email');
var SUB = document.getElementById('subject');
var MSG = document.getElementById('message');
var errMSG = document.getElementById('errMsg');
var emailRGX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


// Validation Fucntion

function form_validation() {
    if (NAME.value == '') {
        NAME.focus();
        NAME.style = 'border: 2px solid red;';
        errMSG.innerHTML = "Please Provide Your Name";
        errMSG.style = 'color:red; font-weight:700;';
        return false;
    } else if (EMAIL.value == '') {
        EMAIL.focus();
        EMAIL.style = 'border: 2px solid red; color: black;';
        errMSG.innerHTML = "Please Provide Your Email";
        errMSG.style = 'color:red; font-weight:700;';
        return false;
    } else if (!emailRGX.test(EMAIL.value)) {
        EMAIL.focus();
        EMAIL.style = 'border: 2px solid red; color: black;';
        errMSG.innerHTML = "Please Provide A Valid Email";
        errMSG.style = 'color:red; font-weight:700;';
        return false;
    } else if (SUB.value == '') {
        SUB.focus();
        SUB.style = 'border: 2px solid red; color: black;';
        errMSG.innerHTML = "Please Provide A Subject";
        errMSG.style = 'color:red; font-weight:700;';
        return false;
    } else if (MSG.value == '') {
        MSG.focus();
        MSG.style = 'border: 2px solid red; color: black;';
        errMSG.innerHTML = "Please Provide Your Message";
        errMSG.style = 'color:red; font-weight:700;';
        return false;
    }
}


// Focus Remove Fucntion

function remove() {
    if (NAME.value != '') {
        errMSG.innerHTML = '';
        NAME.style = 'border: none;';
    }
    if (EMAIL.value != '') {
        errMSG.innerHTML = '';
        EMAIL.style = 'border: none;';
    }
    if (SUB.value != '') {
        errMSG.innerHTML = '';
        SUB.style = 'border: none;';
    }
    if (MSG.value != '') {
        errMSG.innerHTML = '';
        MSG.style = 'border: none;';
    }

}


// Event Listener

NAME.addEventListener('blur', remove);
EMAIL.addEventListener('blur', remove);
SUB.addEventListener('blur', remove);
MSG.addEventListener('blur', remove);


// The END
