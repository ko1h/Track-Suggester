$(document).ready(function() {
  $("form#track").submit(function(event) {
    event.preventDefault();
    var nameinput = ($("#name").val());
    $(".name").text(nameinput);

    var emailInput = ($("#email").val());
    $(".email").text(emailInput);

    var interestsInput = ($("#interests").val());
    $(".interests").text(interestsInput);

    var devInput = $("input:radio[name=dev]:checked").val();
    $(".dev").text(devInput);

    var commentsInput = ($("#comments").val());
    $(".comments").text(commentsInput);

    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result = add(number1, number2);
    $("#output").text(result);

    $("#track-modal").toggle();
    event.preventDefault();
  });
});
