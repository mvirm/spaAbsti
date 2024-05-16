// import  { url, GET_ALL_CHARACTER, GET_CHARACTER_BY_ID } from './src/utils/apiRoutes.js';
// import ajaxFetch from './src/utils/ajaxFetch.js';
// import Card from './src/components/Card.js';
import NavBar from './src/components/NavBar.js';
import Router from './src/components/Router.js';
import Spinner from './src/components/Spinner.js';
import ViewContainer from './src/components/ViewContainer.js';

const App = () => {
const $root = document.getElementById('root');
$root.innerHTML= null
$root.appendChild(NavBar())
$root.appendChild(ViewContainer())
$root.appendChild(Spinner());
Router();
}

export default App;