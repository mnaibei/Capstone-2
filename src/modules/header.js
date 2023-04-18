import logo from '../assets/logo.png'

const header = () => {
  const nav = document.querySelector('.desktop-nav')
  nav.innerHTML = `
  <ul class="menu">
    <a href="index.html"><img class="logo-desk" src="${logo}" alt="logo"></a>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Movies(<span id = "counter"></span>)</a></li>
  </ul>
  `;
}

export default header