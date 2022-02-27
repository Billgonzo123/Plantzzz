// Function to handle user signup
async function signupFormHandler(event) {
    event.preventDefault();

    const firstName = document.querySelector('#first-name').value.trim();
    const lastName = document.querySelector('#last-name').value.trim();
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (firstName && lastName && username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        
        if (response.ok) {
            console.log('success');
            document.location.replace('/login/signedup');
        } else {
            alert("Email or Username already exists ");
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);