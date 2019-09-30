global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('data.filterTypoPoke', () => {
  
  const muestra= [{
        "name": "Bulbasaur",
        "type": ["Grass"],
      },
        {
        "name": "Ivysaur",
        "type": ["Poison"],
      }, 
        {
        "name": "Venusaur",
        "type": ["Poison"],
      }
  ]

  it('debería ser una función', () => {
    assert.equal(typeof window.data.filterTypoPoke, 'function');
  });

  it('debería retornar el objeto  Bulbasaur al filtrar por tipo Grass', () => {
    assert.deepEqual(window.data.filterTypoPoke(muestra,"Grass"),[{"name": "Bulbasaur","type": ["Grass"]}]
      );
   })
  })