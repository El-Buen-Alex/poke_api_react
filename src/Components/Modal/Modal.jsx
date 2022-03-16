import React from 'react'
import './Modal.css'
export default function Modal({children, closeModal, backgroundColor}) {
  return (
    <div className='fondo'><div className='modal' style={backgroundColor}>
    <div className='modal_header'>
      <button className='btn_close' onClick={closeModal}>X</button>
    </div>
    <div className='modal_body'>
    {children}
    </div>
    </div></div>
  )
}
