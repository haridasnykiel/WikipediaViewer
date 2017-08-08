$(document).ready(function(){

var APIdata;
var count = 0;

  $("#searchButton").click(function() {
    $( "li, a, br" ).remove();
    $(this).html("Search");


    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=" + $("#searchBox").val() + "&origin=*", function(data) {
      APIdata = data.query.search;

      for(var result in APIdata) {
        var title = APIdata[result].title;
        var snippet = APIdata[result].snippet;
        addHTMLList(title, snippet);

        $( "a" ).attr( "href", "http://en.wikipedia.org/wiki/" +  title);
      }
    });



    $("#searchBox").toggleClass( "hidden", false, 10000, function() {
      $("#resContainer").toggleClass( "hidden", false, 10000);
    });

    console.log(count);
    animateLiElements();
  });



});

function animateLiElements() {

  $( "li" ).on({
    mouseenter: function() {
      $( this ).animate({
        borderWidth: "5px"

      }, 1000);
      console.log("hello");
    },
    mouseleave: function() {
      $( this ).animate({
        borderWidth: "1px"
      }, 1000);
    }
  });
}

function addHTMLList(title, snippet) {

  $( "#response" ).prepend("<a><br><li>"+ title +"<br>"+ snippet +"</li><br><br></a>");

}
