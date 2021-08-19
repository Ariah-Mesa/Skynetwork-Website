const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "1234" && password === "1234") {
        alert("로그인이 성공적으로 되었습니다");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
