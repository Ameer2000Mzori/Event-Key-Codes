// selecting our elements
var keyP = document.getElementsByClassName("key-P")[0];
var numberP = document.getElementsByClassName("number-P")[0];
var codeP = document.getElementsByClassName("code-P")[0];
// our eventlisnter on window
window.addEventListener("keydown", function (event) {
    console.log("Key pressed:", event.key); // Log the pressed key
    keyP.textContent = event.key;
    if (event.defaultPrevented) {
        console.log("Default action cancelled");
        return; // Should do nothing if the default action has been cancelled
    }
    var handled = false;
    if (event.key !== undefined) {
        // Handle the event with KeyboardEvent.key
        console.log("Event handled with KeyboardEvent.key:", event.key);
        numberP.textContent = event.key;
        handled = true;
    }
    else if (event.keyCode !== undefined) {
        // Handle the event with KeyboardEvent.keyCode
        console.log("Event handled with KeyboardEvent.keyCode:", event.keyCode);
        codeP.textContent = "".concat(event.keyCode);
        handled = true;
    }
    if (handled) {
        // Suppress "double action" if event handled
        event.preventDefault();
        console.log("Default action prevented");
    }
    true;
});
