import React, { useState } from 'react'
import './Header.css'
import logo_Pokemon from '../resources/logo_pokemon.png'
export default function Header(props) {
  const [dataBusqueda, setDataBusqueda] = useState('')
  const senData=()=>{
    if(dataBusqueda!==""){
      props.searchData(dataBusqueda)
    }
  }
  const setData=(event)=>{
    setDataBusqueda(event.target.value)
  }
  return (
    <div className="header">
       <header className="logo_aplication">
       <div className='container_logo'><img className="logo" src={logo_Pokemon} alt='logo_pokemon'/></div>
        <h1 className="title">POKEMON REACT</h1>
       </header>
        <div className="container_input">
            <input className="input search_components" type='text' value={dataBusqueda} onChange={setData} />
            <button className='button_search search_components' onClick={senData}>Search</button>
        </div>
    </div>
  )
}
