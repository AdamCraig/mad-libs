
$(document).ready(function() {
  $("form#favorite-things").submit(function(event) {
      event.preventDefault();

    var favoriteThings = [ $("#favorite1").val(), $("#favorite2").val(), $("#favorite3").val(), $("#favorite4").val() ];

    // $("#output").text(favoriteThings);

    var firstThreeFavoriteThings = [];
    firstThreeFavoriteThings.push(favoriteThings[1]);
    firstThreeFavoriteThings.push(favoriteThings[0]);
    firstThreeFavoriteThings.push(favoriteThings[2]);

    $("#secondFavorite").text(firstThreeFavoriteThings[0]);
    $("#firstFavorite").text(firstThreeFavoriteThings[1]);
    $("#thirdFavorite").text(firstThreeFavoriteThings[2]);
  });
});
