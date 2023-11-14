$(document).ready(function(){
  //validate name
  $("#namecheck").hide();
  let nameError = true;
  $("#name").keyup(function(){
    validateName();
    
  });

  function validateName(){
    var nameValue = $("#name").val();
    if(nameValue.length == ""){
      $("#namecheck").show();
      nameError = false;
      return false;
    }else if(nameValue.length < 4 || nameValue.length > 30){
      $("#namecheck").html("**length of username must be between 3 and 30");
      $("#namecheck").show();
      nameError = false;
      return false;
    }else{
      $("#namecheck").hide();
    }

  }

  //validate mail
  const email = document.getElementById("email");
  email.addEventListener("blur", () => {
      let regex = 
      /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
      let s = email.value;
      if (regex.test(s)) {
          email.classList.remove("is-invalid");
          emailError = true;
      } else {
          email.classList.add("is-invalid");
          emailError = false;
      }
  })
    //validate messge
  $("#messagecheck").hide();
  let messageError = true;
  $("#message").keyup(function(){
    validateMessage();
    
  });

  function validateMessage(){
    let messageValue = $("#message").val();
    if(messageValue.length == ""){
      $("#messagecheck").show();
      messageError = false;
      return false;
    }else if(messageValue.length < 20 || messageValue.length > 215){
      $("#messagecheck").show();
      $("#messagecheck").html("** message must have min 20 char-");
      messageError = false;
      return false;
    }else{
      $("#messagecheck").hide();
      
    }

  }
  // Submit button
  $("#submit").click(function () {
      validateName();
      //validateEmail();
      validateMessage();
      if (
          nameError == true &&
          messageError == true &&
          emailError == true
      ) {
          return true;
      } else {
          return false;
      }
  });

})
