<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Congratulations! | BMC Virtual Christmas Game 2021</title>

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
                                <h1 class="text-danger">You made it!</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="main-content">
                            <div class="card mx-auto">
                                <div class="card-title">
                                    <h1 class="text-danger">Well done!</h1>
                                </div>
                                <div class="card-body">
                                   <p class="text-justify"><h5> You have successfully, answered all of the questions.</h5></p>
                                   <br>
                                   <p class="text-justify"><h5> You are almost done.</h5></p>
                                   <p class="text-justify"><h5> Click the link below and take the <b>key</b> with you.</h5></p>
                                   <p class="text-justify"><h5> Hurry, before other treasure seekers claim the prize.</h5></p>
                                        <br/>
                                   <p class="text-justify"><h4>The key: THETREASUREISMINE</h4></p>
                                   <p class="text-justify"><h4> Are you fast enough? are you smart enough? ;)</h4></p>
                                   <div class="row">
                                        <div class="col text-center">
                                            <a href="level-1.php" class="btn btn-lg btn-rounded btn-success mx-auto">Click Me!</a>
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