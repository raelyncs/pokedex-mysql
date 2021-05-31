import React from 'react'
import Pokemon from './Pokemon.jsx'

function PokemonList(props) {
  return (

    <div>
      {props.pokemons.map((item,index) =>
        <Pokemon
        individual={item}
        key={index}
        currentRender={props.currentRender}
        getPokemon={props.getPokemon}
        submitType={props.submitType}
        />
      )}
    </div>
  )
}

export default PokemonList