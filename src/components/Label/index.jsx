import React from 'react'
import './styles.css'

const Label = ({children, className}) => {
 return(
    <div>       
        <label htmlFor="">{children}</label>
    </div>
 )
}



export default Label