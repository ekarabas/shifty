// Function to allow for changing pages while still keeping the website a single-page application
// This function is called when the user clicks one of the links on the navbar
function change_view(id) {
    document.getElementById("page_content").innerHTML = document.getElementById(id + "_desc").innerHTML;
    document.getElementById("homepage").className = "is-hidden"; //Hide home page so it doesn't appear below current page

}

// Sign up modal (inspired by example from class)
let footer_ = document.querySelector("#footer_");
let signup_button = document.querySelector("#signup_button");
let signup_modal = document.querySelector("#signup_modal");
let signup_background = document.querySelector("#signup_background");
let cancel_signup = document.querySelector("#cancel_signup");

// TEMP DEBUGGING
console.log("footer classlist length = " + footer_.classList.length);
console.log("first footer class = " + footer_.classList.item(0));
console.log("second footer class = " + footer_.classList.item(1));

// Display the modal when the sign up button is clicked
signup_button.addEventListener("click", () => {
    signup_modal.classList.add("is-active");
    footer_.classList.add("is-hidden"); //Hide the footer when modal becomes active because the footer became misplaced when the modal was activated
});

// Exit the sign-up modal if the user clicks outside of it
signup_background.addEventListener("click", () => {
    signup_modal.classList.remove("is-active");
    footer_.classList.remove("is-hidden");
});

// Exit the sign-up modal if the cancel button is clicked
cancel_signup.addEventListener("click", () => {
    signup_modal.classList.remove("is-active");
    footer_.classList.remove("is-hidden");
});

//Log in modal (inspired by example from class)
let login_button = document.querySelector("#login_button");
let login_modal = document.querySelector("#login_modal");
let login_background = document.querySelector("#login_background");
let cancel_login = document.querySelector("#cancel_login");

// Display the modal when the log-in button is clicked
login_button.addEventListener("click", () => {
    login_modal.classList.add("is-active");
    footer_.classList.add("is-hidden");
})

// Exit the log-in modal if the user clicks outside of it
login_background.addEventListener("click", () => {
    login_modal.classList.remove("is-active");
    footer_.classList.remove("is-hidden");
});

cancel_login.addEventListener("click", () => {
    login_modal.classList.remove("is-active");
    footer_.classList.remove("is-hidden");
});

// User signup process (inspired from example in class)
let signup_form = document.querySelector("#signup_form");

signup_form.addEventListener("submit", (e => {
    e.preventDefault //Prevent page refresh

    let email = document.querySelector("#email_").value;
    let password = document.querySelector("#password_").value;

    // Sign in the user with firebase
    firebase.auth.signInWithEmailAndPassword(email, password).then((userCredentials) => {
        console.log(userCredentials.user.email + " with the id " + userCredentials.user.uid + " is logged in.");

        // Exit modal, reset form
        signup_modal.classList.remove("is-acive");
        signup_form.reset();
    })

    // Catch errors and alert user
    .catch((error) => {
        let login_error = document.querySelector("#login_error");
        login_error.innerHTML = `<p>Login failed: ${error.message}</p>`;
    })
}))
