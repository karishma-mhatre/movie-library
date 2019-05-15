let headerTemplate = document.getElementById('header').innerHTML;

var routes = {
    '/': headerTemplate
}

let root = document.getElementById('root');
root.innerHTML = routes[window.location.pathname];
