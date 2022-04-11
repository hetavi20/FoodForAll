// var myN = {
//     val1: 'Blue',
//     val2: 'Orange'
// };
// var mySelect = $('#myN');
// $.each(myN, function(val, text) {
//     mySelect.append(
//         $('<option></option>').val(val).html(text)
//     );
// });

console.log("hi")

$(function() {
    var $select = $(".1-25");
    for (i = 1; i <= 25; i++) {
        $select.append($('<option></option>').val(i).html(i))
    }
});

$(function() {
    var $select = $(".1-50");
    for (i = 1; i <= 50; i++) {
        $select.append($('<option></option>').val(i).html(i))
    }
});


$(function() {
    $("#btnSubmit").click(function() {
        var ddlFruits = $("#ddlFruits");
        if (ddlFruits.val() == "-1") {
            //If the "Please Select" option is selected display error.
            // alert("Please select an option!");
            $('#select-type').html('This field is required..!')
            return false;
        }
        return true;
    });
});

//for create food package

// 1
$(function() {
    $("#btnSubmit").click(function() {
        var ddlFruits = $("#ddlFruits1");
        if (ddlFruits.val() == "-1") {
            //If the "Please Select" option is selected display error.
            // alert("Please select an option!");
            $('#select-type1').html('This field is required..!')
            return false;
        }
        return true;
    });
});


// 2
$(function() {
    $("#btnSubmit").click(function() {
        var ddlFruits = $("#ddlFruits2");
        if (ddlFruits.val() == "-1") {
            //If the "Please Select" option is selected display error.
            // alert("Please select an option!");
            $('#select-type2').html('This field is required..!')
            return false;
        }
        return true;
    });
});
// 3
$(function() {
    $("#btnSubmit").click(function() {
        var ddlFruits = $("#ddlFruits3");
        if (ddlFruits.val() == "-1") {
            //If the "Please Select" option is selected display error.
            // alert("Please select an option!");
            $('#select-type3').html('This field is required..!')
            return false;
        }
        return true;
    });
});

// 4
$(function() {
    $("#btnSubmit").click(function() {
        var ddlFruits = $("#ddlFruits4");
        if (ddlFruits.val() == "-1") {
            //If the "Please Select" option is selected display error.
            // alert("Please select an option!");
            $('#select-type4').html('This field is required..!')
            return false;
        }
        return true;
    });
});