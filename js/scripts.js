$(document).ready(function() {
  $("#track").submit(function(event) {
    event.preventDefault();

    var name = $("#name").val();
    var email = $("#email").val();
    var interests = $("#interests").val();
    var dev = $("#dev").val();

    if (interests === "front-end" && dev === "software") {
      $("#results").show()
      $("#nameInsert").append(name)
      $("#emailInsert").append(email)
      $("#tracks").text("Ruby/Rails")
    }
    else if (interests === "front-end" && dev === "app") {
      $("#results").show()
      $("#nameInsert").append(name)
      $("#emailInsert").append(email)
      $("#tracks").text("Java")
    }
    else if (interests === "front-end" && dev === "webite") {
      $("#results").show()
      $("#nameInsert").append(name)
      $("#emailInsert").append(email)
      $("#tracks").text("CSS")
    }
    else if (interests === "back-end" && dev === "software") {
      $("#results").show()
      $("#nameInsert").append(name)
      $("#emailInsert").append(email)
      $("#tracks").text("Ruby/Rails")
    }
    else if (interests === "back-end" && dev === "app") {
      $("#results").show()
      $("#nameInsert").append(name)
      $("#emailInsert").append(email)
      $("#tracks").text("Java")
    }
    else if (interests === "back-end" && dev === "website") {
      $("#results").show()
      $("#nameInsert").append(name)
      $("#emailInsert").append(email)
      $("#tracks").text("CSS")
    }
  });
});
