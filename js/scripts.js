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

    
});