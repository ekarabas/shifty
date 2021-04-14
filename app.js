// Function to allow for changing pages while still keeping the website a single-page application
// This function is called when the user clicks one of the links on the navbar
function change_view(id) {
    document.getElementById("page_content").innerHTML = document.getElementById(id + "_desc").innerHTML;
    document.getElementById("index").className = "is-hidden"; //Hide home page so it doesn't appear below current page

}

// Sign up modal (inspired by example from class)
let footer_ = document.querySelector("#footer_");
let signup_button = document.querySelector("#signup_button");
let signup_modal = document.querySelector("#signup_modal");
let signup_background = document.querySelector("#signup_background");
let cancel_signup = document.querySelector("#cancel_signup");

footer_.className = "footer";

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
    signinModal.classList.add("is-active");
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