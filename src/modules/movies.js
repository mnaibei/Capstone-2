const movies = 'https://api.tvmaze.com/shows'

const getMovies = async () => {
    try {
        const result = await fetch(movies)
        let output = ''
        const data = await result.json()
        data.forEach((movie) => {
            const newMovie = `<div class="card">
                <img src=${movie.image.medium}>
                <h2 class="movie-name">${movie.name}<button class="like"><i class="fa fa-heart-o"></button></i></h2>
                <div class="card-buttons">
                <button class="comments-button">Comment</button>
                <!-- <button class="reservations-button">Reservations</button> -->
                </div>
            </div>
            `;
            output += newMovie
        })

        const displayMovies = document.querySelector('.display-container')
        displayMovies.innerHTML = output;
    }
    catch (error) {
        console.error(error)
    }
};

export { getMovies }