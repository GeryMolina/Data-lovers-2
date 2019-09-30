/* Manejo del DOM */
let listOfPokemon='';
dataPokemon = ()=> {
    fetch('./data/pokemon/pokemon.json')
    .then(res => res.json())
    .then(data => {
        window.listOfPokemon= data.pokemon;
        
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
            })  .join('');  
    })
    .catch(error => error)
};

console.log(listOfPokemon);
const button = document.getElementById('button');
button.addEventListener('click', () => {
    dataPokemon()
});
 


const typeFilter= document.getElementById('filter');
typeFilter.addEventListener ('change', ()=> {
    const typePokemon= typeFilter.value;
    const showPokeFilter= window.data.filterTypoPoke(listOfPokemon, typePokemon);
    const list= document.getElementById('listUl');
        list.innerHTML= 
            showPokeFilter.map(x => {
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
            })  .join('');  
    
});
