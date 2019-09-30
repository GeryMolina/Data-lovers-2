window.data= {

  filterTypoPoke: (listOfPokemon, typePokemon) => {
    let filterPoke= listOfPokemon.filter(element =>{
  
      return element.type.inclides(typePokemon);
    })
  
    return filterPoke;
  }
}

