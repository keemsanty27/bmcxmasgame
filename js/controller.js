$(document).ready(function (){
 if($('#header1').length){
    //level 1
    $('body').on('click', '#level1', function(){
        if($('#level1_choice1').is(':checked')) { 
            console.log('1 checked')
            swal.fire({
                title: "Correct!",
                text: "You can now proceed to the next level!",
                icon: "success",
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Yes',
                //closeOnConfirm: false
            }).then(function(){
                window.location = "doctor-who.php";
            }
            ); 
        }else{
            console.log('other options checked')
            swal.fire({
                title: "Wrong!",
                text: "You failed. Back to level 1!",
                icon: "warning",
                showCancelButton: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Again?",
                //closeOnConfirm: false
            }).then(function(){
                window.location = "level-1.php";
            }
            );
        }
    })

  }else if($('#header2').length){
    //level 2
    $('body').on('click', '#level2', function(){
        if($('#level2_choice3').is(':checked')) { 
            console.log('1 checked')
            swal.fire({
                title: "Correct!",
                text: "You can now proceed to the next level!",
                icon: "success",
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Yes',
                //closeOnConfirm: false
            }).then(function(){
                window.location = "how-much.php";
            }
            ); 
        }else{
            console.log('other options checked')
            swal.fire({
                title: "Wrong!",
                text: "You failed. Back to level 1!",
                icon: "warning",
                showCancelButton: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Again?",
                //closeOnConfirm: false
            }).then(function(){
                window.location = "level-1.php";
            }
            );
        }
    })
  }else if($('#header3').length){
    //level 3
    $('body').on('click', '#level3', function(){
        if($('#level3_choice3').is(':checked')) { 
            console.log('1 checked')
            swal.fire({
                title: "Correct!",
                text: "You can now proceed to the next level!",
                icon: "success",
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Yes',
                //closeOnConfirm: false
            }).then(function(){
                window.location = "core-values.php";
            }
            ); 
        }else{
            console.log('other options checked')
            swal.fire({
                title: "Wrong!",
                text: "You failed. Back to level 1!",
                icon: "warning",
                showCancelButton: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Again?",
                //closeOnConfirm: false
            }).then(function(){
                window.location = "level-1.php";
            }
            );
        }
    })
  }else if($('#header4').length){
    //level 4
    $('body').on('click', '#level4', function(){
        if($('#level4_choice1').is(':checked')) { 
            console.log('1 checked')
            swal.fire({
                title: "Correct!",
                text: "You can now proceed to the next level!",
                icon: "success",
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Yes',
                //closeOnConfirm: false
            }).then(function(){
                window.location = "how-many.php";
            }
            ); 
        }else{
            console.log('other options checked')
            swal.fire({
                title: "Wrong!",
                text: "You failed. Back to level 1!",
                icon: "warning",
                showCancelButton: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Again?",
                //closeOnConfirm: false
            }).then(function(){
                window.location = "level-1.php";
            }
            );
        }
    })
  }else if($('#header5').length){
    //level 5
    $('body').on('click', '#level5', function(){
        if($('#level5_choice2').is(':checked')) { 
            console.log('1 checked')
            swal.fire({
                title: "Correct!",
                text: "You can now proceed to the next level!",
                icon: "success",
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Yes',
                //closeOnConfirm: false
            }).then(function(){
                window.location = "welcome.php";
            }
            ); 
        }else{
            console.log('other options checked')
            swal.fire({
                title: "Wrong!",
                text: "You failed. Back to level 1!",
                icon: "warning",
                showCancelButton: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Again?",
                //closeOnConfirm: false
            }).then(function(){
                window.location = "level-1.php";
            }
            );
        }
    })
  }

});
