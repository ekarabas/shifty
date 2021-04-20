// Function to allow for changing pages while still keeping the website a single-page application
// This function is called when the user clicks one of the links on the navbar
function change_view(id) {
  document.getElementById("page_content").innerHTML = document.getElementById(id + "_desc").innerHTML;
  document.getElementById("homepage").className = "is-hidden"; //Hide home page so it doesn't appear below current page

}

// Function to check if the user is logged in and return the result
function someone_is_logged_in() {
  var user = auth.currentUser;
  if (user) {
    return true;
  }
  else {
    return false;
  }
}

// Adjust end of navbar depending on whether or not user is logged in
let loggedoutlinks = document.querySelectorAll(".logged_out");
let loggedinlinks = document.querySelectorAll(".logged_in");

// Inspired from example in class
function configureNav(user) {
  // If a user is passed, that means someone is signed in
  if (user) {
    loggedinlinks.forEach((link) => {
      link.classList.remove("is-hidden");
    })
    loggedoutlinks.forEach((link) => {
      link.classList.add("is-hidden");
    })

  } else {
    loggedinlinks.forEach((link) => {
      link.classList.add("is-hidden");
    })
    loggedoutlinks.forEach((link) => {
      link.classList.remove("is-hidden");
    })
  }
}



// Sign up modal (inspired by example from class)
let footer_ = document.querySelector("#footer_");
let signup_button = document.querySelector("#signup_button");
let signup_modal = document.querySelector("#signup_modal");
let signup_background = document.querySelector("#signup_background");
let cancel_signup = document.querySelector("#cancel_signup");

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
});

// Exit the log-in modal if the user clicks outside of it
login_background.addEventListener("click", () => {
  login_modal.classList.remove("is-active");
  footer_.classList.remove("is-hidden");
});

cancel_login.addEventListener("click", () => {
  login_modal.classList.remove("is-active");
  footer_.classList.remove("is-hidden");
});

// User sign-up process (inspired from example in class)
let signup_form = document.querySelector("#signup_form");
let logged_in_as = document.querySelector("#logged_in_as");

signup_form.addEventListener("submit", (e) => {
  e.preventDefault(); //Prevent page refresh

  let email = document.querySelector("#signup_email").value;
  let password = document.querySelector("#signup_password").value;

  // Create the user in the firebase DB
  auth.createUserWithEmailAndPassword(email, password).then(() => {

      // Exit modal, reset form
      signup_modal.classList.remove("is-active");
      signup_form.reset();
    })
    .catch((error) => {
      let signup_error = document.querySelector("#signup_error");
      signup_error.innerHTML = `<p>Sign-up failed: ${error.message}</p>`;
    })
})


// User log in process (inspired from example in class)
let login_form = document.querySelector("#login_form");

login_form.addEventListener("submit", (e) => {
  e.preventDefault(); //Prevent page refresh

  let email = document.querySelector("#login_email").value;
  let password = document.querySelector("#login_password").value;

  // Sign in the user with firebase
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredentials) => {
      console.log(userCredentials.user.email + " with the id " + userCredentials.user.uid + " is logged in.");

      // Exit modal, reset form
      login_modal.classList.remove("is-active");
      login_form.reset();
    })

    // Catch errors and alert user
    .catch((error) => {
      let login_error = document.querySelector("#login_error");
      login_error.innerHTML = `<p>Login failed: ${error.message}</p>`;
    })
})

// User log out process
let logout_button = document.querySelector("#logout_button");

// Log out the user when the "log out" button is pressed
logout_button.addEventListener("click", () => {
  auth.signOut();
})

// Check if user is logged in or out and update the navbar accordingly
// This should be at the end of the js file
auth.onAuthStateChanged(function (user) {
  // If user is passed, then someone is signed in
  if (user) {
    configureNav(user);
    logged_in_as.innerHTML += `Logged in as ${user.email}`;
  } else {
    configureNav();
  }
})

// Posting reviews, this function is called when the user clicks the "Post Review" button
function open_review_modal() {
  // Oddly, these aren't working if defined above the function declaration, so I'm declaring them within the function
  let review_no_login = document.querySelector("#review_no_login");
  let review_modal = document.querySelector("#review_modal");
  
  if (someone_is_logged_in()) {
    // If someone is logged in, display the menu for creating a review
    review_modal.classList.add("is-active");
  }
  else {
    // Tell the user they have to log in before posting a review
    review_no_login.innerHTML = `You must be logged in to post reviews!`;
  }
}

// Exiting the review form by clicking background
let review_background = document.querySelector("#review_background");
let review_modal = document.querySelector("#review_modal");
review_background.addEventListener("click", () => {
  review_modal.classList.remove("is-active");
})

// Exiting the review form by clicking the "Discard" button
let discard_review = document.querySelector("#discard_review");
discard_review.addEventListener("click", (e) => {
  e.preventDefault();
  review_modal.classList.remove("is-active");
})