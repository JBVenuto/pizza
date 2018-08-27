$(function() {
    //Change the devoured boolean
    //Find out what pizza was eaten and store the new state
    $(".eat").on("click", function(event) {
        var id = $(this).data("id");
        var newAte = $(this).data("newate")

        var newDevouredState = {
            devoured: newAte
        };

        //Update the database with the new devoured status
        $.ajax("/api/pizzas" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed state to ", newAte);
                //reload the page with the updated list
                location.reload()
            }
        );
    });

});