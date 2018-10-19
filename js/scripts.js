$(document).ready(function() {
  $("form#track").submit(function(event) {
    event.preventDefault();
    var companyinput = ($("#company").val());
    $(".company").text(companyinput);

    var interestsInput = ($("#interests").val());
    $(".interests").text(interestsInput);

    var importantInput = ($("#important").val());
    $(".important").text(importantInput);

    var timeInput = ($("#music").val());
    $(".music").text(timeInput);

    var icecream = $("input:radio[name=icecream]:checked").val();
    $("#track-modal").toggle();
    event.preventDefault();
  });
});
