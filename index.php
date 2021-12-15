<!-- Display the countdown timer in an element -->
<!-- <div class="center">
<h2 class="txt1">GAME BEGINS IN</h2>
<br><br>
<h1 class="txt" id="demo"></h1>
</div> -->

<div class="container">
<div class="center1">
  <p class="txt1"><b>GAME BEGINS IN</b></p>
</div>
<div class="center"> 
  <p class="txt" id="demo"></p>
</div>
</div>

<!-- <div class="container">
  <div class="vertical-center">
  
  </div>
</div> -->

<script>
// Set the date we're counting down to
var countDownDate = new Date("Dec 17, 2021 13:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    // document.getElementById("demo").innerHTML = "EXPIRED";
    window.location = "welcome.php";
  }
}, 1000);
</script>

<style>
@font-face {
  font-family: fontit;
  src: url(assets/fonts/MontserratLight.ttf);
}
.container { 
  height: 100%;
  width: 100%;
  position: relative;
  /* border: 3px solid green;  */
  background: black;
}
.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.center1 {
  margin: 0;
  position: absolute;
  top: 40%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.txt {
  font-size: 8rem;
  font-family: fontit;  
  color: red !important;  
}
.txt1 {
  font-size: 6rem;
  font-family: fontit;  
  color: white !important;

}
</style>