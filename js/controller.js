$(document).ready(function (){

 // Level 1 to 5
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
                confirmButtonText: 'Level 2',
                //closeOnConfirm: false
            }).then(function(){
                window.location = "doctor-who.php";
            }
            ); 
        }else{
            console.log('other options checked')
            swal.fire({
                title: "Wrong!",
                text: "You failed. Try Again.",
                icon: "warning",
                showCancelButton: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Retry",
                //closeOnConfirm: false
            }).then(function(){
                window.location = "game.php";
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
                confirmButtonText: 'Level 3',
                //closeOnConfirm: false
            }).then(function(){
                window.location = "how-much.php";
            }
            ); 
        }else{
            console.log('other options checked')
            swal.fire({
                title: "Wrong!",
                text: "You failed. Let's go back to level 1.",
                icon: "warning",
                showCancelButton: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Retry",
                //closeOnConfirm: false
            }).then(function(){
                window.location = "game.php";
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
                confirmButtonText: 'Level 4',
                //closeOnConfirm: false
            }).then(function(){
                window.location = "core-values.php";
            }
            ); 
        }else{
            console.log('other options checked')
            swal.fire({
                title: "Wrong!",
                text: "You failed. Let's go back to level 1.",
                icon: "warning",
                showCancelButton: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Retry",
                //closeOnConfirm: false
            }).then(function(){
                window.location = "game.php";
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
                confirmButtonText: 'Level 5',
                //closeOnConfirm: false
            }).then(function(){
                window.location = "how-many.php";
            }
            ); 
        }else{
            console.log('other options checked')
            swal.fire({
                title: "Wrong!",
                text: "You failed. Let's go back to level 1.",
                icon: "warning",
                showCancelButton: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Retry",
                //closeOnConfirm: false
            }).then(function(){
                window.location = "game.php";
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
                confirmButtonText: 'Level 6',
                //closeOnConfirm: false
            }).then(function(){
                window.location = "Save-Point-1.php";
            }
            ); 
        }else{
            console.log('other options checked')
            swal.fire({
                title: "Wrong!",
                text: "You failed. Let's go back to level 1.",
                icon: "warning",
                showCancelButton: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Retry",
                //closeOnConfirm: false
            }).then(function(){
                window.location = "game.php";
            }
            );
        }
    })

  // Level 6 to Level 15  
  }else if($('#header6').length){
    //level 6
    $('body').on('click', '#level6', function(){
        if($('#level6_choice3').is(':checked')) { 
            console.log('1 checked')
            swal.fire({
                title: "Correct!",
                text: "You can now proceed to the next level!",
                icon: "success",
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Level 7',
                //closeOnConfirm: false
            }).then(function(){
                window.location = "Fill-The-Blank.php";
            }
            ); 
        }else{
            console.log('other options checked')
            swal.fire({
                title: "Wrong!",
                text: "You failed. Try Again.",
                icon: "warning",
                showCancelButton: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Retry",
                //closeOnConfirm: false
            }).then(function(){
                window.location = "OPD.php";
            }
            );
        }
    })
    
  }else if($('#header7').length){
    //level 7
    $('body').on('click', '#level7', function(){
        if($('#level7_choice1').is(':checked')) { 
            console.log('1 checked')
            swal.fire({
                title: "Correct!",
                text: "You can now proceed to the next level!",
                icon: "success",
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Level 8',
                //closeOnConfirm: false
            }).then(function(){
                window.location = "WW2.php";
            }
            ); 
        }else{
            console.log('other options checked')
            swal.fire({
                title: "Wrong!",
                text: "You failed. Let's go back to level 6.",
                icon: "warning",
                showCancelButton: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Retry",
                //closeOnConfirm: false
            }).then(function(){
                window.location = "OPD.php";
            }
            );
        }
    })

  }else if($('#header8').length){
    //level 8
    $('body').on('click', '#level8', function(){
        if($('#level8_choice2').is(':checked')) { 
            console.log('1 checked')
            swal.fire({
                title: "Correct!",
                text: "You can now proceed to the next level!",
                icon: "success",
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Level 9',
                //closeOnConfirm: false
            }).then(function(){
                window.location = "BMC-IG.php";
            }
            ); 
        }else{
            console.log('other options checked')
            swal.fire({
                title: "Wrong!",
                text: "You failed. Let's go back to level 6.",
                icon: "warning",
                showCancelButton: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Retry",
                //closeOnConfirm: false
            }).then(function(){
                window.location = "OPD.php";
            }
            );
        }
    })

  }else if($('#header9').length){
    //level 9
    $('body').on('click', '#level9', function(){
        if($('#level9_choice4').is(':checked')) { 
            console.log('1 checked')
            swal.fire({
                title: "Correct!",
                text: "You can now proceed to the next level!",
                icon: "success",
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Level 10',
                //closeOnConfirm: false
            }).then(function(){
                window.location = "Kidney.php";
            }
            ); 
        }else{
            console.log('other options checked')
            swal.fire({
                title: "Wrong!",
                text: "You failed. Let's go back to level 6.",
                icon: "warning",
                showCancelButton: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Retry",
                //closeOnConfirm: false
            }).then(function(){
                window.location = "OPD.php";
            }
            );
        }
    })

  }else if($('#header10').length){
    //level 10
    $('body').on('click', '#level10', function(){
        if($('#level10_choice5').is(':checked')) { 
            console.log('1 checked')
            swal.fire({
                title: "Correct!",
                text: "You can now proceed to the next level!",
                icon: "success",
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Level 11',
                //closeOnConfirm: false
            }).then(function(){
                window.location = "dsjrmmh.php";
            }
            ); 
        }else{
            console.log('other options checked')
            swal.fire({
                title: "Wrong!",
                text: "You failed. Let's go back to level 6.",
                icon: "warning",
                showCancelButton: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Retry",
                //closeOnConfirm: false
            }).then(function(){
                window.location = "OPD.php";
            }
            );
        }
    })

  }else if($('#header11').length){
    //level 11
    $('body').on('click', '#level11', function(){
        if($('#level11_choice3').is(':checked')) { 
            console.log('1 checked')
            swal.fire({
                title: "Correct!",
                text: "You can now proceed to the next level!",
                icon: "success",
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Level 12',
                //closeOnConfirm: false
            }).then(function(){
                window.location = "baitang-labindalawa.php";
            }
            ); 
        }else{
            console.log('other options checked')
            swal.fire({
                title: "Wrong!",
                text: "You failed. Let's go back to level 6.",
                icon: "warning",
                showCancelButton: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Retry",
                //closeOnConfirm: false
            }).then(function(){
                window.location = "OPD.php";
            }
            );
        }
    })

  }else if($('#header12').length){
    //level 12
    $('body').on('click', '#level12', function(){
        if($('#level12_choice5').is(':checked')) { 
            console.log('1 checked')
            swal.fire({
                title: "Correct!",
                text: "You can now proceed to the next level!",
                icon: "success",
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Level 13',
                //closeOnConfirm: false
            }).then(function(){
                window.location = "back-to-december.php";
            }
            ); 
        }else{
            console.log('other options checked')
            swal.fire({
                title: "Wrong!",
                text: "You failed. Let's go back to level 6.",
                icon: "warning",
                showCancelButton: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Retry",
                //closeOnConfirm: false
            }).then(function(){
                window.location = "OPD.php";
            }
            );
        }
    })

  }else if($('#header13').length){
    //level 13
    $('body').on('click', '#level13', function(){
        if($('#level13_choice1').is(':checked')) { 
            console.log('1 checked')
            swal.fire({
                title: "Correct!",
                text: "You can now proceed to the next level!",
                icon: "success",
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Level 14',
                //closeOnConfirm: false
            }).then(function(){
                window.location = "president.php";
            }
            ); 
        }else{
            console.log('other options checked')
            swal.fire({
                title: "Wrong!",
                text: "You failed. Let's go back to level 6.",
                icon: "warning",
                showCancelButton: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Retry",
                //closeOnConfirm: false
            }).then(function(){
                window.location = "OPD.php";
            }
            );
        }
    })

   }else if($('#header14').length){
    //level 14
    $('body').on('click', '#level14', function(){
        if($('#level14_choice4').is(':checked')) { 
            console.log('1 checked')
            swal.fire({
                title: "Correct!",
                text: "You can now proceed to the next level!",
                icon: "success",
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Level 15',
                //closeOnConfirm: false
            }).then(function(){
                window.location = "naga-street.php";
            }
            ); 
        }else{
            console.log('other options checked')
            swal.fire({
                title: "Wrong!",
                text: "You failed. Let's go back to level 6.",
                icon: "warning",
                showCancelButton: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Retry",
                //closeOnConfirm: false
            }).then(function(){
                window.location = "OPD.php";
            }
            );
        }
    })

   }else if($('#header15').length){
    //level 15
    $('body').on('click', '#level15', function(){
        if($('#level15_choice2').is(':checked')) { 
            console.log('1 checked')
            swal.fire({
                title: "Correct!",
                text: "You can now proceed to the next level!",
                icon: "success",
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Level 16',
                //closeOnConfirm: false
            }).then(function(){
                window.location = "Another-Save-Point.php";
            }
            ); 
        }else{
            console.log('other options checked')
            swal.fire({
                title: "Wrong!",
                text: "You failed. Let's go back to level 6.",
                icon: "warning",
                showCancelButton: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Retry",
                //closeOnConfirm: false
            }).then(function(){
                window.location = "OPD.php";
            }
            );
        }
    })

   }else if($('#header16').length){
    //level 16
    $('body').on('click', '#level16', function(){
        if($('#level16_choice3').is(':checked')) { 
            console.log('1 checked')
            swal.fire({
                title: "Correct!",
                text: "You can now proceed to the next level!",
                icon: "success",
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Level 17',
                //closeOnConfirm: false
            }).then(function(){
                window.location = "what-am-i.php";
            }
            ); 
        }else{
            console.log('other options checked')
            swal.fire({
                title: "Wrong!",
                text: "You failed. Try Again.",
                icon: "warning",
                showCancelButton: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Retry",
                //closeOnConfirm: false
            }).then(function(){
                window.location = "one-two-zero-zero.php";
            }
            );
        }
    })

   }else if($('#header17').length){
    //level 17
    $('body').on('click', '#level17', function(){
        if($('#level17_choice3').is(':checked')) { 
            console.log('1 checked')
            swal.fire({
                title: "Correct!",
                text: "You can now proceed to the next level!",
                icon: "success",
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Level 18',
                //closeOnConfirm: false
            }).then(function(){
                window.location = "what-am-i-again.php";
            }
            ); 
        }else{
            console.log('other options checked')
            swal.fire({
                title: "Wrong!",
                text: "You failed. Let's go back to level 16.",
                icon: "warning",
                showCancelButton: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Retry",
                //closeOnConfirm: false
            }).then(function(){
                window.location = "one-two-zero-zero.php";
            }
            );
        }
    })

   }else if($('#header18').length){
    //level 18
    $('body').on('click', '#level18', function(){
        if($('#level18_choice5').is(':checked')) { 
            console.log('1 checked')
            swal.fire({
                title: "Correct!",
                text: "You can now proceed to the next level!",
                icon: "success",
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Level 19',
                //closeOnConfirm: false
            }).then(function(){
                window.location = "The-Office.php";
            }
            ); 
        }else{
            console.log('other options checked')
            swal.fire({
                title: "Wrong!",
                text: "You failed. Let's go back to level 16.",
                icon: "warning",
                showCancelButton: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Retry",
                //closeOnConfirm: false
            }).then(function(){
                window.location = "one-two-zero-zero.php";
            }
            );
        }
    })

   }else if($('#header19').length){
    //level 19
    $('body').on('click', '#level19', function(){
        if($('#level19_choice4').is(':checked')) { 
            console.log('1 checked')
            swal.fire({
                title: "Correct!",
                text: "You can now proceed to the next level!",
                icon: "success",
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Level 20',
                //closeOnConfirm: false
            }).then(function(){
                window.location = "dial-me.php";
            }
            ); 
        }else{
            console.log('other options checked')
            swal.fire({
                title: "Wrong!",
                text: "You failed. Let's go back to level 16.",
                icon: "warning",
                showCancelButton: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Retry",
                //closeOnConfirm: false
            }).then(function(){
                window.location = "one-two-zero-zero.php";
            }
            );
        }
    })

   }else if($('#header20').length){
    //level 20
    $('body').on('click', '#level20', function(){
        if($('#level20_choice4').is(':checked')) { 
            console.log('1 checked')
            swal.fire({
                title: "Correct!",
                text: "You can now proceed to the next level!",
                icon: "success",
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Final Level',
                //closeOnConfirm: false
            }).then(function(){
                window.location = "secret-code.php";
            }
            ); 
        }else{
            console.log('other options checked')
            swal.fire({
                title: "Wrong!",
                text: "You failed. Let's go back to level 16.",
                icon: "warning",
                showCancelButton: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Retry",
                //closeOnConfirm: false
            }).then(function(){
                window.location = "one-two-zero-zero.php";
            }
            );
        }
    })

  }else{
      console.log('nothing here')
  }


    if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD) {
    //    window.location = 'level-1.php'
        alert('There is no going back from that mistake')
    }

    history.pushState(null, null, 'welcome.php');    
    window.addEventListener('popstate', function () {
        // alert('There is no going back from that mistake');
        
        history.pushState(null, null, 'welcome.php');        
    });

    
    
//   if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD) {
//    window.location = 'level-1.php'
//    alert('There is no going back from that mistake')
// }

// if (window.history && window.history.pushState) {

//     $(window).on('popstate', function() {
//       var hashLocation = location.hash;
//       var hashSplit = hashLocation.split("#!/");
//       var hashName = hashSplit[1];

//       if (hashName !== '') {
//         var hash = window.location.hash;
//         if (hash === '') {
//           alert('Do not cheat!');
//             window.location='level-1.php';
//             return false;
//         }
//       }
//     });

//     window.history.pushState('forward', null, './#forward');
//   }

});
