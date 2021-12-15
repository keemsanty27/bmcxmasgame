<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Save Point | BMC Virtual Christmas Game 2021</title>

    <?php include("constant/header.php"); ?>

</head>

<body onload="timeChecker()">
    <div class="content-wrap">
        <div class="main">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-8 p-r-0 title-margin-right">
                        <div class="page-header">
                            <div class="page-title">
                                <h1 class="text-primary">Welcome to the first Save Point!</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="main-content">
                            <div class="card mx-auto">
                                <div class="card-title">
                                    <h1 class="text-danger">Hello Again! &#128075; </h1>
                                    <br/>
                                </div>
                                <div class="card-body">
                                    <center>
                                    <img class="img-fluid" src="assets/images/floppy-icon.png" height="200px" width="200px" alt="Save Point"/>
                                    </center>
                                    <p class="text-justify"><h5> You have reached a <b>SAVE POINT.</b> You are spared from going back to Level 1 when you make a mistake.</h5></p>
                                    <p class="text-justify"><h5> Five (5) levels down but there are more to go. Are you ready to continue?</h5></p>
                                        <br/>
                                    <p class="text-justify">Going back and doing other stuff cancels out the save point.</p>  
                                   <div class="row">
                                        <div class="col text-center">
                                            <a href="OPD.php" class="btn btn-lg btn-rounded btn-success mx-auto">Let's Carry On!</a>
                                        </div>  
                                   </div>
                                </div>
                            </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="footer">
                                <p>2021 © IHOMP</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>

    <?php include("constant/footer.php"); ?>
</body>

</html>

<script>
function timeChecker() {
    var countDownDate = new Date("Dec 17, 2021 13:00:00").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    if (distance > 0) {        
        // document.getElementById("demo").innerHTML = "EXPIRED";
        window.location = "index.php";
    }
}    
</script>