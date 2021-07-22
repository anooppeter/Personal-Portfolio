$(function(){

    $("#fname_error_message").hide();
    $("#email_error_message").hide();
    $("#phno_error_message").hide();
    $("#whitespace_error_message_one").hide();

    var error_fname = false;
    var error_phno = false;
    var error_email = false;
    var whitespace_error = false;

    $("#name").focusout(function(){
      check_fname();
      white_space_one();
    });
    $("#email").focusout(function() {
       check_email();
    });
    $("#phno").keyup(function() {
       check_phno();
    });

    function check_fname() {
       var pattern = /^[a-zA-Z\s]*$/;
       var fname = $("#name").val();
       if (pattern.test(fname) && fname !== '') {
          $("#fname_error_message").hide();
          $("#name").css("border-bottom","2px solid #ffb727");
       } else {
          $("#fname_error_message").html("only Characters allowed");
          $("#fname_error_message").show();
          $("#name").css("border-bottom","2px solid #F90A0A");
          error_fname = true;
       }
    }

    function white_space_one() {
      var userFname = document.getElementById('name').value;
      
      if(userFname.replace(/\s/g, "").length <= 0){
        $("#whitespace_error_message_one").html("Please Enter Your Fullname");
        $("#whitespace_error_message_one").show();
        $("#name").css("border-bottom","2px solid #F90A0A");
        whitespace_error = true;
      }else{
        $("#whitespace_error_message_one").hide();
      }
    }

    function check_email() {
       var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
       var email = $("#email").val();
       if (pattern.test(email) && email !== '') {
          $("#email_error_message").hide();
          $("#email").css("border-bottom","2px solid #ffb727");
       } else {
          $("#email_error_message").html("Invalid Email");
          $("#email_error_message").show();
          $("#email").css("border-bottom","2px solid #F90A0A");
          error_email = true;
       }
    }

    function check_phno() {

       var pattern = /^[6-9][0-9]{9}$/;
       var phno = $("#phno").val()
       if (pattern.test(phno) && phno !== '') {
          $("#phno_error_message").hide();
          $("#phno").css("border-bottom","2px solid #ffb727");
       } else {
          $("#phno_error_message").html("Enter valid 10 Digit Phone Number");
          $("#phno_error_message").show();
          $("#phno").css("border-bottom","2px solid #F90A0A");
          error_phno = true;
       }
    }

    

    $("#submit-form").submit(function(){
       error_fname = false;
       error_email = false;
       error_phno = false;
       whitespace_error = false
       

       check_fname();
       check_email();
       check_phno();
       white_space_one();
       

       if (error_fname === false && error_phno === false && error_email === false && whitespace_error ===false) {
           
          
               $.ajax({
                   url:" https://script.google.com/macros/s/AKfycbwIUq-83XqtKt0Bt67o1IaQs1hjLhfNc_RYoDvj/exec",
                   data:$("#submit-form").serialize(),
                   type:"post",
                   success:function (response){
                       alert("Form submitted successfully")
                       window.location.reload()
                       //window.location.href="https://google.com"
                   },
                   error:function (err){
                       alert("Something Error")
         
                   },  
               })
              alert("Registration Successfull");

          return true;
       } else {
          alert("Please Fill the form Correctly");
          return false;
       }
    });
});

