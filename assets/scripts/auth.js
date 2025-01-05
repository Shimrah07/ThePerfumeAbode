// # Signup/functionality 

// signup

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('sign-email').value;
    const password = document.getElementById('password').value;


    const userData = {
        fullname,
        email,
        password
    };


    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }


    fetch(`${url}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        alert("Sign up successful!");
        console.log("User Data Saved:", data);
        document.getElementById('form').reset(); 
        window.location.href = "login.html"; 
    })
    .catch(error => {
        console.error("Error:", error);
        alert("There was an error during sign up.");
    });
});

// Email validation function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}



