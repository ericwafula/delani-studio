// UI Logic
$(document).ready(function(){
    // Toggles between the hidden icons
    let items = [{image: "design-image", description: "design-description"}, {image: "dev-image", description: "dev-description"}, {image: "product-image", description: "product-description"}];

    items.forEach(function(item){
        $("." + item.image).click(function(){
            $("." + item.description).show();
            $("." + item.image).hide();
        });

        $("." + item.description).click(function(){
            $("." + item.image).show();
            $("." + item.description).hide();
        });
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

    // ####### Form #######
    $(".contact-us form").submit(function(event){
        let name = $("#name").val();
        let email = $("#email").val();
        let message = $("text-area").val();
        alert("Thanks for contacting us " + name + ", we have received your message");
        event.preventDefault();
    });
});