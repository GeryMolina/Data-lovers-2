window.data= {

  filterTypoPoke: (listOfPokemon, typePokemon) => {
    let filterPoke = listOfPokemon.filter(element =>{
      return element.type.includes(typePokemon);
    })
  
    return filterPoke;
  }
}

