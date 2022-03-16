import React, { useContext, useEffect, useReducer } from 'react'
import { ModalContext } from '../../Contexts/ModalContext'
import Modal from '../Modal/Modal'
import './PokemonInformation.css'

export default function PokemonInformation() {

    const {state,dispatch} = useContext(ModalContext)

    const manageUrlAction=(urlState,action)=>{
      switch(action.type){
        case "change_side":{
            if(urlState.current_side==="front"){
              return {urlActive:state.pokemon.sprites.back_default, current_side:'back'}
            }else if(urlState.current_side==="back"){
              return {urlActive:state.pokemon.sprites.front_default, current_side:'front'}
            }
        } 
        default:
          return urlState
      }
    }

    const [urlState, setUrl] = useReducer(manageUrlAction, state.pokemon?{urlActive:state.pokemon.sprites.front_default, current_side:'front'}:{})

  return (
    <Modal closeModal={()=>dispatch({type:'set_pokemon', data:null, backgroundColor:''})} backgroundColor={state.backgroundColor}>
        <div className='img_container_pokemon'>
            <div className="img_pokemon_active">
                <img id="img" src={`${urlState.urlActive}`}/>
            </div>
            <div className='controls_img' >
              <button className='btn_change_img' onClick={()=>setUrl({type:'change_side'})}>Change Side</button>
            </div>
        </div>
        <div className='pokemon_information'>
            <h3 className='name_pokemon'>{state.pokemon.name.toUpperCase()}</h3>
            <h4 className='name_pokemon'>{state.pokemon.weight} KG</h4>
            <h4 className='name_pokemon'>TYPE =  {state.pokemon.types[0].type.name.toUpperCase()}</h4>

        </div>
    </Modal>
  )
}
