$(document).ready(function() {
  $("#track").submit(function(event) {
    event.preventDefault();

    var name = $("#name").val();
    var email = $("#email").val();
    var comment = $("#comment").val();
    var interests = $("#interests").val();
    var dev = $("#dev").val();

    if (interests === "front-end" && dev === "software") {
      $("#results").show()
      $("#nameInsert").text(name)
      $("#emailInsert").text(email)
      $("#commentInsert").text(comment)
      $("#trackInsert").text("Ruby/Rails")
    }
    else if (interests === "front-end" && dev === "app") {
      $("#results").show()
      $("#nameInsert").text(name)
      $("#emailInsert").text(email)
      $("#commentInsert").text(comment)
      $("#trackInsert").text("Java")
    }
    else if (interests === "front-end" && dev === "webite") {
      $("#results").show()
      $("#nameInsert").text(name)
      $("#emailInsert").text(email)
      $("#trackInsert").text("CSS")
    }
    else if (interests === "back-end" && dev === "software") {
      $("#results").show()
      $("#nameInsert").text(name)
      $("#emailInsert").text(email)
      $("#commentInsert").text(comment)
      $("#trackInsert").text("Ruby/Rails")
    }
    else if (interests === "back-end" && dev === "app") {
      $("#results").show()
      $("#nameInsert").text(name)
      $("#emailInsert").text(email)
      $("#commentInsert").text(comment)
      $("#trackInsert").text("Java")
    }
    else if (interests === "back-end" && dev === "website") {
      $("#results").show()
      $("#nameInsert").text(name)
      $("#emailInsert").text(email)
      $("#commentInsert").text(comment)
      $("#trackInsert").text("CSS")
    }
  });
});
