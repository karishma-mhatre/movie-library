console.log(window.location.pathname);
let headerTemplate = document.getElementById('header').innerHTML;
var routes = {
    '#/': headerTemplate,
    '#/search/': headerTemplate
}



let root = document.getElementById('root');
window.addEventListener('hashchange', (event) => {
    event.preventDefault();
    root.innerHTML = routes[location.hash];
});
window.addEventListener('load', (event) => {
    event.preventDefault();
    root.innerHTML = routes[location.hash];
})


console.log('Hello world');
