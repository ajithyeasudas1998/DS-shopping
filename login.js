document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get username and password values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform login validation
    if (username === "ajith" && password === "aji1415") {
      // alert("Login successful!");
      // Redirect to a new page or perform other actions
      window.location.href = "items.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
  