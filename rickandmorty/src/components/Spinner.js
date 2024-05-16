const Spinner = () => {
    const $spinnerContainer = document.createElement('div');
    $spinnerContainer.className= 'spinner-container';

    const $spinner = document.createElement('div');
    $spinner.className = 'spinner';

    for (let i = 0; i < 3; i++) {
        const $dot = document.createElement('div');
        $dot.className ='spinner-dot';
        $spinner.appendChild($dot);
    }

    const $loadingText = document.createElement('p');
    $loadingText.className ='loading-text';
    $loadingText.innerHTML = 'loading...';

    $spinnerContainer.appendChild($spinner);
    $spinnerContainer.appendChild($loadingText);

    return $spinnerContainer;
};

export default Spinner;