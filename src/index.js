import HomeController from './components/home/home';

let home = HomeController();
let search = document.getElementById("search").innerHTML;

let routes = {
    '#/': home,
    '#/search/': search
}
let root = document.getElementById('root');

window.addEventListener('hashchange', (event) => {
    event.preventDefault();
    console.log("onhashchange");
    if(location.hash.charAt(location.hash.length-1) !== "/") {
        location.hash+="/"
    }
    root.innerHTML = routes[location.hash];
});
window.addEventListener('load', (event) => {
    event.preventDefault();
    console.log("onload");
    location.hash = !location.hash.includes("#") ? "#/" : location.hash;
    root.innerHTML = routes[location.hash];
});
