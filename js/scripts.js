$(document).ready(function() {
  $("form#booking").submit(function(event) {
    event.preventDefault();
    var nameInput = ($("#name").val());
    $(".name").text(nameInput);

    var foodInput = ($("#food").val());
    $(".food").text(foodInput);

    var dateInput = ($("#born").val());
    $(".born").text(dateInput);

    var timeInput = ($("#music").val());
    $(".music").text(timeInput);

    var flavorInput = $("input:radio[name=flavor]:checked").val();
    $("#appointment-modal").toggle();
    event.preventDefault();
  });
});
