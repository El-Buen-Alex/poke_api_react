import {
  useEffect,
  useState,
  useReducer,
} from 'react';
import './App.css';
import Header from './header/Header';
import Footer from './Footer/Footer';
import MainContent from './MainContent/MainContent';
import {  ModalPokemonProvider } from './Contexts/ModalContext';

function App() {

  
  const [dataState, setDataState] = useState([])
  
  const reducer=(action)=>{
    if(action.type==="next"){
      return {urlState:dataState.next}
    }else if(action.type==="previous"){
      return {urlState:dataState.previous}
    }
    else{
      throw new Error();
    }
  }
  const [urlApiState, dispatch] = useReducer(reducer, {urlState:"https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"})
  useEffect(() => {
    const request = fetch(urlApiState.urlState)
    request
      .then(data => {
        return data.json()
      }).then(finalData => {
       (finalData.count)?setDataState(finalData):console.log(finalData)
      }).catch(e => {
        console.log(e)
      })
  }, [urlApiState.urlState])

  
  return ( 
    <ModalPokemonProvider>
      <Header searchData={(namePokemon)=> dispatch({type:"search", data:namePokemon})}/>
      
      <div className='container_main'>
     
      <div className="flex">
     
      {
        dataState.results? dataState.results.map(pokemon=>{
          return <MainContent url={pokemon.url} key={pokemon.name}/>
        }):''
      }
      </div>
      </div>
      <Footer requestData={(type)=>dispatch({type:type})} />
    </ModalPokemonProvider>
  );
}

export default App;