/* Manejo del DOM */
let listOfPokemon = [];
const dataPokemon= ()=> {
    fetch('./data/pokemon/pokemon.json')
    .then(res => res.json())
    .then(data => {
        listOfPokemon = data.pokemon;
        
        const list= document.getElementById('listUl');
        list.innerHTML= 
            listOfPokemon.map(x => {
                return `
                <li class="liItem">
                    <img class="imgRaM" src="${x.img}">
                    <div class="charData">
                        #${x.num}
                         ${x.name}
                         
                        
                    </div>    
                </li>
                    `; 
            })  .join('');  
    })
    .catch(error => error)
};

const button = document.getElementById('button');
button.addEventListener('click', () => {
    dataPokemon()
    button.style.display="none";
    typeFilter.style.display="block";
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
                    #${x.num}
                     ${x.name}
                    </div>    
                </li>
                    `; 
            })  .join('');  
    
});
