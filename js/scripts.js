$(document).ready(function() {
  $("form#track").submit(function(event) {
    event.preventDefault();
    var nameinput = ($("#name").val());
    $(".name").text(nameinput);

    var emailInput = ($("#email").val());
    $(".email").text(emailInput);

    var interestsInput = ($("#interests").val());
    $(".interests").text(interestsInput);

    var companyInput = ($("#company").val());
    $(".company").text(companyInput);

    var devInput = $("input:radio[name=dev]:checked").val();
    $(".dev").text(devInput);

    $("#track-modal").toggle();
    event.preventDefault();
  });
});
