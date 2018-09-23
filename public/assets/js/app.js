// Scrape button
$(document).on("click", "#scrape", function() {
  $.ajax({
    method: "GET",
    url: "/scrape",
  }).done(function(data) {
    console.log(data)
    window.location = "/"
  })
});

//Handle Save Article button
$(document).on("click", "a.save", function() {
  var thisId = $(this).attr("data-id");
  $.ajax({
      method: "POST",
      url: "/articles/save/" + thisId
  }).done(function() {
      window.location = "/"
  })
});

//Handle Delete Article button
$(document).on("click", "a.delete", function() {
  var thisId = $(this).attr("data-id");
  $.ajax({
      method: "POST",
      url: "/articles/delete/" + thisId
  }).done(function() {
      window.location = "/saved"
  })
});

$(document).on("click", "a.note", function() {
  // the NEWS article id
  var thisId = $(this).attr("data-id");
  // delete button for individual note
  $('.deletenote').attr("data-article-id", thisId);
});

// When you click the savenote button
$(document).on("click", "#savenote", function() {
  // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("data-id");
  
  // Run a POST request to add note, using what's entered in the inputs
  if (!$("#titleinput" + thisId).val()) {
    alert("please enter a note to save")
  } else {
    $.ajax({
      method: "POST",
      url: "/notes/save/" + thisId,
      data: {
        // Value taken from title input
        title: $("#titleinput" + thisId).val(),
        // Value taken from note textarea
        body: $("#bodyinput" + thisId).val()
      }
    }).then(function(data) {
      // Log the response
      console.log(data);
      // Close modal
      $(".modalNote").modal("hide");
      window.location = "/saved"
    });
  }
  // Also, remove the values entered in the input and textarea for note entry
  $("#titleinput").val("");
  $("#bodyinput").val("");
});

// When you click the deletenote button
$(document).on("click", "#deletenote", function() {
  var noteId = $(this).attr("data-note-id");
  var articleId = $(this).attr("data-article-id");
  $.ajax({
    method: "DELETE",
    url: "/notes/delete/" + noteId + "/" + articleId
  }).then(function() {
    // Log the response
    console.log(data);
    // Close modal
    $(".modalNote").modal("hide");
    window.location = "/saved"
  })
});
