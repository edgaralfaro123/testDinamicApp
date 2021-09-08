import React from 'react'
import Button from '../../components/common/Button'
import Menu from '../../components/common/Menu'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
const Poll =()=>{
    const poll = useSelector(state => state?.questionReducer?.questions)
    const history = useHistory();
    const sendRequest =(item,data)=>{
        console.log('data',data);
        history.push({pathname: '/DetailPoll',state: item, id: data.id ,name: data.name });
    }
    return (
        <>
            <Menu/>
            <div className="row">
                <table className="table m-5">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nombre encuesta</th>
                            <th scope="col"> Acción</th>
                        </tr>
                    </thead>
                    {poll.map((item,key)=>(
                        <tr key={key}>
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                            <td><Button className="btn col-sm-8 glyphicon glyphicon-search" label={item.name} sendRequest={()=>sendRequest(item.data,item)} /></td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}

export default Poll