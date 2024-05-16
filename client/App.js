// import  { url, GET_ALL_CHARACTER, GET_CHARACTER_BY_ID } from './src/utils/apiRoutes.js';
// import ajaxFetch from './src/utils/ajaxFetch.js'
import NavBar from './src/components/NavBar.js';
import Spinner from './src/components/Spinner.js';

const App = () => {
const $root = document.getElementById('root');
$root.appendChild(NavBar())
$root.appendChild(Spinner());
// $root.innerHTML= '<h1>soy la App</h1>'
// //console.log($root);
// ajaxFetch({
//     url: GET_ALL_CHARACTER,
//     cbSuccess: (characters) => {
//         console.log(characters.results);
//     }
// })
console.log($root);
}

export default App;