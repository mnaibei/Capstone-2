const movieCounter = (count) => {
    const counter = document.getElementById('counter')
    count = document.querySelectorAll('.card').length
    console.log(count)

    if(count === 0) count = 'No movies'
    if(count > 0 && count < 999) count = count.length
    if(count > 999) count = '999+'

    counter.innerText = count
    console.log(counter)
    return count

} 

export { movieCounter }