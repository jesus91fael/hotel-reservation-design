import React from 'react'
import './styles.css'

const Campos = ({children, className}) => {
 return(
    <div>       
        <input disabled='true' className={className}value={children}></input>        
    </div>
 )
}



export default Campos