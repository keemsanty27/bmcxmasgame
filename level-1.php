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
                                <h1 class="text-danger">Level - 1</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="main-content">
                            <div class="card w-55 mx-auto">
                                <div class="card-title">
                                    <h1 class="text-danger">Insert question here</h1>
                                </div>
                                <div class="card-body">

                                <div class="input-states">
                                        <form class="form-horizontal">
                                            <div class="form-group has-success">
                                                <div class="row">
                                                    <div class="col-sm-3">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="level1_choice1" value="option1">
                                                        <label class="form-check-label" for="level1_choice1">
                                                            1st choice
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="level1_choice2" value="option2">
                                                        <label class="form-check-label" for="level1_choice2">
                                                            2nd choice
                                                        </label>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="row">
                                        <div class="col text-center">
                                            <button class="btn btn-md btn-rounded btn-primary level1">Submit</button>
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