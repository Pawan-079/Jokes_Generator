document.getElementById('jokeBtn').addEventListener('click', generateJoke);

function generateJoke() {
    const jokeElement = document.getElementById('joke');
    
    // Fetch a random joke from the API
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
            // Display the joke
            jokeElement.textContent = `${data.setup} - ${data.punchline}`;
        })
        .catch(error => {
            jokeElement.textContent = 'Oops! Something went wrong. Try again!';
        });
}
