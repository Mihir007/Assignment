/*-----Below is the script for the image slider -----*/
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

/*--------------- hash change control------------------------*/
/* file:///Users/Mihir/Documents/Github/index.html */
  var shiftWindow = function() { scrollBy(0, -180) };
    window.addEventListener("hashchange", shiftWindow);
    function load() { if (window.location.hash) shiftWindow(); }


/*--------- below is the script for Google Map API----*/
/* https://developers.google.com/maps/documentation/javascript/adding-a-google-map  */

function initMap() {
        var uluru = {lat: 52.62973, lng: -1.13897};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 19,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
    }









