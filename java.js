/*

Author: Mihr Pathak
*/


/*-----Below is the script for the image slider -----*/
var myIndex = 0;
carousel();
function carousel() { /*initialising the function*/
    var i;
    var x = document.getElementsByClassName("mySlides");
    /*get's the images from the set class*/
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
        /*if there is just one image, show that image. no slide */
    }
    myIndex++;
    /* if there is more image, slide the images in block every 2 seconds */
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

/*--------------- hash change control-----------------------*/
/* https://github.com/twbs/bootstrap/issues/1768
*/
  var shiftWindow = function() { scrollBy(0, -180) };
    window.addEventListener("hashchange", shiftWindow);
    function load() { if (window.location.hash) shiftWindow(); }


/*--------- below is the script for Google Map API----*/
/* This is available from the following website:  https://developers.google.com/maps/documentation/javascript/adding-a-google-map  */

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









