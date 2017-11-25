$(function(){
    $(".create-form").on("submit", function(e){
        e.preventDefault();

        let newBurger = {burger: $("#burger").val().trim()};
        
        console.log(newBurger);

        $.post("/api/burgers", newBurger, function(data){
            if(data){
                alert("new burger added");
                console.log(data);
            } else {
                alert("Sorry your burger was not added");
            }
            location.reload();
        })
    })
})