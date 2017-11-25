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

    $(".change-devour").on("click", function(e){
        let id = $(this).data("id");
        let eatenStat = $(this).data("eaten");
        let newStat;

        if (eatenStat) {
            newStat = 0;
        } else {
            newStat = 1;
        }

        console.log("id " + id + " status " + eatenStat);

        $.ajax({
            method: "PUT",
            url: "/api/burgers",
            data: $.param({numId: id, devoured: newStat}, true)
        }).then(function(data){
            if(data){
                console.log("burger devoured");
                console.log(data);
            } else {
                console.log("burger failed to be devoured or does not exist");
            }
            location.reload();
        })

    })
})