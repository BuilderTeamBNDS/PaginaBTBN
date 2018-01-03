jQuery(function ($) {
    // This will hold the state of the pop-up menu
    var open = false;

    function resizeMenu() {
        // If window is less than 480px wide
        if ($(this).width() < 500) {
            if (!open) {
                // Hide the menu if it's not supposed to be displayed
                $("#navigation").hide();
            }
            // Display the button
            $("#menu-button").show();
        }
        else if ($(this).width() >= 500) {
            // If window is wider than 480px
            if (!open) {
                // Show the menu if it's not displayed yet
                $("#navigation").show();
            }
            // Hide the button if the screen is wide enough for the menu to always show
            $("#menu-button").hide();
        }
    }

    function setupMenuButton() {
        $("#menu-button").click(function (e) {
            e.preventDefault();

            // If already shown...
            if (open) {
                // Hide the menu
                $("#navigation").fadeOut("400");
                $("#menu-button").toggleClass("selected");
            }
            else {
                // If not shown, show the menu
                $("#navigation").fadeIn("400");
                $("#menu-button").toggleClass("selected");
            }
            open = !open;
        });
    }

    // Add a handler function for the resize event of window
    $(window).resize(resizeMenu);

    // Initialize the menu and the button
    resizeMenu();
    setupMenuButton();
});// JavaScript source code
