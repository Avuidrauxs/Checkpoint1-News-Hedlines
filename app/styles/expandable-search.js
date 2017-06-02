
$(document).ready(() => {
  $('.search').click(() => {
    $(".search-field").toggleClass("expand-search");
    $(".search-field").focus();
});

  $('.button-like').click( () =>{
    $(".button-like").toggleClass("liked");
  });

});
