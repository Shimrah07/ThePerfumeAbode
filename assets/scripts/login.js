// login functionality 
document.getElementById("login-form")
.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    // Get form values
    const email = document.getElementById('log-email').value;
    const password = document.getElementById('password').value;

   
    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

 
    fetch(`${url}/users?email=${email}&password=${password}`)
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {

            alert("Log in successful!");
            console.log("Logged in user:", data[0]);

            localStorage.setItem('user', JSON.stringify(data[0]));  
            

            window.location.href = "index.html"; 
        } else {

            alert("Invalid email or password.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("There was an error logging in.");
    });
});