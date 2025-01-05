// # Global JavaScript

// contact form functionality


document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting normally

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Data object to send to JSON Server
  const formData = {
    name: name,
    email: email,
    message: message,
  };

  // Send data to JSON Server using fetch API
  fetch(`${url}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData), // Convert form data to JSON
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Message sent successfully!");
      // Optionally log the response data to check if it's stored correctly
      console.log("Data saved:", data);
      document.getElementById("contact-form").reset(); // Clear the form
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("There was an error sending the message.");
    });
});

