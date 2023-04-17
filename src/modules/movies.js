import { postLikes, getLikesCount } from './involvement.js';

const movies = 'https://api.tvmaze.com/shows';

const getMovies = async (test) => {
  try {
    const result = await fetch(movies);
    let output = '';
    const data = await result.json();
    data.forEach((movie) => {
      const newMovie = `<div class="card" item_id="${movie.id}">
                <img src=${movie.image.medium}>
                <h2 class="movie-name">${movie.name}<button class="like"><i class="fa fa-heart-o" id=${movie.id}></button></i><span class="likesCount" id="likesCount-${movie.id}"></span></h2>
                <div class="card-buttons">
                <button class="comments-button" id=${movie.id}>Comment</button>
                </div>
            </div>
            `;
      output += newMovie;
    });

    const displayMovies = document.querySelector('.display-container');
    displayMovies.innerHTML = output;
    // passed in test above in order to be able to get length of all movies available
    test(data.length);

    // update likes counter and display on DOM
    const updateLikesCount = async () => {
      const likesData = await getLikesCount();
      likesData.forEach((item) => {
        const likesCount = [`${item.likes}`];
        const likesCountElement = document.getElementById(`likesCount-${item.item_id}`);
        if (likesCountElement) likesCountElement.innerText = likesCount || '0';
      });
    };

    updateLikesCount();

    // like button functionality
    const likeBtn = document.querySelectorAll('.like');
    likeBtn.forEach((button) => {
      button.addEventListener('click', async (item) => {
        const { id } = item.target; // get the ID of the clicked element
        postLikes(id); // pass the ID to postLikes
        item.preventDefault();
      });
      updateLikesCount();
    });
  } catch (error) {
    const displayMovies = document.querySelector('.display-container');
    displayMovies.innerText = error;
  }
};

/* eslint-disable import/prefer-default-export */
export { getMovies };