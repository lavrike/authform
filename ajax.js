$("#submit").click(function(){
    $.ajax({
    type: "POST",
    url: "login.php",
    data: "name="+$("#name1").val()+"&email="+$("#email").val()+"&pass="+$("#password").val(),
    success: function(reply){
      if (reply == 'Ok') {
        window.location.href = "greetings.html";
      } else {
        window.alert(reply);
      }
    }
  })
});