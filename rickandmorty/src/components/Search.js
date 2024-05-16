const Search = () => {
    const $search = document.createElement('form');
    $search.className= 'search';
    const $input = document.createElement('input');
    $input.name = 'search';
    $input.type = 'search';
    $input.placeholder = 'NIY:buscar...'

    $search.appendChild($input)

    return $search
}

export default Search;