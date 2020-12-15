const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginyesMsg = document.getElementById("login-yes-msg");

loginButton.addEventListener("click", e => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "admin" && password === "web1") {
    loginyesMsg.style.opacity = 1;
    setTimeout(16000);
    window.location.replace(
      "https://blue-typhoon-forgery.glitch.me/private.html"
    );
  } else {
    loginErrorMsg.style.opacity = 1;
  }
});
