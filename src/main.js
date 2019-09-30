/* Manejo del DOM */

const button = document.getElementById('button');
button.addEventListener('click', () => {
        fetch('./data/pokemon/pokemon.json')
        .then(res => res.json())
        .then(data => {
        const listOfPokemon= data.pokemon;
        const list= document.getElementById('listUl');
            list.innerHTML= 
                listOfPokemon.map(x => {
                    return `
                    <li class="liItem">
                        <img class="imgRaM" src="${x.img}">
                        <div class="charData">
                            Numero: #${x.num}
                            Nombre: ${x.name}
                            Tipo: ${x.type} 
                            Debilidad: ${x.weaknesses}
                        </div>    
                    </li>
                        `; 
                }) .join('');  
            })
        .catch(error => error)
    
    
});



