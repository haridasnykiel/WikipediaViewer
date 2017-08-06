$(document).ready(function(){

var APIdata;
var count = 0;

  $("#searchButton").click(function() {

    if(count > 1) {
      $( "li" ).remove();
      count--;
    }

    if(count === 0) {
      $(this).html("Search");
      count++;
    }

    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=" + $("#searchBox").val() + "&origin=*", function(data) {
      APIdata = data.query.search;

      for(var result in APIdata) {
        var title = APIdata[result].title;
        var snippet = APIdata[result].snippet;
        addHTMLList(title, snippet);

        $( "a" ).attr( "href", "http://en.wikipedia.org/wiki/" +  title);
      }
      
      count++;

    });

    $("#searchBox").toggleClass( "hidden", false, 10000, function() {
      $("#resContainer").toggleClass( "hidden", false, 10000);
    });


    console.log(count);
  });

});

function addHTMLList(title, snippet) {

  $("<a><br><li>"+ title +"<br>"+ snippet +"</li><br><br></a>", {
    css: {
        width:      '40px',
        height:     '40px'
    }
}).appendTo( "#response" ).animate({
    left:  '100%'
}, 3000);

}
