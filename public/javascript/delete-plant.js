async function deleteFormHandler(event) {
    event.preventDefault();

    const answer = confirm("Are you sure you want to delete this plant?");

    if (answer) {
        const id = window.location.toString().split('/')[
            window.location.toString().split('/').length - 1
        ];
        const response = await fetch(`/api/userPlants/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.delete').addEventListener('click', deleteFormHandler);