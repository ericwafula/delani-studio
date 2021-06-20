// UI Logic
$(document).ready(function(){
    // Toggles between the hidden icons
    $(".design-image").click(function(){
        $(".design-description").show();
        $(".design-image").hide();
    });

    $(".design-description").click(function(){
        $(".design-image").show();
        $(".design-description").hide();
    });

    $(".dev-image").click(function(){
        $(".dev-description").show();
        $(".dev-image").hide();
    });

    $(".dev-description").click(function(){
        $(".dev-image").show();
        $(".dev-description").hide();
    });

    $(".product-image").click(function(){
        $(".product-description").show();
        $(".product-image").hide();
    });

    $(".product-description").click(function(){
        $(".product-image").show();
        $(".product-description").hide();
    });

    // Hover animation
    // ###### FIRST ROW ######
    // Work 1
    $(".one").mouseover(function(){
        $(".work1").show();
    });

    $(".one").mouseout(function(){
        $(".work1").hide();
    });

    // Work 2
    $(".two").mouseover(function(){
        $(".work2").show();
    });

    $(".two").mouseout(function(){
        $(".work2").hide();
    });

    // Work 3
    $(".three").mouseover(function(){
        $(".work3").show();
    });

    $(".three").mouseout(function(){
        $(".work3").hide();
    });

    // Work 4
    $(".four").mouseover(function(){
        $(".work4").show();
    });

    $(".four").mouseout(function(){
        $(".work4").hide();
    });

    // ###### SECOND ROW ######
    // Work 5
    $(".five").mouseover(function(){
        $(".work5").show();
    });

    $(".five").mouseout(function(){
        $(".work5").hide();
    });

    // Work 6
    $(".six").mouseover(function(){
        $(".work6").show();
    });

    $(".six").mouseout(function(){
        $(".work6").hide();
    });

    // Work 7
    $(".seven").mouseover(function(){
        $(".work7").show();
    });

    $(".seven").mouseout(function(){
        $(".work7").hide();
    });

    // Work 8
    $(".eight").mouseover(function(){
        $(".work8").show();
    });

    $(".eight").mouseout(function(){
        $(".work8").hide();
    });
});