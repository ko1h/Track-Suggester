$(document).ready(function() {
  $("form#track").submit(function(event) {
    event.preventDefault();
    var nameinput = ($("#name").val());
    $(".name").text(nameinput);

    var emailInput = ($("#email").val());
    $(".email").text(emailInput);

    var interestsInput = ($("#interests").val());
    $(".interests").text(interestsInput);

    var importantInput = ($("#important").val());
    $(".important").text(importantInput);


    var dev = $("input:radio[name=dev]:checked").val();
    $("#track-modal").toggle();
    event.preventDefault();
  });
});
