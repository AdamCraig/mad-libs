$(document).ready(function() {
  $("#mad-libs form").submit(function(event) {
    // var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
    //
    // blanks.forEach(fuction(blank) {
    //   var userInput = $("input#" + blank).val();
    //   $("." + blank).text(userInput);
    // });

    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput= $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});

//
// $(document).ready(function() {
//   $("form#favorite-things").submit(function(event) {
//       event.preventDefault();
//
//     var favoriteThings = [ $("#favorite1").val(), $("#favorite2").val(), $("#favorite3").val(), $("#favorite4").val() ];
//
//     // $("#output").text(favoriteThings);
//
//     var firstThreeFavoriteThings = [];
//     firstThreeFavoriteThings.push(favoriteThings[1]);
//     firstThreeFavoriteThings.push(favoriteThings[0]);
//     firstThreeFavoriteThings.push(favoriteThings[2]);
//
//     $("#secondFavorite").text(firstThreeFavoriteThings[0]);
//     $("#firstFavorite").text(firstThreeFavoriteThings[1]);
//     $("#thirdFavorite").text(firstThreeFavoriteThings[2]);
//   });
// });
