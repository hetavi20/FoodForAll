console.log("hi")

function validate() {
    let f = 0;
    //username validation
    let uname = $('.username-field').val();
    if (uname == '' || uname == undefined) {
        f += 0;
        $('.username-field-msg').html('This field is required..!')
    } else {

        f += 1;
    }
    //name validation
    let name = $('.name-field').val();
    if (name == '' || name == undefined) {
        f += 0;
        $('.name-field-msg').html('This field is required..!')
    } else {

        f += 1;
    }
    // email validation
    let email = $('.email-field').val();
    let exp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email == '' || email == undefined) {
        f += 0;
        $('.email-field-msg').html('This field is required..!')
    } else if (exp.test(email) == false) {
        f += 0;
        $('.email-field-msg').html('Please enter valid email address..!')
    } else {
        f += 1;
    }
    // password validation
    let password = $('.password-field').val();
    let exp1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (password == '' || password == undefined) {
        f += 0;

        $('.password-field-msg').html('This field is required..!')
    } else if (exp1.test(password) == false) {
        f += 0;
        $('.password-field-msg').html('Your password needs to be between 6 and 20 characters long and contain one uppercase letter, one symbol, and a number..!')
    } else {
        f += 1;
    }
    //confirm password
    let p1 = $('.password-field').val();
    let p2 = $('.password1-field').val();
    console.log(p1)
    console.log(p2)
    if (p2 == '' || p2 == undefined) {
        f += 0;

        $('.password1-field-msg').html('This field is required..!')
    } else if (p1 != p2) {
        f += 0;
        $('.password1-field-msg').html('Passwords did not match..!')
    } else {
        f += 1;
    }

    // phone no
    let phone = $('.phone-field').val();
    console.log(phone)
    if (phone == '' || phone == undefined) {
        f += 0;
        $('.phone-field-msg').html('This field is required..!')
    } else if (phone.length != 10) {
        $('.phone-field-msg').html('Only 10 digits are allowed..!')
        f += 0;
    } else {
        f += 1;
    }

    //aadhar card
    let aadhar = $('.aadhar-field').val();
    var regexp = /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/;
    if (aadhar == '' || aadhar == undefined) {
        f += 0;
        $('.aadhar-field-msg').html('This field is required..!')
    } else if (regexp.test(aadhar) == false) {
        f += 0;
        $('.aadhar-field-msg').html('Aadhaar number must have 12 digits as per UIDAI and must have white space after every 4 digits..!')
    } else {

        f += 1;
    }
    //address
    let address = $('.address-field').val();
    if (address == '' || address == undefined) {
        f += 0;
        $('.address-field-msg').html('This field is required..!')
    } else {

        f += 1;
    }
    //city
    let city = $('.city-field').val();
    if (city == '' || city == undefined) {
        f += 0;
        $('.city-field-msg').html('This field is required..!')
    } else {

        f += 1;
    }
    //city
    let state = $('.state-field').val();
    if (state == '' || state == undefined) {
        f += 0;
        $('.state-field-msg').html('This field is required..!')
    } else {

        f += 1;
    }
    //city
    let zip = $('.zip-field').val();
    let zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/;
    if (zip == '' || zip == undefined) {
        f += 0;
        $('.zip-field-msg').html('This field is required..!')
    }
    // else if (zipCodePattern.test(zip) == false) {
    //     f = false;
    //     $('.zip-field-msg').html('Not in right format..!')
    // } 
    else {

        f += 1;
    }

    if (f == 11) {
        return true;
    } else {
        return false;
    }

}