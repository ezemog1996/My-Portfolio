$(document).ready(function() {
    $("#submit").click(function(event) {
        
        console.log("clicked");
        
        var name = $("#contact-name").val();
        var email = $("#contact-email").val();
        var message = $("#contact-message").val();
        var status = $("#status");
        status.empty();

        if (name) {
        } else {
            event.preventDefault();
            status.append("<div>Please enter your name</div>");
        };

        if (email.length > 5 && email.includes("@") && email.includes(".")) {
        } else {
            event.preventDefault();
            status.append("<div>Email is not valid</div>")
        };

        if (message.length < 10) {
            event.preventDefault();
            status.append("<div>Message must be at least 10 characters</div>")
        };
    })
})