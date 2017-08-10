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

function addHTMLList(title, snippet) {

  $( "#response" ).prepend("<a><br><li><span>"+ title +"</span><br>"+ snippet +"</li><br><br></a>");

  $( "li" ).on({
    mouseenter: function() {
      $( this ).animate({
        borderWidth: "5px"

      }, 500);
      $( "span" ).animate({
        color: "#00cca3"

      }, 500);
    },
    mouseleave: function() {
      $( this ).animate({
        borderWidth: "1px"
      }, 500);
      $( "span" ).animate({
        color: "#001a11"
      }, 500);
    }

  });

  $("a").attr( "target", "_newtab" );
}
