// our eventlisnter on window
window.addEventListener(
  "keydown",
  (event) => {
    console.log("Key pressed:", event.key); // Log the pressed key

    if (event.defaultPrevented) {
      console.log("Default action cancelled");
      return; // Should do nothing if the default action has been cancelled
    }

    let handled = false;
    if (event.key !== undefined) {
      // Handle the event with KeyboardEvent.key
      console.log("Event handled with KeyboardEvent.key:", event.key);
      handled = true;
    } else if (event.keyCode !== undefined) {
      // Handle the event with KeyboardEvent.keyCode
      console.log("Event handled with KeyboardEvent.keyCode:", event.keyCode);
      handled = true;
    }

    if (handled) {
      // Suppress "double action" if event handled
      event.preventDefault();
      console.log("Default action prevented");
    }
  },
  true
);
