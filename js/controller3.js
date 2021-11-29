$(document).ready(function (){
// if($('#header1').length){
    //level 1
    $('body').on('click', '#level3', function(){
        if($('#level3_choice1').is(':checked')) { 
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
                window.location = "random.php";
            }
            ); 
        }else{
            console.log('other options checked')
            swal.fire({
                title: "Wrong!",
                text: "You failed. Try again.",
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

//  }else if($('#header2').length){
    //level 2
    // $('body').on('click', '#random', function(){
    //     if($('.randomradio1').is(':checked')) {
    //         console.log('1 checked') 
    //         swal.fire({
    //             title: "Correct!",
    //             text: "You can now proceed to the next level!",
    //             icon: "success",
    //             showCancelButton: false,
    //             confirmButtonColor: "#70b652",
    //             confirmButtonText: "Proceed",
    //             //closeOnConfirm: false
    //         }).then(function(){
    //             window.location.replace("welcome.php");
    //         }
    //         ); 
    //     }else{
    //         console.log('other option')
    //         swal.fire({
    //             title: "Wrong!",
    //             text: "You failed. Try again.",
    //             icon: "warning",
    //             showCancelButton: false,
    //             confirmButtonColor: "#DD6B55",
    //             confirmButtonText: "Again?",
    //             //closeOnConfirm: false
    //         }).then(function(){
    //             window.location.replace("level-1.php");
    //         }
    //         );
    //     }
    // })
//  }else{
//      console.log('End of file')
//  }


});
