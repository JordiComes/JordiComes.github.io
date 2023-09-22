
document.addEventListener('DOMContentLoaded', function () {
    const overlayDiv = document.getElementById("overlayDiv");
    overlayDiv.classList.add("hidden");
    setTimeout(() => {
        overlayDiv.classList.remove("hidden");
    }, 500);
});

/* Animacion de contenido General */
document.addEventListener("DOMContentLoaded", function() {
    var body = document.querySelector("body");
    body.classList.add("mostrar");
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var overlayDiv = document.getElementById("overlayDiv");
        overlayDiv.classList.add("mostrar");
    }, 1500);
});


