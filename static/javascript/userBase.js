/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


// jquary

//for dispaly user details
$(document).ready(function() {

    $('.detail').hide();
    $('.btn1').click(function() {
        console.log("click on button 1");
        $('.detail').fadeToggle();
    });
});


//change password


function validate() {
    var c = 0;
    let f = false;
    //username validation
    console.log("starting")
    let uname = $('.cpassword-field').val();
    console.log(uname)
    if (uname == '' || uname == undefined) {
        f = false;
        $('.cpassowrd-field-msg').html('This field is required..!')
    } else {
        c++;
        f = true;
    }

    // password validation
    let password = $('.npassword').val();
    let exp1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (password == '' || password == undefined) {
        f = false;
        console.log('hi')


        $('.npassword-field-msg').html('This field is required..!')
    } else {
        f = true;
        c++;
    }
    //confirm password
    let p1 = $('.npassword').val();
    let p2 = $('.cnpassword-field').val();

    if (p2 == '' || p2 == undefined) {
        f = false;

        $('.cnpassword-field-msg').html('This field is required..!')
    } else if (p1 != p2) {
        f = false;
        $('.cnpassword-field-msg ').html('Passwords did not match..!')
    } else {
        f = true;
        c++;
    }
    console.log(c)

    if (c == 3) {
        f = true;
    } else {
        f = false;
    }


    return f;

}

//feedback validation