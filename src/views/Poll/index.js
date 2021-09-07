import React,{useState} from 'react'
import Button from '../../components/common/Button'

const Poll =()=>{

    const poll =[{
            name: 'Autos',
            data:[{
                type:'text',
                question:'prueba de pregunta'
            },
            {
                type:'multiple',
                question:'prueba de pregunta'
            },
            {
                type:'unique',
                question:'prueba de pregunta unique',
                request:[{
                    id:'dasdasdsada',
                    request:'prueba reques'
                },
                {
                    id:'dasdasdsada',
                    request:'prueba reques'
                }]
            },
            ]
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