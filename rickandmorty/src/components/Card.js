const Card = (props) => {
    const $card = document.createElement('div');
    $card.innerHTML= `
       <h1>${props.name}</h1>
       <h2>${props.species}</h2>
       <h2>${props.gender}</h2>
       <img src='${props.image}' alt='${props.name}' /> 
      <h6>${props.id}</h6>
    `
return $card
}

export default Card; 