<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Level 1</title>

    <?php include("constant/header.php"); ?>
    
</head>

<body>
    <div class="content-wrap">
        <div class="main">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-8 p-r-0 title-margin-right">
                        <div class="page-header">
                            <div class="page-title">
                                <h1 id="header1" class="text-danger">Level - 1</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="main-content">
                            <div class="card mx-auto">
                                <div class="card-title">
                                    <h1 class="text-danger">When was the inauguration of our very own Cardiac Center?</h1>
                                </div>
                                <div class="card-body">

                                <div class="input-states">
                                        <form class="form-horizontal">
                                            <div class="form-group has-success">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                    <img class="img-fluid" src="assets/images/cardiac_center.jpg" alt="Cardiac Center Photo" />
                                                    </div>
                                                    <div class="col-md-6">
                                                        <h5> Options: </h5>
                                                        <br>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="level1Radio" id="level1_choice1" required>
                                                        <label class="form-check-label" for="level1_choice1">
                                                        <h4>October 19, 2021</h4>
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="level1Radio" id="level1_choice2" required>
                                                        <label class="form-check-label" for="level1_choice2">
                                                        <h4>October 17, 2021</h4>
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="level1Radio" id="level1_choice3" required>
                                                        <label class="form-check-label" for="level1_choice3">
                                                        <h4>O<u>c</u>tober 18, 2021</h4>
                                                        </label>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="row">
                                        <div class="col text-center">
                                            <button id="level1" class="btn btn-md btn-rounded btn-primary">Submit</button>
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