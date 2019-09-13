document.addEventListener("DOMContentLoaded", function() {
  let app = firebase.app();
  let features = ["auth", "database", "messaging", "storage"].filter(
    feature => typeof app[feature] === "function"
  );

  
});
