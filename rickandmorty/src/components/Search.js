const Search = () => {
    const $search = document.createElement('form');
    const $input = document.createElement('input');
    $input.name = 'search';
    $input.type = 'search';
    $input.placeholder = 'buscar...'

    $search.appendChild($input)

    return $search
}

export default Search;