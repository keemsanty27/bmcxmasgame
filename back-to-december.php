<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Level 13</title>

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
                                <h1 id="header13" class="text-danger">Level - 13</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="main-content">
                            <div class="card mx-auto">
                                <div class="card-title">
                                    <h1 class="text-danger">The following are the health programs of BMC on the month of December EXCEPT:</h1>
                                </div>
                                <div class="card-body">
                                <div class="input-states">
                                        <form class="form-horizontal">
                                            <div class="form-group has-success">
                                                <div class="row">
                                                    <div class="col-md-4">
                                                    <img class="img-fluid" src="assets/images/road-victims-remembrance.jpg" alt="Road Victims Remembrance"/>
                                                    </div>
                                                    <div class="col-md-6">
                                                    <h5> Options: </h5>
                                                        <br>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="level1Radio" id="level13_choice1">
                                                        <label class="form-check-label" for="level13_choice1">
                                                        <h4>National Consciousness Day for the Elimination of VAWC</h4>
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="level1Radio" id="level13_choice2">
                                                        <label class="form-check-label" for="level13_choice2">
                                                        <h4>Firecrackers Inj<u>u</u>ry Prevention Month</h4>
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="level1Radio" id="level13_choice3">
                                                        <label class="form-check-label" for="level13_choice3">
                                                        <h4>Linggo ng Kabataan</h4>
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="level1Radio" id="level13_choice4">
                                                        <label class="form-check-label" for="level13_choice4">
                                                        <h4>Ear, Nose and Throat Consciousness Week</h4>
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="level1Radio" id="level13_choice3">
                                                        <label class="form-check-label" for="level13_choice5">
                                                        <h4>World AIDS Day</h4>
                                                        </label>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="row">
                                        <div class="col text-center">
                                            <button id="level13" class="btn btn-md btn-rounded btn-primary">Submit</button>
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