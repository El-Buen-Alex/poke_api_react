import  { useEffect, useState } from 'react'

export default function UseFecth(url) {
    const [result, setResult]=useState({fetching:true, data:null, error:false})
    useEffect(()=>{getResult(url)}, [url])
    async function getResult(url){
        if(url.trim()!==""){
            try{
                setResult({fetching:true, data:null, error:false})
                const data= await fetch(url)
                const finalData= await data.json()
                setResult({fetching:false, data:finalData, error:false})
                }catch(e){
                    setResult({fetching:false, data:null, error:true})
                }
        }else{
            setResult({fetching:false, data:null, error:true})
        }
    }
  return result
}
