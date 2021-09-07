import React,{useState} from 'react'
import Button from '../../components/common/Button'

const Poll =()=>{

    const poll =[{
            name: 'Autos'
        },
        {
            name: 'Motos'
        }
    ]
    const sendRequest =()=>{

    }
    return (
        <>
            <div className="row">
                <ul>
                {poll.map((item)=>(
                    <li><Button className="btn col-sm-12 glyphicon glyphicon-search" label={item.name} sendRequest={sendRequest} /></li>
                ))}
                </ul>
            </div>
        </>
    )
}

export default Poll