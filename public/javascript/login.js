async function loginFormHandler(event) {
    event.preventDefault();

    if (document.querySelector('#login-email') && document.querySelector('#login-password')) {
        
        const email = document.querySelector('#login-email').value.trim();
        const password = document.querySelector('#login-password').value.trim();

        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert("User not found! Please sign up!");
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
