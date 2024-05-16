const Menu = () => {
    const $menu = document.createElement('div')
    $menu.innerHTML = `
    <a href='#/'>Home</a>
    <a href='#/about'>About Me</a>
`
    return $menu;
}

export default Menu;