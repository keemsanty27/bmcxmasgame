document.querySelector('.level1').onclick = function(){
    if(document.getElementById('level1_choice1').checked){
        //swal("Hey, Good job !!", "You clicked the button !!", "success")
        swal({
            title: "Correct!",
            text: "You can now proceed to the next level!",
            type: "success",
            showCancelButton: false,
            confirmButtonColor: "#70b652",
            confirmButtonText: "Proceed",
            closeOnConfirm: false
        },
        function(){
            window.location.replace("random.php");
        }
        );
    }else{
        swal({
            title: "Wrong!",
            text: "You failed.",
            type: "warning",
            showCancelButton: false,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Start Again",
            closeOnConfirm: false
        },
        function(){
            window.location.replace("level-1.php");
        }
        );
    }

};