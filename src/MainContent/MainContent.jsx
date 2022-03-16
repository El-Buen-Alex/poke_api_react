import React, { useEffect, useState } from 'react'
import UseFecth from '../shared/UseFecth'
import './MainContent.css'
import PokemonCard from '../Components/PokemonCard'
import Colors from '../shared/Colors'
export default function MainContent(prop) {
  
const estado=UseFecth(prop.url)
const {fetching, data, error}=estado
const [color, setColor]= useState({})

useEffect(()=>{
  setColor({backgroundColor:''+Colors(data?.types[0].type.name)})
  
}, [fetching])
  return (
    <div  className='container'>
      <div className="card" style={color}>
          {
            fetching===true?<div>Fetching..</div> : error===true? <div>Error in Fetching</div>: <PokemonCard pokemonInformation={data} color={color}/>
          }
      </div>
    </div>
  )
}
