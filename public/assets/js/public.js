$(document).ready(function() {
    //Change the devoured boolean
    //Find out what pizza was eaten and store the new state
    $(".eat").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var newAte = $(this).data("newate")

        var newDevouredState = {
            devoured: newAte
        };

        //Update the database with the new devoured status
        $.ajax("/pizzas/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed state to ", newAte);
                //reload the page with the updated list
                // location.reload()
            }
        );
    });

    //Add a new pizza to the list
    $(document).on("click", "submit", function(event) {
        event.preventDefault();
        //Get the name from the input form
        var newPizza = {
            pizza_name: $("#pz").val().trim()
        }
        //Send the newly added pizza to the database
        $.ajax("/api/pizzas", {
            type: "POST",
            data: newPizza
        }).then(
            function() {
                console.log("created new pizza");
                //reload the page with the new pizza added
                // location.reload();
            }
        );
    });

});