import Title from "./Title.js";
import Menu from "./Menu.js";
import Search from "./Search.js";


const NavBar = () => {
    const $navBar = document.createElement('header');

    $navBar.appendChild(Title());
    $navBar.appendChild(Menu());
    $navBar.appendChild(Search())

    return $navBar;
};

export default NavBar;