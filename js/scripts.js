$(display).ready(function() {

  $(form).submit(function(event){
    event.preventDefault();
    var name = ("#myModal1").val();
    var q1 = parseInt(("#myModal2").val());
    var q2 = parseInt(("#myModal3").val());
    var q3 = parseInt(("#myModal4").val());
    var q4 = parseInt(("#myModal5").val());
    var q5 = $("input:radio[name=passport]:checked").val();
    var result = q1 + q2 + q3 + q4 +q5;

    if (result ===0) {

    }
  });
});
