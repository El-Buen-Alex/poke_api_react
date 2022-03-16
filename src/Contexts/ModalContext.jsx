import React, { createContext, useReducer } from 'react'
import PokemonInformation from '../Components/PokemonInformation/PokemonInformation';

export  const ModalContext = createContext();


export const ModalPokemonProvider = ({children}) => {
  let modal_pokemon_information=null;
  
  const reducer=(state, action)=>{
    switch (action.type){
      case 'set_pokemon':
        return {...state, pokemon:action.data, backgroundColor: action.backgroundColor}
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer,{})
  if(state.pokemon){
    modal_pokemon_information=<PokemonInformation pokemon={state.pokemon} style={state.backgroundColor}/>
  }
  
  return (
    <ModalContext.Provider value={{state, dispatch}}>
    {modal_pokemon_information}
    {children}
    </ModalContext.Provider>
  )
}

