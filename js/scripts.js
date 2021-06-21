// ######### Business Logic ##########
// validates name and email
var validate = function(name, email){
    // let regX = /^(a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
    if (name === null || name === ""){
        alert("Your name field can't be empty!");
    }
    else if(email === null || email === ""){
        alert("Invalid email!");
    } 
    return [name, email];
}



// ######### UI Logic ###########
$(document).ready(function(){
    // Toggles between the hidden "WHAT WE DO" icons
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


    // "PORTFOLIO" Hover animation
    let portfolios = [{work: "one", info: "work1"}, {work: "two", info: "work2"}, {work: "three", info: "work3"}, {work: "four", info: "work4"}, {work: "five", info: "work5"}, {work: "six", info: "work6"}, {work: "seven", info: "work7"}, {work: "eight", info: "work8"}];

    portfolios.forEach(function(portfolio){
        $("." + portfolio.work).mouseover(function(){
            $("." + portfolio.info).show();
        });

        $("." + portfolio.work).mouseout(function(){
            $("." + portfolio.info).hide();
        });
    });

    // ####### Form #######
    $(".contact-us form").submit(function(event){
        let name = $("#name").val();
        let email = $("#email").val();
        let message = $("text-area").val();
        let validateForm = validate(name, email);
        alert("Hey " + name + ", Your form was successfully submitted");
        event.preventDefault();
    });
});