function navbar() {
    let nav = document.getElementById("nav");
    let card =
            `<ul class="nav-links">
                <li> <a href="shop.html" id="nav-shop">Shop</a></li>
                <li> <a href="basics.html" id="nav-basics">Perfume 101</a></li>
                <li> <a href="quiz.html" id="nav-quiz">Scent Finder</a></li>
                <li><a href="signup.html" id="nav-signup">Sign Up </a> </li>
                <li> <a href="login.html" id="nav-login">Log In</a> </li>

            </ul>`;

        nav.innerHTML = card;


}

navbar();