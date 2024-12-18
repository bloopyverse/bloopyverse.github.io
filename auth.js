document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    // Save user data during sign-up
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('signup-username').value.trim();
            const email = document.getElementById('signup-email').value.trim();
            const password = document.getElementById('signup-password').value.trim();

            if (username && email && password) {
                localStorage.setItem(email, JSON.stringify({ username, password }));
                alert('Sign-up successful! You can now log in.');
                window.location.href = 'login.html';
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Authenticate user during login
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value.trim();

            const userData = JSON.parse(localStorage.getItem(email));
            if (userData && userData.password === password) {
                alert(`Welcome back, ${userData.username}!`);
                window.location.href = 'index.html';
            } else {
                alert('Invalid email or password.');
            }
        });
    }
});
