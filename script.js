document.addEventListener("DOMContentLoaded", function () {
    var hoverSound = document.getElementById("hoverSound");

    var icons = document.querySelectorAll(".imgs");

    icons.forEach(function (icon) {
        icon.addEventListener("mouseover", function () {
            hoverSound.play();

        });
    });
});