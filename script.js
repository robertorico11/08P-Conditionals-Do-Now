$(".The-Office-button").click(function(){
    let OfficeInput = $(".The-Office").val();
    console.log(OfficeInput);
    
    if (OfficeInput === "Roy Anderson"){
    $(".The-Office-message").text("Correct!");
    } else {
    $(".The-Office-message").text("Incorret");
    }
});