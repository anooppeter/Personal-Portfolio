$(function(){

    $("#fname_error_message").hide();
    $("#email_error_message").hide();
    $("#phno_error_message").hide();

    var error_fname = false;
    var error_phno = false;
    var error_email = false;

    $("#name").focusout(function(){
      check_fname();
    });
    $("#email").focusout(function() {
       check_email();
    });
    $("#phno").focusout(function() {
       check_phno();
    });

    function check_fname() {
       var pattern = /^[a-zA-Z\s]*$/;
       var fname = $("#name").val();
       if (pattern.test(fname) && fname !== '') {
          $("#fname_error_message").hide();
          $("#name").css("border-bottom","2px solid #34F458");
       } else {
          $("#fname_error_message").html("Should contain only Characters");
          $("#fname_error_message").show();
          $("#name").css("border-bottom","2px solid #F90A0A");
          error_fname = true;
       }
    }

    function check_email() {
       var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
       var email = $("#email").val();
       if (pattern.test(email) && email !== '') {
          $("#email_error_message").hide();
          $("#email").css("border-bottom","2px solid #34F458");
       } else {
          $("#email_error_message").html("Invalid Email");
          $("#email_error_message").show();
          $("#email").css("border-bottom","2px solid #F90A0A");
          error_email = true;
       }
    }

    function check_phno() {
       var pattern = /^\d{10}$/;
       var phno = $("#phno").val()
       if (pattern.test(phno) && phno !== '') {
          $("#phno_error_message").hide();
          $("#phno").css("border-bottom","2px solid #34F458");
       } else {
          $("#phno_error_message").html("Enter 10 digit Mobile number");
          $("#phno_error_message").show();
          $("#phno").css("border-bottom","2px solid #F90A0A");
          error_phno = true;
       }
    }

    

    $("#submit-form").submit(function(){
       error_fname = false;
       error_email = false;
       error_phno = false;
       

       check_fname();
       check_email();
       check_phno();
       

       if (error_fname === false && error_phno === false && error_email === false ) {
           
          
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

