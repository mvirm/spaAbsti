const Menu = () => {
    const $menu = document.createElement('div')
    $menu.className= 'link';
    $menu.innerHTML = `
    <a href='#/about'>About Me</a>
    <a href='#/'>Home</a>
`
    return $menu;
}

export default Menu;