const movieCounter = (count) => {
  const counter = document.getElementById('counter');
  count = document.querySelectorAll('.card').length;

  if (count === 0) count = 'No movies';
  if (count > 0 && count < 999) count = count.length;
  if (count > 999) count = '999+';

  counter.innerText = count;
  return count;
};

/* eslint-disable import/prefer-default-export */
export { movieCounter };