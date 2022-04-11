console.log("hi")

function validate() {
    let f = false;
    //name validation
    let name = $('.name-field').val();
    if (name == '' || name == undefined) {
        f = false;
        $('.name-field-msg').html('Name is reqired.!!')
    } else {
        f = true;
    }
    //name validation
    let pass = $('.password-field').val();
    if (pass == '' || pass == undefined) {
        f = false;
        $('.password-field-msg').html('Password is reqired.!!')
    } else {
        f = true;
    }




    return f;

}