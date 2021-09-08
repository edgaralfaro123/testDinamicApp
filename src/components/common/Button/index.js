import React from 'react'

const Button =(props)=> {
    const {label,sendRequest} = {...props}
    return (
        <button  className='btn glyphicon glyphicon-search' {...props} style={{backgroundColor: '#254d71',color:'white'}} type="button" onClick={()=>sendRequest()}><i class="fa fa-home">{label}</i></button>
    )
}

export default Button;