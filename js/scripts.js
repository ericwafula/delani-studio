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
    // Work 1
    $(".first").mouseover(function(){
        $(".work1").show();
    });

    $(".first").mouseout(function(){
        $(".work1").hide();
    });

    // Work 2
    $(".second").mouseover(function(){
        $(".work2").show();
    });

    $(".second").mouseout(function(){
        $(".work2").hide();
    });

    // Work 3
    $(".third").mouseover(function(){
        $(".work3").show();
    });

    $(".third").mouseout(function(){
        $(".work3").hide();
    });

    // Work 4
    $(".fourth").mouseover(function(){
        $(".work4").show();
    });

    $(".fourth").mouseout(function(){
        $(".work4").hide();
    });
});