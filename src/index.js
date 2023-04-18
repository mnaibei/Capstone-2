import './style.css';
import { getMovies } from './modules/movies.js';
import { movieCounter } from './modules/movieCounter.js';
import { postLikes, getLikesCount } from './modules/involvement.js';
import header from './modules/header.js'

header()
getMovies(movieCounter, postLikes, getLikesCount);
