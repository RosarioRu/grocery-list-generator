$(document).ready(function() {
  $("#grocery-list").submit(function(event) {
    event.preventDefault();
    let itemOne=$("input#item1").val();
    let itemTwo=$("input#item2").val();
    let itemThree=$("input#item3").val();

    const foodArray=[itemOne, itemTwo, itemThree];
    let foodUppercased = [];
    foodArray.forEach(function(element) {
      foodUppercased.push(element.toUpperCase());
      foodUppercased.sort();
    });

    foodUppercased.forEach(function(thing) {
      $(".insert-here").append(("<li>"+ thing +"</li>"));
    });

    $(".the-list").hide();
    $("#results-paragraph").show();    
    
  });
});