import React from 'react'
import './Footer.css'
export default function Footer(props) {

  return (
    <div className="container_footer">
        <div className="area_buttons">
            <button className="buttons separador" onClick={()=>props.requestData("previous")} disabled={!props.back}>Previous</button>
            <button className="buttons" onClick={()=>props.requestData("next")}>Next</button>
        </div>
    </div>
  )
}
