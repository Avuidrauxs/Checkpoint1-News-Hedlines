




$(function() {
  $('.search')
    .bind('click', function(event) {
      $(".search-field").toggleClass("expand-search");
      $(".search-field").focus();
    })
});

$(function() {
  $('.button-like')
    .bind('click', function(event) {
      console.log('toggle');
      $(".button-like").toggleClass("liked");
    });
});

function myFunction() {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
