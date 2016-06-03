$('form').submit(function(event){
    event.preventDefault();

    var nameInput = $("input#name").val();
    var q1 = parseInt($("#cost").val());
    var q2 = parseInt($("#safety").val());
    var q3 = parseInt($("#food").val());
    var q4 = parseInt($("#activities").val());
    var q5 = $("input:radio[name=passport]:checked").val();
    var result = q1 + q2 + q3 + q4;

    if (result >= -8 && result <= -4){
      $(".destination").text("Brazil")
      $(".name").text(nameInput);
      $("#results").show();
      $(".location").text("Brazil!");

    }
    else if (result > -4 && result < 0){
      $(".destination").text("South Korea")
      $(".name").text(nameInput);
      $("#results").show();
      $(".location").text("South Korea!");
    }
    else if (result === 0){
      $(".destination").text("Chicago")
      $(".name").text(nameInput);
      $("#results").show();
      $(".location").text("Chicago!");
    }
    else if (result >0 && result <= 4){
      $(".destination").text("Barcelona")
      $(".name").text(nameInput);
      $("#results").show();
      $(".location").text("Barcelona!");
    }
    else if (result >4 && result <= 8) {
      $(".destination").text("Hong Kong")
      $(".name").text(nameInput);
      $("#results").show();
      $(".location").text("Hong Kong!");
    }
  });
