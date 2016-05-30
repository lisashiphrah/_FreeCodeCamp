//Trigger Click Events with jQuery
$(document).ready(function() {
    // Only change code below this line.
    $("#getMessage").on("click", function(){
      $("#getMessage").addClass('message');
    });
    // Only change code above this line.
  });


 //Change Text with Click Events
 $(document).ready(function() {
    $("#getMessage").on("click", function(){
      // Only change code below this line.
      $(".message").html("Here is the message");
      // Only change code above this line.
    });
  });


 //Get JSON with the jQuery getJSON Method
 $(document).ready(function() {
    $("#getMessage").on("click", function(){
      // Only change code below this line.
      $.getJSON("/json/cats.json", function(json) {
        $(".message").html(JSON.stringify(json));
      });
      // Only change code above this line.
    });
  });


//Convert JSON Data to HTML
$(document).ready(function() {
    $("#getMessage").on("click", function() {
      $.getJSON("/json/cats.json", function(json) {
        var html = "";
        // Only change code below this line.
        json.forEach(function(val) {
        var keys = Object.keys(val);
        html += "<div class = 'cat'>";
        keys.forEach(function(key) {
          html += "<b>" + key + "</b>: " + val[key] + "<br>";
        });
        html += "</div><br>";
      });
        // Only change code above this line.
        $(".message").html(html);
      });
    });
  });


//Render Images from Data Sources
$(document).ready(function() {
    $("#getMessage").on("click", function() {
      $.getJSON("/json/cats.json", function(json) {
        var html = "";
        json.forEach(function(val) {
          html += "<div class = 'cat'>";
          // Only change code below this line.
          html += "<img src = '" + val.imageLink + "'>";
          // Only change code above this line.
          html += "</div>";
        });
        $(".message").html(html);
      });
    });
  });


  //Prefilter JSON
  $(document).ready(function() {
    $("#getMessage").on("click", function() {
      $.getJSON("/json/cats.json", function(json) {
        var html = "";
        // Only change code below this line.
        json = json.filter(function(val) {
          return (val.id !== 1);
        });
        // Only change code above this line.
        json.forEach(function(val) {
          html += "<div class = 'cat'>"
          html += "<img src = '" + val.imageLink + "'>"
          html += "</div>"
        });
        $(".message").html(html);
      });
    });
  });


  //Get Geolocation Data
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
    });
  }


  /