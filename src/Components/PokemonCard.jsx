import React, { useContext } from 'react'
import { ModalContext } from '../Contexts/ModalContext'
import './CardPokemon.css'
export default function PokemonCard(prop) {

  const {dispatch} = useContext(ModalContext)
  return (
    <div className="card_pokemon">
        <div className='img_container'><img className='img_pokemon' src={prop.pokemonInformation.sprites.front_default} /></div>
        <h3 className='name_pokemon'>{prop.pokemonInformation.name}</h3>
        <button className='button_details' onClick={()=>dispatch({type:'set_pokemon', data:prop.pokemonInformation, backgroundColor:prop.color})}>See Deatils</button>
    </div>
  )
}
