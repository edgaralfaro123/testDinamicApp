import React from 'react'
const Input =(props)=> {
    const {showButton=false,action,showPassword} = props
    console.log('showPassword',showPassword);
    return (
        <>
        {
            showButton ?
                <div className="input-group mb-3">
                    <input className="form-control" {...props} maxLength={255}></input>
                    <div class="input-group-append">
                        <button className="btn btn-outline-secondary" onClick={action} type="button"> {showPassword ? 'Mostrar' : 'Ocultar'}</button>
                    </div>
                </div>
            :
               <input className="form-control" {...props} maxLength={255}></input>
        }
        </>
    )
}

export default Input;