$(document).ready(function() {
  $("form#track").submit(function(event) {
    event.preventDefault();
    var interests = parseInt($("#interests").val());
    var div = $("input:radio[name=div]:checked").val();

    if (div === "software" && interests === "front-end") {
      $('#track-modal').show();
    });
  });
});





// $(document).ready(function() {
//   $("form#track").submit(function(event) {
//     event.preventDefault();
//     var nameinput = ($("#name").val());
//     $(".name").text(nameinput);
//
//     var emailInput = ($("#email").val());
//     $(".email").text(emailInput);
//
//     var interestsInput = ($("#interests").val());
//     $(".interests").text(interestsInput);
//
//     var devInput = $("input:radio[name=dev]:checked").val();
//     $(".dev").text(devInput);
//
//     var commentsInput = ($("#comments").val());
//     $(".comments").text(commentsInput);
//
//     var int1 = parseInt($("#interests").val());
//
//     if (int1 === "front-end") {
//       result = ruby
//     $("#output").text(result);
//
//     $("#track-modal").toggle();
//     event.preventDefault();
//   });
// });
