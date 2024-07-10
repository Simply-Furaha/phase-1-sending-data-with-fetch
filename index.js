function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ name: name, email: email })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.body.innerHTML += `<p>New ID: ${data.id}</p>`;
    })
    .catch(error => {
        document.body.innerHTML += `<p>Error: ${error.message}</p>`;
    });
}
