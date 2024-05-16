import  {  GET_ALL_CHARACTER } from '../utils/apiRoutes.js';
import ajaxFetch from '../utils/ajaxFetch.js';
import Card from './Card.js';
import AboutMe from './AboutMe.js';

const Router = () => {
    let {hash} = location;
    //console.log(location);
    const $view = document.getElementById('view');

 if(!hash || hash === '#/') {
    ajaxFetch({
        url: GET_ALL_CHARACTER,
        cbSuccess: async (characters) => {
            let allCharacters = characters.results;
            //console.log(allCharacters);
            $view.innerHTML = ''; 
            await allCharacters.forEach(character => {
                $view.appendChild(Card(character));
            });
        document.querySelector('.spinner-container').style.display = 'none';
    }
})
} else if (hash.includes('/?search')) {
    // event.preventDefault();
    $view.innerHTML= `<h2>soy el search</h2>`
} else if (hash === '#/about') {
   $view.appendChild(AboutMe());
} else {
    $view.innerHTML= `<h2>soy el detail</h2>`
}
        document.querySelector('.spinner-container').style.display = 'none';
}

export default Router