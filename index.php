<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Welcome | BMC Virtual Christmas Game 2021</title>

    <?php include("constant/header.php"); ?>
    
</head>

<body>
    <!-- <div class="content-wrap"> -->
        <!-- <div class="main"> -->
            <div class="container-fluid fill">
                            <div class="row align-items-center fill">
                              <div class="col-12 text-center">
                                <div class="card mx-auto my-auto fill">
                                  <!-- <div class="card-title">
                                      <h1 class="text-danger">Salutations!</h1>                            
                                  </div> -->
                                  <div class="card-body mx-auto">
                                  <h2><b>GAME BEGINS IN</b></h2>
                                  <br>
                                  <h1 id="demo"></h1>                          
                                </div>   
                              </div>
                            </div>                 
            </div>
        <!-- </div> -->
    <!-- </div> -->

    <?php include("constant/footer.php"); ?>
</body>

</html>

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
  html, body {
    background: black;
    height: 100%;
  }
@font-face {
  font-family: fontit;
  src: url(assets/fonts/MontserratLight.ttf);
}
.fill { 
    min-height: 100%;
    height: 100%;
}
.card {
  background: black;
  height: 100%;
}
.containererere { 
  height: 100%;
  width: 100%;
  position: relative;
  /* border: 3px solid green;  */
  background: black;
}
@media (min-width: 1px) {  
  h1 {font-size:4rem; color: white !important;font-family: fontit;} /*1rem = 16px*/  
  h2 {font-size:2rem; color: red !important; font-family: fontit;}  
}
@media (min-width: 544px) {  
  h1 {font-size:4rem; color: white !important; font-family: fontit;} /*1rem = 16px*/  
  h2 {font-size:2rem; color: red !important; font-family: fontit;}  
}
 
/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media (min-width: 768px) {  
  h1 {font-size:5rem; color: white !important; font-family: fontit;} /*1rem = 16px*/  
  h2 {font-size:3rem; color: red !important; font-family: fontit;}  
}
 
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
  h1 {font-size:6rem; color: white !important; font-family: fontit;} /*1rem = 16px*/  
  h2 {font-size:4rem; color: red !important; font-family: fontit;}  
}
 
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {  
  h1 {font-size:8rem; color: white !important; font-family: fontit;} /*1rem = 16px*/  
  h2 {font-size:6rem; color: red !important; font-family: fontit;}  
}
.card {
    background: black;
    margin: 7.5px 0;
    padding: 20px;
    border: 1px solid black;
    border-radius: 3px;
    box-shadow: 0 5px 20px rgb(0 0 0 / 10%);
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