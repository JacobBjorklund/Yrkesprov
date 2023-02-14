const movieId = window.location.pathname.split('/').splice(-1)[0]

fetchMovie()

async function fetchMovie() {
    try {
        const res = await fetch('/api/movies/' + personId)
        const movie = await res.json()

        if (movie.error) {
            throw new Error(person.error)
        }

        document.querySelector('#movie').innerHTML = `
    <h1>${movie.name}</h1>
    <h3>${movie.description}</h3>
    `
    }

    catch (error) {
        document.querySelector('#movie').innerHTML = `
    <h1>error</h1>
    <h3>${error.message} </h3>
    `
    }
}