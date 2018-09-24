//=====================================================//
//                        NAVBAR                       //
//=====================================================//
$(document).ready(function() {
  $(".hamburger" ).click(function() {
    if(!$(".navigation").hasClass("open")) {
      $(".navigation").slideDown();
      $(".navigation").addClass("open");
    } else {
      $(".navigation").slideUp();
      $(".navigation").removeClass("open");
    }
  });
  $(window).resize(function() {
    if($(window).width() > 991) {
        $('.navigation').show().removeClass("open");
    } else {
        $('.navigation').hide();
    }
  }).resize();

  $(".pages").click(function() {
    if($(".navigation").hasClass("open")) {
      $(".navigation").animate({height: "toggle"}, {duration: 500});
      $(".navigation").removeClass("open");
    }
  });
  $(".navigation").click(function(event){
    event.stopPropagation();
  });
  // CLOSE MENU WITH ESCAPE KEY //
  $(document).keydown(function(e) { 
    if (e.keyCode == 27 && ($(".navigation").hasClass("open"))) { 
      $(".navigation").animate({height: "toggle"}, {duration: 500});
      $(".navigation").removeClass("open");
    }
  });
});

//=====================================================//
//                          APP                        //
//=====================================================//

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

// When you click the save button
$(document).on("click", "a.save", function() {
  var thisId = $(this).attr("data-id");
  $.ajax({
      method: "POST",
      url: "/articles/save/" + thisId
  }).done(function() {
      window.location = "/"
  })
});

// When you click the delete button
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
  // the Movie article id
  var thisId = $(this).attr("data-id");
  // delete button for individual note
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
  }).then(function(data) {
    // Close modal
    $(".modalNote").modal("hide");
    window.location = "/saved"
  })
});