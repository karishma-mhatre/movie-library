import HomeController from './components/home/home';

(async function () {
    let root = document.getElementById('root');
    let home = await HomeController();
    let search = document.getElementById("search").innerHTML;
    let routes = {
        '#/': home,
        '#/search/': search,
        'loading': 'loading'
    }

    window.addEventListener('hashchange', (event) => {
        event.preventDefault();
        console.log("onhashchange");
        if (location.hash.charAt(location.hash.length - 1) !== "/") {
            location.hash += "/"
        }
        root.innerHTML = typeof routes[location.hash] == 'object' ? routes['loading'] : routes[location.hash];;
    });
    location.hash = "#/";
}
)();