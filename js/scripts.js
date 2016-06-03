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
      $(".destination").text("Paris");
      $(".name").text(nameInput);
      $("#results").show();
      $(".location").text("Paris!");
      $("#paris").show();
    }

    else if (result > -4 && result < 0){
      $(".destination").text("Brazil");
      $(".name").text(nameInput);
      $("#results").show();
      $(".location").text("Brazil!");
      $("#brazil").show();
    }

    else if (result === 0){
      $(".destination").text("Austria");
      $(".name").text(nameInput);
      $("#results").show();
      $(".location").text("Austria!");
      $("#austria").show();
    }

    else if (result >0 && result <= 4){
      $(".destination").text("Barcelona");
      $(".name").text(nameInput);
      $("#results").show();
      $(".location").text("Barcelona!");
      $("#barcelona").show();
    }

    else if (result >4 && result <= 8) {
      $(".destination").text("Tokyo");
      $(".name").text(nameInput);
      $("#results").show();
      $(".location").text("Tokyo!");
      $("#tokyo").show();
    }
    // $("modal").hide();

  });
