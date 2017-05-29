$(document).foundation();

$(function() {
  $('.button-like')
    .bind('click', function(event) {
      console.log('toggle');
      $(".button-like").toggleClass(".liked");
    });
});
