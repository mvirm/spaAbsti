const Card = (props) => {
    const $card = document.createElement('div');
    //$card.className = 'card';
    $card.classList.add('card')
    $card.innerHTML= `
    <div>
    <a href='#/detail/${props.id}'>${props.name}</a>
    <img src='${props.image}' alt='${props.name}' /> 
    <section>
    <h2>${props.species}</h2>
    <h2>${props.gender}</h2>
    </section>
   <h6>${props.id}</h6>
    </div>
    `
return $card
}

export default Card; 