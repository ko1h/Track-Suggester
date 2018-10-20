$(document).ready(function() {
  $("#track").submit(function(event) {
    event.preventDefault();

    var name = $("#name").val();
    var interests = $("#interests").val();
    var dev = $("#dev").val();

    if (interests === "front-end" && dev === "software") {
      $("#results").show()
      $("#nameInsert").append(name)
      $("#tracks").text("Ruby/Rails")
    }
    else if (interests === "front-end" && dev === "app") {
      $("#results").show()
      $("#nameInsert").append(name)
      $("#tracks").text("Java/Android")
    }
  });
});
