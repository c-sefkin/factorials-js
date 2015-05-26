var rFactorial = function(num) {
  if (num === 0) {
    return 1;
  }
  else {
    return num * rFactorial(num-1);
  }
}

$(document).ready(function() {

  $("form.num-form").submit(function(event) {
    var num = parseInt($(".num").val());

    var result = rFactorial(num);

    $(".answer").text(result);
    // $(".result").text(result);
    // $("#results").show();
    event.preventDefault();
  });
});
